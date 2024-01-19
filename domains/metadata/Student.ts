import { ArmorType, AttackType, CombatClass, EquipmentCategory, Rank, Role } from "./types";

export default interface Student {
  id: number;
  name: string;
  rarity: Rank;
  attackType: AttackType;
  armorType: ArmorType;
  role: Role;
  combatClass: CombatClass;
  equipments: EquipmentCategory[];
}
