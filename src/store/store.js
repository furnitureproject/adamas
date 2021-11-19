import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

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
    sellerJoinBody: {
      sellerId: null,
      sellerPw: null,
      sellerName: null,
      sellerBirth: null,
      sellerPhone: null,
      sellerEmail: null,
      businessName: null,
      businessCode: null,
      storeName: null,
      storePhone: null,
    },
    isLogin: false, //로그인 할때 씀
    categoryParent: 0, //product list 변경할때 씀
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
    changeSellerJoin: (state, payload) => {
      state.sellerJoinBody.sellerId = payload.sellerId
      state.sellerJoinBody.sellerPw = payload.sellerPw
      state.sellerJoinBody.sellerName = payload.sellerName
      state.sellerJoinBody.sellerBirth = payload.sellerBirth
      state.sellerJoinBody.sellerPhone = payload.sellerPhone
      state.sellerJoinBody.sellerEmail = payload.sellerEmail
      state.sellerJoinBody.businessName = payload.businessName
      state.sellerJoinBody.businessCode = payload.businessCode
      state.sellerJoinBody.storeName = payload.storeName
      state.sellerJoinBody.storePhone = payload.storePhone
    },
    // 로그인 유무
    changeisLoginState: (state, payload) => {
      state.isLogin = payload;
    },
    // navbar 카테고리 변경
    changecategoryParent: (state, payload) => {
      state.categoryParent = payload;
    }
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
    changeSellerJoinAct: ({ commit }, payload) => {
      commit('changeSellerJoin', payload);
    },
    changeisLoginAct: ({ commit }, payload) => {
      commit('changeisLoginState', payload);
    },
    changecategoryParentAct: ({ commit }, payload) => {
      commit('changecategoryParent', payload);
    }
  },
  modules: {
  },
  plugins: [ createPersistedState({ 
    //주목! : 여기에 쓴 모듈만 저장됩니다. 
    // https://ux.stories.pe.kr/207?category=770389
    // paths: ["cart","auth"], 
  }), ],
});
