import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Link,
} from 'react-router-dom'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import './css/Personal_Center_index.css'
import store from '../store/personal_cartOrder_store'
import { diaryListAction, cartListAction } from '../action/peresonal_cartOrder_action'
import { getOrderRequest, getgoodsRequest, getdiaryRequest, addOrderRequest, alipayRequest } from '../api/cartOrder_api'


import Personal_My_order from '../component/Person_center/Personal_My_order'
import MyCenter_index from '../component/Person_center/MyCenter_index'
import Personal_Decoration_order from '../component/Person_center/Personal_Decoration_order'
import Personal_My_reservation from '../component/Person_center/Personal_My_reservation'
import Personal_Collection_goods from '../component/Person_center/Personal_Collection_goods'
import Personal_A_collection_shops from '../component/Person_center/Personal_A_collection_shops'
import Personal_Collection_activities from '../component/Person_center/Personal_Collection_activities'
import Personal_My_shopping_cart from '../component/Person_center/Personal_My_shopping_cart'
import Personal_My_shopping_order_two from '../component/Person_center/Personal_My_shopping_order_two'
import Personal_My_shopping_order_three from '../component/Person_center/Personal_My_shopping_order_three'
import Personal_customer_service from '../component/Person_center/Personal_customer_service'
import Personal_Review_sheet from '../component/Person_center/Personal_Review_sheet'
import Personal_coupon from '../component/Person_center/Personal_coupon'
import Personal_second_hand_management from '../component/Person_center/Personal_second_hand_management'
import Personal_My_service from '../component/Person_center/Personal_My_service'
import Personal_personal_information from '../component/Person_center/Personal_personal_information'
import Personal_Receipt_address from '../component/Person_center/Personal_Receipt_address'
import Personal_Security_Center from '../component/Person_center/Personal_Security_Center'
import Personal_Decoration_diary from '../component/Person_center/Personal_Decoration_diary'
import Personal_Service_role_entry from '../component/Person_center/Personal_Service_role_entry'
// 记录日记
import Decoration_Diary_list from '../component/Decoration_pipe/Decoration_Diary_list'
import Decoration_My_diary from '../component/Person_center/Decoration_My_diary'
import Decoration_Write_diary from '../component/Person_center/Decoration_Write_diary'
const { Header, Content, Footer, Sider } = Layout
// 个人中心
export default class Personal_Center_index extends Component {
  constructor() {
    super()
    this.state = {
      imgsrc: require('../assets/images/address.png'),
      local: '成都',
      username: 'colorful',
    }
  }
  chooseLocal() {
    console.log(this)
  }
  componentDidMount() {
    console.log(this.props)
  }
  diary() {
    console.log('======================diaryListAction=============================================');
    store.dispatch(async (dispatch) => {
      const res = await getdiaryRequest(1)
      console.log(res.data)
      dispatch({
        type: 'DIARYLIST',
        alldiary: res.data
      })
    });
  }
  cart() {
    console.log('======================cartListAction=============================================');
    // store.dispatch( async ( dispatch) => {
    //   const res = await getgoodsRequest(1)
    //   console.log(res.data)
    //   dispatch({
    //     type: 'CARTLIST',
    //     allcart: res.data
    //   })
    // });
  }
  order() {
    console.log('======================orderListAction=============================================');
    store.dispatch(async (dispatch) => {
      const res = await getOrderRequest(3)
      dispatch({
        type: 'ORDERLIST',
        allorder: res.data
      }, () => {
        console.log(res.data.data);
      })

    });
  }
  payfor() {
    store.dispatch(async (dispatch) => {
      const res = await alipayRequest()
      console.log(res.data)
      dispatch({
        type: 'ALIPAY',
        alipay: res.data
      })
    })
  }
  back(){
    sessionStorage.clear("user");
  }
  render() {
    return (
      <Layout className="center-index">
        {/* 个人中心 */}
        <Header>
          <div className="header-top">
            <div className="header-left header">
              <img src={this.state.imgsrc} alt="地址图标"></img>
              <span className="span-red">{this.state.local}</span>
              <span className="hover-red" onClick={this.chooseLocal.bind(this)}>
                【切换】
              </span>
            </div>
            <div className="header-midel header">
              <span className="span-gray">您好，欢迎您访问</span>
              <span className="span-red">{this.state.username}!</span>
            </div>
            <div className="header-right header">
              {sessionStorage.user === undefined ? <span> <a href="1" className="hover-red">登录</a><a href="1" className="hover-red">免费注册</a></span>
                : <span id="user11">用户名：{JSON.parse(sessionStorage.user).user} <em id="user12"><Link to="/Sign_in" onClick={this.back.bind(this)}>退出</Link></em></span>}

              <a href="1" className="hover-red">
                我要装修
              </a>
              <div>
                <img
                  src={require('../assets/images/hotline.png')}
                  alt="资讯图标"
                ></img>
                <span className="span-gray">咨询热线：4006-900-288</span>
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="header-bottom-img">
              <Link to="/"><img
                src={require('../assets/images/logo2.png')}
                alt="logo2"
              ></img></Link>
            </div>
            <div className="header-bottom-span">
              <h1>个人中心</h1>
            </div>
            <div className="header-bottom-button">
              <a href="1">成为经销商</a>
            </div>
          </div>
        </Header>
        <Content>
          <Layout className="content">
            <div className="content-top">
              <p>
                <a href="1">首页</a>
                <span>&gt;</span>
                <a href="1">我的个人中心</a>
              </p>
            </div>
            {/* <span onClick={this.payfor.bind(this)}>提交订单</span> */}
            <Router basename="/Personal_Center_index">
              {/* 装修日志 */}
              <div>
                <Route
                  path="/Personal_Decoration_diary/Decoration_Diary_list"
                  component={Decoration_Diary_list}
                ></Route>

                <Route
                  path="/Personal_Decoration_diary/Decoration_My_diary"
                  component={Decoration_My_diary}
                ></Route>
              </div>
              <div className="person-content-flex">
                <Sider className="left-menu">
                  <ul>
                    <li>
                      <h3>个人中心</h3>
                    </li>
                    <li>
                      <NavLink to="/Personal_My_order" >我的订单</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_Decoration_order">
                        装修订单
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/MyCenter_index">个人中心</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_My_reservation">我的预约</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_Collection_goods">
                        收藏的商品
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_A_collection_shops">
                        收藏的店铺
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_Collection_activities">
                        收藏的活动
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_My_shopping_cart" onClick={this.cart.bind(this)}>
                        我的购物车
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_customer_service">
                        客户服务
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_Review_sheet">评论晒单</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_coupon">优惠券</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_second_hand_management">
                        我的二手管理
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_My_service">我的服务</NavLink>
                    </li>
                    <li>
                      <h3>账户管理</h3>
                    </li>
                    <li>
                      <NavLink to="/Personal_personal_information">
                        我的个人资料
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_Receipt_address">收货地址</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_Security_Center">安全中心</NavLink>
                    </li>
                    <li>
                      <h3>我的装修</h3>
                    </li>
                    <li>
                      <NavLink to="/Personal_Decoration_diary" onClick={this.diary.bind(this)}>
                        装修日记
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Personal_Service_role_entry">
                        服务角色入口
                      </NavLink>
                    </li>
                  </ul>
                </Sider>
                <Content className="content-content">
                  <div className="fang_height100">
                    <Route
                      path="/Personal_My_order"
                      component={Personal_My_order}
                    ></Route>
                    <Route
                      path="/Personal_Decoration_order"
                      component={Personal_Decoration_order}
                    ></Route>
                    <Route
                      path="/MyCenter_index"
                      component={MyCenter_index}
                    ></Route>
                    <Route
                      path="/Personal_My_reservation"
                      component={Personal_My_reservation}
                    ></Route>
                    <Route
                      path="/Personal_Collection_goods"
                      component={Personal_Collection_goods}
                    ></Route>
                    <Route
                      path="/Personal_A_collection_shops"
                      component={Personal_A_collection_shops}
                    ></Route>
                    <Route
                      path="/Personal_Collection_activities"
                      component={Personal_Collection_activities}
                    ></Route>
                    <Route
                      path="/Personal_My_shopping_cart"
                      component={Personal_My_shopping_cart}
                    ></Route>
                    <Route
                      path="/Personal_My_shopping_order_two"
                      component={Personal_My_shopping_order_two}
                    ></Route>
                    <Route
                      path="/Personal_My_shopping_order_three"
                      component={Personal_My_shopping_order_three}
                    ></Route>

                    <Route
                      path="/Personal_customer_service"
                      component={Personal_customer_service}
                    ></Route>
                    <Route
                      path="/Personal_Review_sheet"
                      component={Personal_Review_sheet}
                    ></Route>
                    <Route
                      path="/Personal_coupon"
                      component={Personal_coupon}
                    ></Route>
                    <Route
                      path="/Personal_second_hand_management"
                      component={Personal_second_hand_management}
                    ></Route>
                    <Route
                      path="/Personal_My_service"
                      component={Personal_My_service}
                    ></Route>
                    <Route
                      path="/Personal_personal_information"
                      component={Personal_personal_information}
                    ></Route>
                    <Route
                      path="/Personal_Receipt_address"
                      component={Personal_Receipt_address}
                    ></Route>
                    <Route
                      path="/Personal_Security_Center"
                      component={Personal_Security_Center}
                    ></Route>
                    <Route
                      path="/Personal_Decoration_diary"
                      component={Personal_Decoration_diary}
                    ></Route>
                    <Route
                      path="/Personal_Service_role_entry"
                      component={Personal_Service_role_entry}
                    ></Route>
                    <Route
                      path="/Decoration_Write_diary"
                      component={Decoration_Write_diary}
                    ></Route>
                    {/* <Redirect from="/" to="/MyCenter_index"></Redirect> */}
                  </div>
                </Content>
              </div>
            </Router>
          </Layout>
        </Content>
        <Footer>
        <div className="personal-footer">
            <div className="personal-footer-top">
              <div>
                <h3>购物指南</h3>
                <ul>
                  <li>
                    <a href="/">免费注册</a>
                  </li>
                  <li>
                    <a href="/">会员等级</a>
                  </li>
                  <li>
                    <a href="/">常见问题</a>
                  </li>


                </ul>
              </div>
              <div>
                <h3>服务保障</h3>
                <ul>
                  <li>
                    <a href="/">合作招商</a>
                  </li>
                  <li>
                    <a href="/">培训中心</a>
                  </li>
                  <li>
                    <a href="/">广告服务</a>
                  </li>
                  <li>
                    <a href="/">商家帮助</a>
                  </li>
                  <li>
                    <a href="/">服务市场</a>
                  </li>
                  <li>
                    <a href="/">规则中心</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>物流配送</h3>
                <ul>
                  <li>
                    <a href="/">运费政策</a>
                  </li>
                  <li>
                    <a href="/">物流配送服务</a>
                  </li>
                  <li>
                    <a href="/">签收验货</a>
                  </li>
                  <li>
                    <a href="/">物流查询</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>售后服务</h3>
                <ul>
                <li>
                    <a href="/">退换货政策</a>
                  </li>
                  <li>
                    <a href="/">贵就赔</a>
                  </li>
                  <li>
                    <a href="/">维修/安装</a>
                  </li>
                  <li>
                    <a href="/">订单修改</a>
                  </li>
                  <li>
                    <a href="/">退换货申请</a>
                  </li>
                  <li>
                    <a href="/">我的发票</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>关于我们</h3>
                <ul>
                  <li>
                    <a href="/">联系我们</a>
                  </li>
                  <li>
                    <a href="/">诚聘英才</a>
                  </li>
                  <li>
                    <a href="/">合作招商</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="personal-footer-content">
              <p>2005-2016 科乐福版权所有，并保留所有权利。</p>
              <p>关于我们 联系我们 友情链接 帮助中心 意见反馈 高薪聘请 法律声明</p>
              <p>ICP备案证书号:蜀ICP备00000000号</p>
              <div>
                <img src={require('../assets/images/footer-icon_03.png')}></img>
              </div>
            </div>
          </div>
        </Footer>
      </Layout>
    )
  }
}
