import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//跳转
export default class check extends Component {
    render() {
        return (
            <div className="index">      
                <div className="main-nav">
                  <div className="inner-con0">
                  <div className="inner-con1">
                   <div className="inner-con2 clearfix">                               
                      {/* <Link  to="/Building_materials_Museum"> */}           

                      <div className="hover-pic"></div>
                      {/* </Link> */}

                      <a
                        href="//www.tmall.hk/?acm=lb-zebra-148799-667861.1003.4.2429983&amp;scm=1003.4.lb-zebra-148799-667861.OTHER_14561833841102_2429983"
                        aria-label="天猫国际"
                        data-spm-anchor-id="875.7931836/B.2016004.2"
                      >
                        优秀案例
                        <div className="hover-pic"></div>
                      </a>

                      <a
                        href="//vip.tmall.com/vip/index.htm?spm=875.7931836/B.2016004.3.2cc94265bHtErm&amp;acm=lb-zebra-148799-667861.1003.4.2429983&amp;scm=1003.4.lb-zebra-148799-667861.OTHER_14561845383563_2429983"
                        data-spm-anchor-id="875.7931836/B.2016004.3"
                      >
                        网上商城
                        <div className="hover-pic"></div>
                      </a>

                      <Link to="/Style_pavilion_case">
                        风格馆
                        <div className="hover-pic"></div>
                      </Link>

                      <Link to="/Decoration_Museum">
                        装修馆
                        <div className="hover-pic"></div>
                      </Link>

                      <Link to="/Craftsman_Pavilion">
                        工匠馆
                        <div className="hover-pic"></div>
                      </Link>
                      <Link to="/Secondhand_Market">
                        二手馆
                        <div className="hover-pic"></div>
                      </Link>

                      <Link to="/Building_materials_Museum">
                        建材馆
                        <div className="hover-pic"></div>
                      </Link>

                      <Link to="/Home_Museum">
                        家居馆
                        <div className="hover-pic"></div>
                      </Link>

                      <Link to="/Furniture_Museum">
                        家具馆
                        <div className="hover-pic"></div>
                      </Link>
                      <Link to="/Decoration_Diary_list">
                        日志馆
                        <div className="hover-pic"></div>
                      </Link>
                    </div>
                    </div>
                    </div>
                 </div>
            </div>
        )
    }
}
