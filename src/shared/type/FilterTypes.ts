import type { SkillsResponseData } from '../../entities/skills/model/types';
import type { SpecializationsResponseData } from '../../entities/specializations/model/types';

type CreateUnion<
  Max extends number,
  Accumulator extends number[] = [],
> = Accumulator['length'] extends Max
  ? Accumulator[number]
  : CreateUnion<Max, [...Accumulator, Accumulator['length']]>;

type IntRange<Min extends number, Max extends number> = Exclude<
  CreateUnion<Max>,
  CreateUnion<Min>
>;

type ComplexityIds = '1,2,3' | '4,5,6' | '7,8' | '9,10';
type Rate = IntRange<1, 6>;

export type FiltersType = 'specializations' | 'skills' | 'complexity' | 'rate';

export type ComplexityData = { id: ComplexityIds; title: string };
export type RateData = { id: Rate; title: Rate };

export type FilterItemList =
  | SpecializationsResponseData[]
  | SkillsResponseData[]
  | ComplexityData[]
  | RateData[];
