import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import ProductRegist from '../views/product/ProductRegist.vue'
import ProductInfo from '../views/product/ProductInfo.vue'
import ProductList from '../views/product/ProductList.vue'
import Cart from '../views/order/Cart.vue'
import Order from '../views/order/Order.vue'
import UserMypage from '../views/mypage/UserMypage.vue'
import UserAddress from '@/components/mypage/user/UserAddress.vue';
import UserMypageMain from '@/components/mypage/user/UserMypageMain.vue';
import UserOrderList from '@/components/mypage/user/UserOrderList.vue';
import UserInfo from '@/components/mypage/user/UserInfo.vue';
import UserQnA from '@/components/mypage/user/UserQnA.vue';
import UserWithdraw from '@/components/mypage/user/UserWithdraw.vue';
import UserCancelRequest from '@/components/mypage/user/UserCancelRequest.vue';
import UserJoin from '../views/join/UserJoin.vue';
import SellerJoin from '../views/join/SellerJoin.vue';
import Join from '../views/join/Join.vue';
import Login from '../views/login/Login.vue';
import Logout from '../views/login/Logout.vue';


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/test', name: 'Test', component: Test },
  { path: '/product/regist', name: 'ProductRegist', component: ProductRegist },
  { path: '/product/info', name: 'ProductInfo', component: ProductInfo },
  { path: '/product/list', name: 'ProductList', component: ProductList },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/order', name: 'Order', component: Order },
  { // 라우터 뷰 안에 라우터 뷰 쓸려면 이렇게 차일드 쓸것
    path: '/user/mypage',
    children: [
      { path: '/user/order', component: UserOrderList },
      { path: '/user/info', component: UserInfo },
      { path: '/user/mypage', component: UserMypageMain },
      { path: '/user/withdraw', component: UserWithdraw },
      { path: '/user/address', component: UserAddress },
      { path: '/user/cancelrequest', component: UserCancelRequest },
      { path: '/user/qna', component: UserQnA },
    ],
    name: 'UserMypage',
    component: UserMypage,
  },
  { path: '/join', name: 'Join', component: Join },
  { path: '/user/join', name: 'UserJoin', component: UserJoin },
  { path: '/seller/join', name: 'SellerJoin', component: SellerJoin },
  { path: '/login', name: 'Login', component: Login },
  { path: '/logout', name: 'Logout', component: Logout },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
