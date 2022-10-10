import { ADD_PESON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from '@redux/constants';

export const setPesonToFavorite = (person) => ({
  type: ADD_PESON_TO_FAVORITE,
  payload: person,
});

export const removePesonToFavorite = (personId) => ({
  type: REMOVE_PERSON_FROM_FAVORITE,
  payload: personId,
});
