export type TrueStringType = 'yes';
export type FalseStringType = 'no';

export type GlobalStringType = 'global';
export type ParentStringType = 'parent';

export type BooleanStringType = TrueStringType | FalseStringType;
export type ParentBooleanStringType = ParentStringType | BooleanStringType;
export type ParentBooleanOrStringType = boolean | ParentBooleanStringType;
export type GlobalBooleanStringType = GlobalStringType | BooleanStringType;
export type GlobalBooleanOrStringType = boolean | GlobalBooleanStringType;
