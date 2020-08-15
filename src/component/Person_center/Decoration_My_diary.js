import React, { Component } from 'react'
import { Row, Col, Button, Divider } from 'antd'
import { Spin, Alert } from 'antd'
import axios from 'axios'
// import axios from 'axios'
import Store from '../../store/Decoration_store'
import '../../assets/iconfont/Fang_iconfont/iconfont.css'
//个人中心-我的装修日记
export default class Decoration_My_diary extends Component {
  constructor(props) {
    super(props)
    // console.log(props.location.params)
    this.state = {}
    if (props.location.params !== undefined) {
      sessionStorage.setItem('data', JSON.stringify(props.location.params))
    }
    if (JSON.parse(sessionStorage.getItem('user') === undefined)) {
      window.location.href = '/Sign_in'
    }
    if (JSON.parse(sessionStorage.getItem('user') !== undefined)) {
      let mydata = JSON.parse(sessionStorage.getItem('data'))
      console.log(mydata)
      // 发送请求
      let data = {}
      data.id = mydata.id
      console.log(data)
      axios
        .post('http://47.100.90.56:8080/banJu/Diary/findAllById', data)
        .then((response) => {
          console.log(response)
          let alldata = response.data.data1
          for (let i = 0; i < response.data.data2.length; i++) {
            alldata[0].diaryEvaluationList.push(response.data.data2[i])
          }

          console.log(alldata)
          this.setState(
            {
              data: mydata,
              commitdata: alldata,
            },
            () => {
              console.log(this.state)
            }
          )
        })
      // 页面获取数据
      // console.log('现在是获取数据111')
      Store.dispatch({
        type: 'Decoration_data',
        id: this.state.data,
      })
    }
  }

  componentWillUnmount() {
    // console.log('1111')
    sessionStorage.removeItem('data')
  }
  render() {
    console.log(this.state)
    // if(this.state.id===undefined){}
    return this.state.commitdata === undefined ? (
      <Spin tip="Loading..." className="fang_FangCenter">
        <Alert
          description="页面加载中，请稍后"
          type="info"
          className="fang_FangCenter"
        />
      </Spin>
    ) : (
      <div className="fang_Width1200">
        <div className="fang_GBcolor fang_title">
          {this.state.data.name}的装修日记
        </div>
        <Row className="fang_Border">
          {/* 用户头像 */}
          {this.state.commitdata[0].img1!==null?(
          <Col span={4} className="fang_center fang_marginT20">
          <img
            src={require('../../assets/images/Decoration_img/Sellers_1.jpg')}
            alt=""
            className="fang_portraitL"
          />
        </Col>
          ):(
            <Col span={4} className="fang_center fang_marginT20">
            <img
              src={require('../../assets/images/Decoration_img/title.jpg')}
              alt=""
              className="fang_portraitL"
            />
          </Col>
          )}
          {/* 装修基本信息 */}
          <Col span={6} offset={1}>
            <h2 className="fang_marginT20">{this.state.data.name}</h2>
            <p>{this.state.commitdata[0].createdDate}</p>
            <p>
              <span>房屋信息 : </span>
              <span className="fang_marginL20">
                {this.state.commitdata[0].houseInfo.builtArea}平米
              </span>
              <span className="fang_marginL20">
                {this.state.commitdata[0].houseInfo.city}
              </span>
              <span className="fang_marginL20">
                {this.state.commitdata[0].houseInfo.style}
              </span>
            </p>
            <p>
              <span>所在小区 : </span>
              <span className="fang_marginL20">
                {this.state.commitdata[0].houseInfo.community}
              </span>
            </p>
            <p>
              <span>装修公司 : </span>
              <span className="fang_marginL20">
                {this.state.commitdata[0].houseInfo.decorationCompany}
              </span>
            </p>
          </Col>
          {/* 他人浏览 */}
          <Col span={8}>
            <Row align="middle" className="fang_height">
              <Col span={9} className="fang_rline" offset={6}>
                <p>{this.state.commitdata[0].viewsNum}</p>
                <span>浏览</span>
              </Col>
              <Col span={9}>
                <p>{this.state.commitdata[0].diaryEvaluationList.length}</p>
                <span>评论</span>
              </Col>
            </Row>
          </Col>
          {/* 微信二维码 */}
          <Col span={4} offset={1} className="fang_align">
            <img
              src={require('../../assets/images/Decoration_img/weixin.jpg')}
              alt=""
            />
          </Col>
        </Row>
        {/* 日记篇数 */}
        <div className="fang_marginT20">
          <Button type="primary" danger>
            全部日记共{this.state.commitdata[0].evaluationNum}篇
          </Button>
        </div>
        {/* 拆改装修信息 */}
        <div className="fang_marginT20">
          {/* 下划线 */}

          {/* 评论内容 */}
          <div className="fang_width1100">
            <Divider />
            <p className="fang_relative">{this.state.commitdata[0].name}</p>
            <p className="fang_padding30">{this.state.commitdata[0].content}</p>
            {/* 发送的图片 */}
            {this.state.commitdata[0].img1!==null?(
            <Row>
            <Col>
              <img
                src={require('../../assets/images/Decoration_img/Sellers_1.jpg')}
                alt=""
              />
            </Col>
            <Col offset={1}>
              <img
                src={require('../../assets/images/Decoration_img/Sellers_1.jpg')}
                alt=""
              />
            </Col>
            <Col offset={1}>
              <img
                src={require('../../assets/images/Decoration_img/Sellers_1.jpg')}
                alt=""
              />
            </Col>
          </Row>
            ):null}
            <div className="fang_marginT20 fang_flex">
              <div className="fang_align">
                <span className="iconfont icon-xinxi fang_RBcolor"></span>
                <span className="fang_marginL20">
                  {this.state.commitdata[0].diaryEvaluationList.length}回复
                </span>
              </div>
              <div className="fang_align">
                <span className="fang_align">分享到：</span>
                <span className="iconfont icon-qqkongjian1 fang_fontS fang_marginR20 fang_YColor"></span>
                <span className="iconfont icon-weixin-copy fang_fontS fang_marginR20 fang_RColor"></span>
                <span className="iconfont icon-weibo fang_fontS fang_LColor"></span>
              </div>
            </div>
            <Divider />
            <Row className="fang_Button50">
              <Col span={5}>
                所有评论 | {this.state.commitdata[0].diaryEvaluationList.length}
                条
              </Col>
              <Col span={19}></Col>
            </Row>
            <Row>
              <Col span={1} offset={1} className="fang_WBcolor">
              {this.state.commitdata[0].img1!==null?(
                  <Col span={4} className="fang_center fang_marginT20">
                  <img
                    src={require('../../assets/images/Decoration_img/Sellers_1.jpg')}
                    alt=""
                    className="fang_portraitS"
                  />
                </Col>
                  ):(
                    <Col span={4} className="fang_center fang_marginT20">
                    <img
                      src={require('../../assets/images/Decoration_img/title.jpg')}
                      alt=""
                      className="fang_portraitS"
                    />
                  </Col>
                  )}
              </Col>
              <Col span={20}>
                <div className="fang_WBcolor fang_Middel fang_relative">
                  <span>{this.state.commitdata[0].name} :</span>
                  <span className="fang_marginL20">
                    {this.state.data.content}
                  </span>
                </div>
              </Col>
            </Row>
            <Row className="fang_WBcolor">
              <Col
                span={20}
                offset={2}
                className="fang_padding20 fang_marginT20"
              >
                <div className="fang_padding20">
                  <Comment
                    mydata={this.state.commitdata[0]}
                    loc={this}
                  ></Comment>
                </div>
              </Col>
            </Row>
            <Row className="fang_marginT20 fang_borderline">
              <textarea
                name="comment"
                id="comment"
                cols="200"
                rows="5"
                maxLength="200"
                className="fang_noborder fang_padding20 fang_paddingt10"
                onBlur={this.mytext.bind(this)}
                placeholder="随便说说你的想法吧，或者你有什么问题？和大家一起探讨吧......."
              ></textarea>
            </Row>
            <Row className="fang_WBcolor fang_marginT20">
              <Col span={24} className="fang_relative fang_height30">
                <span className="fang_option_Tips fang_GColor">
                  你最多输入200个字
                </span>
                <button
                  className="fang_mybtn fang_option_delet"
                  onClick={this.send.bind(this)}
                >
                  发送
                </button>
              </Col>
            </Row>
          </div>
          <Divider />
        </div>
      </div>
    )
  }

  // 调用方法
  send = (data) => {
    document.getElementsByClassName('fang_noborder')[0].value = ''
    console.log(this.state.data)
    console.log(sessionStorage.getItem('user'))
    let ruie = JSON.parse(sessionStorage.getItem('user'))
    if (sessionStorage.getItem('user') !== null) {
      let usercommit = {}
      usercommit.did = this.state.commitdata[0].id
      usercommit.ruid = ruie.id
      usercommit.desc = this.state.text
      console.log(usercommit)
      axios
        .post(
          'http://47.100.90.56:8080/banJu/Evaluation/saveToDiary',
          usercommit
        )
        .then((response) => {
          console.log(response)
          location.reload()
        })
    } else {
      console.log('请登录用户')
      window.location.href = '/Sign_in'
    }
  }
  // 获取输入的文本
  mytext = (data) => {
    console.log(data)
    this.setState({
      text: data.target.value,
    })
  }
}
// 评论内容
function Comment(props) {
  console.log(props.mydata.diaryEvaluationList.length)
  if (props.mydata.diaryEvaluationList.length > 0) {
    let data = props.mydata.diaryEvaluationList
    let List = data.map((item, index) => (
      <div key={item.desc} className="fang_height30">
        <span>{item.user.name} :</span>
        <span className="fang_marginL20">{item.desc}</span>
      </div>
    ))
    return List
  } else {
    return ''
  }
}
