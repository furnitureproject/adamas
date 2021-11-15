import { createStore } from 'vuex';

export default createStore({
  state: {
    logincheck: { userlog: true, sellerlog: false },
    userJoinBody: {
      userId: null,
      userPw: null,
      userName: null,
      userBirth: null,
      userPhone: null,
      userEmail: null,
    },
    token: null,
  },
  mutations: {
    changeLoginMut: (state, payload) => {
      // state.logincheck = { userlog: payload, sellerlog: !payload };
      state.logincheck.userlog = payload;
      state.logincheck.sellerlog = !payload;
    },
    changeUserJoin: (state, payload) => {
      state.userJoinBody.userId = payload.userId;
      state.userJoinBody.userPw = payload.userPw;
      state.userJoinBody.userName = payload.userName;
      state.userJoinBody.userBirth = payload.userBirth;
      state.userJoinBody.userPhone = payload.userPhone;
      state.userJoinBody.userEmail = payload.userEmail;
    },
    changeTokenState: (state, payload) => {
      state.token = payload;
    },
  },
  getters: {
  },
  actions: {
    changeLoginAct: ({ commit }, payload) => {
      commit('changeLoginMut', payload);
    },
    changeUserJoinAct: ({ commit }, payload) => {
      commit('changeUserJoin', payload);
    },
    changeTokenStateAct: ({ commit }, payload) => {
      commit('changeTokenState', payload);
    },
  },
  modules: {
  },
});
