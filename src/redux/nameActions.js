import { NAME_CHANGE } from './nameTypes';

export const nameChange = (e) => {
  return {
    type: NAME_CHANGE,
    text: e.target.value,
  };
};
