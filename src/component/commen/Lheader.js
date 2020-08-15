import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class Lheader extends Component {
    constructor() {
        super()
        this.state = {
          p: '',
        }
      }
      back() {
        sessionStorage.clear('user');                 
      }
      person() {
        if (sessionStorage.user === undefined) {    
          this.props.history.push('/Sign_in')  
        } else {
          this.props.history.push('/Personal_Center_index')
        }
      } 
      componentDidMount() {
        if (sessionStorage.user === undefined) {
          let p1 = (
            <span id="user11">
              <Link to="/Sign_in" className="sn-login">
                请登录
              </Link>
              <Link to="/Sign_Register">免费注册</Link>
            </span>
          )
          this.setState({     
            p: p1,
          })
        } else {
          let userLogin = sessionStorage.getItem('user')
          let userEmtiy = JSON.parse(userLogin)
          this.setState(
            {
              user: userEmtiy.user, 
              kk: '',
            },
            () => {
              let p1 = (
                <span id="user11">
                  用户名：{this.state.user}{' '}
                  <em id="user12">
                    <Link to="/Sign_in" onClick={this.back.bind(this)}>
                      退出
                    </Link>
                  </em>
                </span>
              )
              this.setState({
                p: p1,
              })
            }
          )
        }
      }


    render() {
        return (
            <div className="index">
            <div id="site-nav" data-spm="a2226mz" role="navigation">
              <div id="sn-bg">
                <div className="sn-bg-right"></div>
              </div>
              <div id="sn-bd">
                <div className="sn-container">
                  <p id="login-info" className="sn-login-info">
                    <em data-spm-anchor-id="875.7931836/B.a2226mz.i0.2cc94265bHtErm">
                      欢迎来科乐福
                    </em>
                    {this.state.p}      
                  </p>

                  <ul className="sn-quick-menu">
                    <li className="sn-mytaobao menu-item j_MyTaobao"></li>
                    <li className="sn-cart">
                      <i className="fp-iconfont iconfont icon-qicheqianlian-"></i>
                      <a
                        className="sn-cart-link"
                        href="//cart.tmall.com/cart/myCart.htm?from=btop"
                        target="_top"
                        rel="nofollow"
                        data-spm-anchor-id="875.7931836/B.a2226mz.7"
                      >
                        购物车
                      </a>
                    </li>
                    <li className="sn-favorite menu-item">
                      <div className="sn-menu">
                        <a
                          className="menu-hd"
                          href="//shoucang.taobao.com/shop_collect_list.htm?scjjc=c1"
                          target="_top"
                          rel="nofollow"
                          aria-haspopup="true"
                          aria-expanded="false"
                          data-spm-anchor-id="875.7931836/B.a2226mz.8"
                        >
                          收藏夹<b></b>
                        </a>
                      </div>
                    </li>
                    <li className="sn-separator"></li>
                    <li className="sn-mobile">
                      <i className="mui-global-iconfont">㑈</i>
                      <a
                        title="天猫无线"
                        target="_top"
                        className="sn-mobile-link"
                        href="//pages.tmall.com/wow/portal/act/app-download?scm=1027.1.1.1"
                        data-spm-anchor-id="875.7931836/B.a2226mz.11"
                      >
                        手机版
                      </a>
                    </li>
                    <li className="sn-home">
                      <a
                        href="//www.taobao.com/"
                        data-spm-anchor-id="875.7931836/B.a2226mz.12"
                      >
                        我要装修
                      </a>
                    </li>
                    <li className="sn-seller menu-item">
                      <span
                        className="menu-hd"
                        onClick={this.person.bind(this)}    
                      >
                        个人中心
                      </span>
                    </li>
                    <li className="sn-sitemap">
                      <a href="11" className="menu-hd">
                        网站导航
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        )
    }
}
