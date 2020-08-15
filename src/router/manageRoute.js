import AdvertManage from '../component/manage/guanggaoManage/advertManage'
import OrderStatistics from '../component/manage/orderStatistics/orderStatistics'
import RootManage from '../component/manage/rootManage/rootManage'
import SearchManage from '../component/manage/searchManage/searchManage'
import UsersStatistics from '../component/manage/usersStatistics/usersStatistics'
import Usersaudit from '../component/manage/usersaudit/usersaudit'
import Usersaudited from '../component/manage/usersaudit/usersaudited'
import Orderdetails from '../component/manage/orderStatistics/Orderdetails'

import kstore from '../component/manage/business/kstore'
import payfor from '../component/manage/business/payfor'
import border from '../component/manage/business/border'
import borderdetails from '../component/manage/business/borderdetails'



export const secroutes = [
  {
    path: '/manage/AdvertManage',
    component: AdvertManage,
  },
  {
    path: '/manage/OrderStatistics',
    component: OrderStatistics,
  },
  {
    path: '/manage/RootManage',
    component: RootManage,
  },
  {
    path: '/manage/SearchManage',
    component: SearchManage,
  },
  {
    path: '/manage/UsersStatistics',
    component: UsersStatistics,
  },
  {
    path: '/manage/Usersaudit',
    component: Usersaudit,
  },
  {
    path: '/manage/Usersaudited',
    component: Usersaudited,
  },
  {
    path: '/manage/Orderdetails',
    component: Orderdetails,
  },
  {
    path:'/manage/Kstore',
    component:kstore
  },
  {
    path:'/manage/payfor',
    component:payfor
  },
  {
    path:'/manage/border',
    component:border
  },
  {
    path:'/manage/borderdetails',
    component:borderdetails
  }
]
