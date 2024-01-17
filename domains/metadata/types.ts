/**
 * 稀有度/星级
 */
export type Rank = 1 | 2 | 3 | 4 | 5;

/**
 * 攻击类型
 */
export enum AttackType {
  Explosive = 'explosive',
  Piercing = 'piercing',
  Mystic = 'mystic',
  Sonic = 'sonic',
}

/**
 * 护甲类型
 */
export enum ArmorType {
  Light = 'light',
  Heavy = 'heavy',
  Special = 'special',
  Elastic = 'elastic',
}

/**
 * 职责
 */
export enum Role {
  Tank = 'tank',
  Dealer = 'dealer',
  Healer = 'healer',
  Support = 'support',
  TacticalSupport = 'tactical_support',
}

/**
 * 部队类型
 */
export enum CombatClass {
  Striker = 'striker',
  Special = 'special',
}

/**
 * 装备分类
 */
export enum EquipmentCategory {
  Hat = 'hat',
  Gloves = 'gloves',
  Shoes = 'shoes',
  Bag = 'bag',
  Badge = 'badge',
  Hairpin = 'hairpin',
  Charm = 'charm',
  Watch = 'watch',
  Necklace = 'necklace',
}
