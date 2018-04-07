import Vue from 'vue';
import * as mutationTypes from './mutation-types';

export default {
  [mutationTypes.SET_INIT_RESOURCES]: (state, { resourceNames }) => {
    resourceNames.forEach((resourceName) => {
      Vue.set(state, resourceName, {
        isSearching: false,
        text: '',
        result: [],
      });
    });
  },

  [mutationTypes.SET_SEARCH_RESULT]: (state, {
    resourceName,
    result,
    text,
  }) => {
    Vue.set(state, resourceName, {
      isSearching: false,
      text,
      result,
    });
  },

  [mutationTypes.SET_SEARCH]: (state, { resourceName, searchString }) => {
    Vue.set(state[resourceName], 'text', searchString);
  },
};