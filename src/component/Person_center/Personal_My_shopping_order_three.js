import React, { Component } from 'react'
import { connect } from 'react-redux'
import './css/Personal_My_shopping_order_three.css'
import store from '../../store/personal_cartOrder_store'
import $ from 'jquery'

class Personal_My_shopping_order_three extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      banksrc:this.props.banksrc,
    }
  }
  bank() {
    let bank = this.props.bank.map((item, index) => {
      return (
        <div key={index}>
          <label>
            <input type="radio" name="bank" />
            <img src={item.imgsrc} alt="" />
          </label>
        </div>
      )
    })
    this.setState({
      bank: bank,
    })
  }
  componentDidMount() {
    console.log(this.props)
    this.bank()
  }
  gopage() {
    console.log($('.success-order-content-model').css('display'))
    $('.success-order-content-model').css('display','block')
  }
  // 跳订单
  goorder(){
    this.props.history.push('/Personal_My_order')
  }
render() {
  return (
    <div className="success-order-content">
      <div className="success-order-content-model">
        <div>
          <h1>支付确认</h1>
          <p>请在新开的网上银行页面进行支付，支付完成前请不要关闭该窗口。</p>
          <span>
            <img src={require('../../assets/images/cg_03.png')} alt="" />
            <div onClick={this.goorder.bind(this)}>
              <p>已完成支付</p>
              <p>查看订单详情</p>
            </div>
          </span>
          <span>
            <img src={require('../../assets/images/cg_05.png')} alt="" />
            <div>
              <p>支付遇到问题</p>
              <p>重选支付方式</p>
            </div>
          </span>
        </div>
      </div>
      <h1>订单提交成功！</h1>
      <p>请您及时付款，以便订单能尽快处理！</p>
      <div>
        <span>
          订单编号：{this.props.time} | 发货日期：{((new Date(parseInt(this.props.time)).toLocaleString()).split(" "))[0]}
        </span>
      </div>
      <p>
        请于下单后24小时内完成付款，逾期未付款订单将被取消，配送当天支付成功的订单将顺延1天配送！
        </p>
      <p>
        (提示：为保护环境，本商城不提供一次性购物袋，还请您提前自备环保袋!)
        </p>
      <p>
        您还需支付：<font>￥{this.props.payable}元</font>
      </p>
      <div>
        <span>您已选择：</span>
        <div>
          <div>
            <img
              src={this.state.banksrc}
              alt=""
            />
          </div>
          <strong onClick={this.gopage.bind(this)}>立即支付</strong>
        </div>
      </div>
      <span>选择其它银行 / 支付平台</span>
      <div className="bank">{this.state.bank}</div>
    </div>
  )
}
}
const MapStateToProps = (state, OwnProps) => {
  return {
    post:state.cartorder,
    payable: state.cartorder.payable,
    rcommend: state.cartorder.recommend,
    bank: state.cartorder.bank,
    banksrc:state.cartorder.banksrc,
    time:state.cartorder.time,
  }
}
export default connect(MapStateToProps)(Personal_My_shopping_order_three)
