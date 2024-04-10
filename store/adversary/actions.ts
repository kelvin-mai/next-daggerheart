import type { AdversaryProperties } from '@/lib/types';
import type {
  AdversaryAction,
  AdversaryActionNoArgs,
  ZustandSet,
} from './types';
import { safeParseInt } from '@/lib/utils';

export const changeAdversaryStringProperty: AdversaryAction<{
  property: keyof AdversaryProperties;
  value: string;
}> =
  (set) =>
  ({ property, value }) =>
    set((state) => ({
      ...state,
      adversary: { ...state.adversary, [property]: value },
    }));

export const changeAdversaryNumberProperty: AdversaryAction<{
  property: keyof AdversaryProperties;
  value: string;
}> =
  (set) =>
  ({ property, value }) => {
    set((state) => ({
      ...state,
      adversary: { ...state.adversary, [property]: safeParseInt(value) },
    }));
  };

export const changeThresholds: AdversaryAction<[number, number, number]> =
  (set) => (thresholds) =>
    set((state) => ({
      ...state,
      adversary: {
        ...state.adversary,
        thresholds,
      },
    }));

export const addExperience: AdversaryActionNoArgs = (set) => () =>
  set((state) => ({
    ...state,
    adversary: {
      ...state.adversary,
      experiences: [...state.adversary.experiences, { name: '', bonus: 0 }],
    },
  }));

export const changeExperience: AdversaryAction<{
  index: number;
  name: string;
  bonus: number;
}> =
  (set) =>
  ({ index, name, bonus }) =>
    set((state) => ({
      ...state,
      adversary: {
        ...state.adversary,
        experiences: state.adversary.experiences.map((e, i) =>
          index === i ? { ...e, name, bonus } : e,
        ),
      },
    }));

export const removeExperience: AdversaryAction<number> = (set) => (i) =>
  set((state) => ({
    ...state,
    adversary: {
      ...state.adversary,
      experiences: state.adversary.experiences.filter((_, j) => j !== i),
    },
  }));

export const addMove: AdversaryAction<{
  name?: string;
  description?: string;
}> =
  (set) =>
  ({ name = '', description = '' }) =>
    set((state) => ({
      ...state,
      adversary: {
        ...state.adversary,
        moves: [...state.adversary.moves, { name, description }],
      },
    }));

export const changeMove: AdversaryAction<{
  index: number;
  name: string;
  description: string;
}> =
  (set) =>
  ({ index, name, description }) =>
    set((state) => ({
      ...state,
      adversary: {
        ...state.adversary,
        moves: state.adversary.moves.map((e, i) =>
          index === i ? { ...e, name, description } : e,
        ),
      },
    }));

export const removeMove: AdversaryAction<number> = (set) => (i) =>
  set((state) => ({
    ...state,
    adversary: {
      ...state.adversary,
      moves: state.adversary.moves.filter((_, j) => j !== i),
    },
  }));

export const setActions = (set: ZustandSet) => ({
  changeAdversaryNumberProperty: changeAdversaryNumberProperty(set),
  changeAdversaryStringProperty: changeAdversaryStringProperty(set),
  changeThresholds: changeThresholds(set),
  addExperience: addExperience(set),
  changeExperience: changeExperience(set),
  removeExperience: removeExperience(set),
  addMove: addMove(set),
  changeMove: changeMove(set),
  removeMove: removeMove(set),
});
