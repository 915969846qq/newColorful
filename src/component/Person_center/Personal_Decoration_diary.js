import React, { Component } from 'react'
import './css/Personal_Decoration_diary.css'
// import thunk from 'redux-thunk'
import { connect } from 'react-redux';
import {
  // orderListAction,
  // recommendAction,mycartAction,
  // cartListAction,
  diaryListAction
} from '../../action/peresonal_cartOrder_action'
import store from '../../store/personal_cartOrder_store'


//装修日记
class Personal_Decoration_diary extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      // diary: [{
      //     title: "年月日",
      //     createtime: "2019-11-10",
      //     updatetime: "2020-1-4",
      //     roominfo: "110m² 现代 半包",
      //     village: "清和苑",
      //     decorationcompany: "yijia装饰有限公司",
      // }, {
      //     title: "年月日",
      //     createtime: "2019-11-10",
      //     updatetime: "2020-1-4",
      //     roominfo: "110m² 现代 半包",
      //     village: "清和苑",
      //     decorationcompany: "yijia装饰有限公司",
      // }
      // ],
      number: [{
        look: 3,
        collection: 1,
        comment: 0,
      }],
      flag: [true, true],
    }
  }
  check(index, s) {
    console.log("222222222222222222===========================================", index)
    let iflag = this.state.flag;
    iflag[index] = false;
    console.log(iflag)
    this.setState({
      flag: iflag
    })
  }
  save(index, s) {
    console.log("1111111111111111===========================================", index)
    let iflag = this.state.flag;
    iflag[index] = true;
    console.log(iflag)
    this.setState({
      flag: iflag,

    })
  }
    // 点击页数
    gopage(page, s) {

      this.setState({
        page: page
      }, () => {
        // let gopage=this.state.page
        this.diary(this.state.page);
      })
    }
    // 上一页
    lastpage() {
      let pages = this.state.page
      if (pages > 1) {
        this.setState({
          page: pages - 1
        }, () => {
          this.diary(this.state.page);
        })
  
      }
    }
    // 下一页
    nextpage() {
      let pages = this.state.page;
      if (pages < Math.ceil(this.props.diary.length / 2)) {
        this.setState({
          page: pages + 1
        }, () => {
          console.log(this.state.page)
          this.diary(this.state.page);
          
        })
      }
    }
    pagesList() {
      let pages = [];
      for (let i = 1; i <= this.state.endpage; i++) {
        let page = <span className={this.state.page === i ? 'onpage' : 'page'} key={i} onClick={this.gopage.bind(this, i)}>{i}</span>;
        pages.push(page)
      }
      console.log(pages)
      this.setState({
        pages: pages,
      })
    }
diary(page){
  console.log(this.state.diary);
  let diary = this.state.diary.slice((page - 1) * 2, page * 2);

  let diaryarr = diary.map((item,index)=>{
    return(
      <div className="diary-content" key={index}>
          <div className="diary-content-header">
            <div className="diary-content-header-left">
              <h1>{item.name}</h1>
              <p>创建时间：{item.createdDate}&nbsp;&nbsp;更新时间：{item.updateDate}</p>
            </div>
            <div className="diary-content-header-right">
              <div>
                <img src={require('../../assets/images/Collection_icon_03.png')} alt="icon03"></img>
                <span>{item.viewsNum}</span>
              </div>
              <div className="img-border">
                <img src={require('../../assets/images/Collection_icon_05.png')} alt="icon05"></img>
                <span>{item.evaluationNum}</span>
              </div>
              <div>
                <img src={require('../../assets/images/Collection_icon_08.png')} alt="icon08"></img>
                <span>{item.comment}</span>
              </div>
            </div>
          </div>
          <div className="diary-content-content">
            <div>
              <p>房屋信息：<input type="text" style={{ lineHeight: "25px" }} disabled={this.state.flag[0]} defaultValue={item.houseInfo.style} /> </p>
              <p>所在小区：<input type="text" disabled={this.state.flag[0]} defaultValue={item.houseInfo.community} /></p>
              <p>装修公司：<input type="text" disabled={this.state.flag[0]} defaultValue={item.houseInfo.decorationCompany}></input></p>
            </div>
            {this.state.flag[0] === true ? <span onClick={this.check.bind(this, 0)}>编辑</span> : <span onClick={this.save.bind(this, 0)}>保存</span>}
          </div>
          <div className="diary-content-footer">
            <h2>全部日记{this.state.diary.length}篇</h2>
            {/* <span>续写日记</span> */}
          </div>
        </div>
    )
  })
  this.setState({
    diaryarr:diaryarr
  })
}
  componentWillMount() {
    console.log("222222222222222222222222222222222222222222222");
    console.log(this.props.diary)
    let diary = this.props.diary
    this.setState({
      diary: diary
    }, () => {
      console.log(this.props)
      console.log(this.state.diary)
      this.diary(this.state.page);
    });
    this.setState({
      endpage: Math.ceil(this.props.diary.length / 2),
    }, () => {
      this.pagesList(this.state.endpage);
    });
  }
  leavepage(){
    this.props.history.push('/Decoration_Write_diary');
  }
  render() {
    return (
      <div className="decoration-diary">
        <h1>我的装修日记</h1>
        {this.state.diaryarr}
        <div className="diaty-page">
              <span className="lastpage" onClick={this.lastpage.bind(this)}>上一页</span>
              {this.state.pages}
              <span className="nextpage" onClick={this.nextpage.bind(this)}>下一页</span>
        </div>
        <div className="diary-footer">
          <span onClick={this.leavepage.bind(this)}>+新建装修日记</span>
        </div>
      </div>
    )
  }
}

const MapStateToProps = (state, OwnProps) => {

  return {
    diary: state.cartorder.diarylist.data,
    cartlist: state.cartorder.cartlist.data,
  }
}
const MapDispatchProps = () => {
  return {
    getdiary: (param = { param: 9 }) => {
      store.dispatch(diaryListAction(param))
    }
  }
}
export default connect(MapStateToProps, MapDispatchProps)(Personal_Decoration_diary)
