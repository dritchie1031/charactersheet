export enum otherProfType {
  Tool,
  Lang,
  Resistance,
  Other
}

export interface points {
  value: number;
  name: string;
  max: number;
}

export interface feature {
  name: string;
  value: string;
}

export interface char {
  name: string;
  level: number;
  exp: number;
  race: string;
  class: string;
  align: string;
  stats: number[];
  saves: boolean[];
  skills: boolean[];
  prof: number;
  ac: number;
  init: number;
  speed: number;
  maxhp: number;
  currhp: number;
  temphp: number;
  otherprofs: string[];
  otherpts: points[];
  features: feature[];
}

export interface weapon {
  dmgdie: number;
  numdice: number;
  hitbonus: number;
  name: string;
  description: string;
}

export interface inventory {
  money: {
    plat: number;
    gold: number;
    silver: number;
    copper: number;
  };
  items: string[];
}

export interface background {
  traits: string[];
  age: number;
  height: number;
  weight: number;
  appearance: string;
  alliesorgs: string;
  backstory: string;
}

export interface spell {
  name: string;
  description: string;
  prepped: boolean;
}

export interface spellinfo {
  spellability: number;
  savedc: number;
  atkbonus: number;
  casterlevel: number;
  spellsknown: spell[][];
  points: { value: number; max: number };
  slots: { value: number; max: number }[];
}

export interface charinfo {
  basics: char;
  inv?: inventory;
  bg?: background;
  sp?: spellinfo;
}