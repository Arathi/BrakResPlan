import { View, StyleSheet, Text } from "react-native";
import { ViewStyleProp } from "../common/styles";
import Student from '../../domains/archive/Student';
import Metadata from '../../domains/metadata/Student';
import { Svg, Image, Path, Rect, G, Defs, ClipPath } from "react-native-svg";
import { ArmorType, AttackType, Role, CombatClass } from "../../domains/metadata/types";

const AvatarSize = 120;
const AvatarGap = 4;
const BorderWidth = 1;
const Padding = 3;
const Margin = 4;
const NameBoxHeight = 28;
export const IconWidth = AvatarSize + 2*Padding + 2*BorderWidth + 2*Margin;
export const IconHeight = IconWidth + NameBoxHeight;

type Props = {
  id: number;
  style?: ViewStyleProp
};
export default function Icon({
  id,
  style = {},
}: Props) {
  const metadata: Metadata = {
    id: id,
    name: "名称",
    rarity: 3,
    attackType: AttackType.Explosive,
    armorType: ArmorType.Heavy,
    role: Role.Dealer,
    combatClass: CombatClass.Striker,
    equipments: [],
  };
  if (metadata == undefined) {
    return null;
  }

  const student: Student = {
    id: id,
    level: 1,
  };

  return (
    <View style={[styles.icon, style]}>
      <Upper metadata={metadata} student={student} />
      <Lower name={metadata.name} />
    </View>
  );
}

type UpperProps = {
  metadata: Metadata;
  student?: Student;
};
function Upper({metadata, student}: UpperProps) {
  return (
    <View style={styles.upper}>
      <Avatar metadata={metadata} student={student} />
      <Overlay student={student} />
    </View>
  );
}

type PathDefinitionsProps = {
  margin?: number;
  border?: number;
  padding?: number;
  radius?: number;
};
function pathDefinitions({
  margin = 0,
  border = 1,
  padding = 0,
  radius = 4,
}: PathDefinitionsProps): string {
  const size = AvatarSize + 2*margin + 2*border + 2*padding;
  const hb = border / 2;
  const gap = AvatarGap + 2*border + 2*padding;

  const definitions: string[] = [];
  definitions.push(`M ${margin+hb},${margin+border+gap+hb}`);
  definitions.push(`L ${margin+border+gap+hb},${margin+hb}`);
  definitions.push(`L ${size-margin-radius},${margin+hb}`);
  definitions.push(`A ${radius-hb} ${radius-hb} 90 0 1 ${size-margin-hb} ${margin+radius}`);
  definitions.push(`L ${size-margin-hb},${size-margin-gap}`);
  definitions.push(`L ${size-margin-gap},${size-margin-hb}`);
  definitions.push(`L ${margin+radius},${size-margin-hb}`);
  definitions.push(`A ${radius-hb} ${radius-hb} 90 0 1 ${margin+hb} ${size-margin-radius}`);
  definitions.push(`L ${margin+hb},${margin+border+gap+hb}`);
  return definitions.join(" ");
}

type AvatarProps = {
  metadata: Metadata;
  student?: Student;
  style?: ViewStyleProp;
};
function Avatar({
  metadata,
  student,
  style = {}
}: AvatarProps) {
  const margin = 0;
  const border = 1;
  const padding = 3;
  const radius = 6;
  const borderColor = "#D5DBDB";
  const size = AvatarSize + 2*margin + 2*padding + 2*border;

  const id = metadata.id;
  const studentAvatarURL = `https://schale.gg/images/student/icon/${id}.webp`;

  const clipDefinitions = pathDefinitions({margin: margin+padding, border: border, padding: 0, radius});
  const borderDefinitions = pathDefinitions({margin, border, padding, radius});

  const unowned = student == undefined;

  let attackTypeColor = "white";
  switch (metadata.attackType) {
    case AttackType.Explosive:
      attackTypeColor = "#A70C19";
      break;
    case AttackType.Piercing:
      attackTypeColor = "#B26D1F";
      break;
    case AttackType.Mystic:
      attackTypeColor = "#216F9C";
      break;
    case AttackType.Sonic:
      attackTypeColor = "#9431A5";
      break;
  }

  let armorTypeColor = "black";
  switch (metadata.armorType) {
    case ArmorType.Light:
      armorTypeColor = "#A70C19";
      break;
    case ArmorType.Heavy:
      armorTypeColor = "#B26D1F";
      break;
    case ArmorType.Special:
      armorTypeColor = "#216F9C";
      break;
    case ArmorType.Elastic:
      armorTypeColor = "#9431A5";
      break;
  }

  const avatarOffset = margin+border+padding;
  const adTypeHeight = 10;
  const opacity = unowned ? 0.75 : 0;
  const fillColor = unowned ? "#cccccc" : "#ffffff";

  return (
    <View style={[styles.avatar, {width: size, height: size}]}>
      <Svg>
        <Defs>
          <ClipPath id="clip">
            <Path d={clipDefinitions}></Path>
          </ClipPath>
        </Defs>
        <G stroke={borderColor} strokeWidth={border} fill={fillColor}>
          <Path d={borderDefinitions} />
        </G>
        <Image 
          href={studentAvatarURL} 
          x={avatarOffset}
          y={avatarOffset} 
          clipPath="url(#clip)"
        />
        <Rect fill={attackTypeColor} 
          fillOpacity={0.75} 
          x={avatarOffset} 
          y={size-avatarOffset-adTypeHeight} 
          width={AvatarSize/2} 
          height={adTypeHeight}
          clipPath="url(#clip)"
        />
        <Rect fill={armorTypeColor} 
          fillOpacity={0.75} 
          x={avatarOffset+AvatarSize/2} 
          y={size-avatarOffset-adTypeHeight} 
          width={AvatarSize/2} 
          height={adTypeHeight}
          clipPath="url(#clip)"
        />

        <G fill={"#000000"} fillOpacity={opacity}>
          <Rect
            x={0}
            y={0}
            width={size}
            height={size}
            clipPath="url(#clip)"
          />
        </G>
      </Svg>
    </View>
  );
}

function Overlay({student}: {student?: Student}) {
  if (student == undefined) {
    return null;
  }

  const level = student.level;
  let skills = "1/2/3/4";
  let equips = "1/2/3";

  return (
    <View style={styles.overlay}>
      <View style={styles.level}>
        <Text style={[styles.overlayText, styles.levelText]}>Lv.{level}</Text>
      </View>
      <View style={styles.skills}>
        <Text style={[styles.overlayText, styles.skillsText]}>S{skills}</Text>
      </View>
      <View style={styles.equips}>
        <Text style={[styles.overlayText, styles.equipsText]}>T{equips}</Text>
      </View>
    </View>
  );
}

type LowerProps = {
  name: string;
};
function Lower({
  name
}: LowerProps) {
  return (
    <View style={styles.lower}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    borderColor: '#E4EEEF',
    borderBottomWidth: 2,
    borderStyle: "dashed",
  },
  upper: {
    position: "relative",
    width: 128,
    height: 128,
  },

  avatar: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 128,
    height: 128,
  },

  overlay: {
    position: "absolute",
    left: 8,
    top: 8,
  },

  overlayText: {
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 1,
    textShadowOffset: { width: 1, height: 1},
    fontSize: 16,
    opacity: 0.9,
  },
  level: {},
  levelText: {
  },
  skills: {},
  skillsText: {
  },
  equips: {},
  equipsText: {
  },

  lower: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "flex-end",
    height: 28,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#60676D"
  },
});
