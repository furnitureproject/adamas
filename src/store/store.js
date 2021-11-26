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
    roleLogin: '', // 로그인 후에 역할 확인용
    categoryParent: 0, //product list 변경할때 씀
    sendcart: [], // 주문화면에 보낼 카트 데이터
    orderdata: 0, // 상품상세화면에서 바로 주문할 시에 주문페이지에서 보여줄 orderCode
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
    // 로그인 후에 역할 지정
    changeroleLoginState: (state, payload) => {
      state.roleLogin = payload;
    },
    // navbar 카테고리 변경
    changecategoryParent: (state, payload) => {
      state.categoryParent = payload;
    },
    // 주문화면에 보낼 카트 변경
    changesendcart: (state, payload) => {
      state.sendcart = payload;
    },
    changeorderdata: (state, payload) => {
      state.orderdata = payload;
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
    changeroleLoginAct: ({ commit }, payload) => {
      commit('changeroleLoginState', payload);
    },
    changecategoryParentAct: ({ commit }, payload) => {
      commit('changecategoryParent', payload);
    },
    changesendcartAct: ({ commit }, payload) => {
      commit('changesendcart', payload);
    },
    changeorderdataAct: ({ commit }, payload) => {
      commit('changeorderdata', payload);
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
