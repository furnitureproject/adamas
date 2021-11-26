import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Test1 from '../views/Test1.vue'
import Test2 from '../views/Test2.vue'
import Test3 from '../views/Test3.vue'
import Test4 from '../views/Test4.vue'
import ProductRegist from '../views/product/ProductRegist.vue'
import ProductInfo from '../views/product/ProductInfo.vue'
import ProductList from '../views/product/ProductList.vue'
import Cart from '../views/order/Cart.vue'
import Order from '../views/order/Order.vue'
import Orderdir from '../views/order/Orderdir.vue'
import UserMypage from '../views/mypage/UserMypage.vue'
import SellerMypage from '../views/mypage/SellerMypage.vue'
import UserAddress from '@/components/mypage/user/UserAddress.vue';
import UserMypageMain from '@/components/mypage/user/UserMypageMain.vue';
import SellerMypageMain from '@/components/mypage/seller/SellerMypageMain.vue';
import UserOrderList from '@/components/mypage/user/UserOrderList.vue';
import SellerOrderList from '@/components/mypage/seller/SellerOrderList.vue';
import UserInfo from '@/components/mypage/user/UserInfo.vue';
import SellerInfo from '@/components/mypage/seller/SellerInfo.vue';
import UserQnA from '@/components/mypage/user/UserQnA.vue';
import SellerQnA from '@/components/mypage/seller/SellerQnA.vue';
import UserWithdraw from '@/components/mypage/user/UserWithdraw.vue';
import SellerWithdraw from '@/components/mypage/seller/SellerWithdraw.vue';
import UserCancelRequest from '@/components/mypage/user/UserCancelRequest.vue';
import UserJoin from '../views/join/UserJoin.vue';
import SellerJoin from '../views/join/SellerJoin.vue';
import Join from '../views/join/Join.vue';
import Login from '../views/login/Login.vue';
import Logout from '../views/login/Logout.vue';


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/test', name: 'Test', component: Test },
  { path: '/test1', name: 'Test1', component: Test1 },
  { path: '/test2', name: 'Test2', component: Test2 },
  { path: '/test3', name: 'Test3', component: Test3 },
  { path: '/test4', name: 'Test4', component: Test4 },
  { path: '/product/regist', name: 'ProductRegist', component: ProductRegist },
  { path: '/product/info', name: 'ProductInfo', component: ProductInfo },
  { path: '/product/list', name: 'ProductList', component: ProductList },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/order', name: 'Order', component: Order },
  { path: '/orderdir', name: 'Orderdir', component: Orderdir },
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
  { // 라우터 뷰 안에 라우터 뷰 쓸려면 이렇게 차일드 쓸것
    path: '/seller/mypage',
    children: [
      { path: '/seller/mypage', component: SellerMypageMain },
      { path: '/seller/order', component: SellerOrderList },
      { path: '/seller/qna', component: SellerQnA },
      { path: '/seller/info', component: SellerInfo },
      { path: '/seller/withdraw', component: SellerWithdraw },

    ],
    name: 'SellerMypage',
    component: SellerMypage,
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
