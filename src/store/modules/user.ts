
import { Commit, Dispatch, GetterTree } from 'vuex';

export interface State {
  username: string;
  uid: string;
}

const state: State = {
  username: 'oo',
  uid: '11',
};

export default {
  namespaced: true,
  state,
  mutations: {
    SET_USER_NAME: () => {
      state.username = 'hello';
    },
  },
  actions: {
    foo: (context: { commit: Commit }) => {
      context.commit('SET_USER_NAME');
    },
  },
  getters: {
    uidname(state: State): string {
      return state.username;
    },
  } as GetterTree<State, any>,
};
