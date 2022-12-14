import { omit } from 'lodash';
import { ADD_PESON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from '@redux/constants';
import { getLocalStorage } from '@utils/localStorage';

const initialState = getLocalStorage('store');

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PESON_TO_FAVORITE:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_PERSON_FROM_FAVORITE:
      return omit(state, [action.payload]);
    default:
      return state;
  }
};

export default favoriteReducer;
