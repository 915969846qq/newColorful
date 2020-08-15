import { get, post } from 'axios'

// 从远端服务器获取数据 网络请求
export function getOrderRequest(a) {
  console.log(a)
  return post('http://47.100.90.56:8080/banJu/user/lookorder',{
    uid:a
  })//用户订单
}
// export function addOrderRequest() {
//   return post('http://47.100.90.56:8080/banJu/user/usergoods',{
//     uid:3,
//     gid:1,
//     status:0
//   })//添加用户订单
// }
export function getgoodsRequest(p) {
  console.log(p)
  return post('http://47.100.90.56:8080/banJu/user/findusergoods', {
    uid: p,
    status:0,
    }
  )//状态码：0、购物车。1、收藏夹 //购物车
}
export function getdiaryRequest(d){
  return post('http://47.100.90.56:8080/banJu/Diary/findAllByUid',{
    uid:d
  })//日记
}
export function alipayRequest(){
    return post('http://47.100.90.56:8080/banJu/pay/alipay',{
      money:400,
      desc:"家具",
      goods:"沙发",
    })//支付
}
export function couponRequest(c){
  console.log(c)
  return post('http://47.100.90.56:8080/banJu/user/usercoupon',{
    id:c
  })//查看优惠券
}
export function delcartallRequest(params){
  return post('http://47.100.90.56:8080/banJu/goods/delete',params)//删除购物车，批量
}
export function delcartRequest(g){
  console.log(g)
  return post('http://47.100.90.56:8080/banJu//user/deleteusergoods',{
    id:g
  })//删除购物车
}
export function addorderRequest(params){
  console.log(params)
  return post('http://47.100.90.56:8080/banJu/user/userorder',params)//添加订单
}
export function getaddressRequest(a){
  return post('http://47.100.90.56:8080/banJu/user/findAddress',{
    uid:a
  })//获取地址/user/addAddress
}
export function addAddressRequest(params){
  console.log(params)
  return post('http://47.100.90.56:8080/banJu/user/addAddress',params)//修改\新增地址
}
export function updateDataRequest(params){
  return post('http://47.100.90.56:8080/banJu/user/updateData',params)//修改用户信息
}
// {
//   uid:3,
//   gid:1,
//   aid:5,
//   status:'待付款'
// }

