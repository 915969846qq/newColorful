import React, {Component} from 'react'
import '../pages/css/index.css'
import "../pages/css/Home_Museum.css"
import Lheader from '../component/commen/Lheader'
import Lfoot from '../component/commen/footer'
class Home_Museum extends Component {
    render() {
        return (
            <div className="Home">
                <Lheader></Lheader>
                
                <div className="main">
                    {/*// <!--限时抢购-->*/}
                    <div className="flash_sale">
                        <div className="top"><p>限时特价 </p> <span>还剩 : </span></div>
                        <div className="bottomom">
                            <div className="lefft-one">
                                <div className="img"><img src={require("../assets/images/shafa.jpg")} alt=""/></div>
                                <div className="tetxt">
                                    <p>直降 <span>1999</span></p>
                                    <h5>￥ <span>999</span></h5>
                                    <a>立即购买  </a>
                                </div>
                            </div>
                            <div className="lefft-one">
                                <div className="img"><img src={require("../assets/images/dianshigui.jpg")} alt=""/></div>
                                <div className="tetxt">
                                    <p>直降 <span>1000</span></p>
                                    <h5>￥ <span>999</span></h5>
                                    <a>立即购买  </a>
                                </div>
                            </div>
                            <div className="lefft-one lefft-two">
                                <div className="img"><img src={require("../assets/images/chuanglian.jpg")} alt=""/></div>
                                <div className="tetxt">
                                    <p>直降 <span>1000</span></p>
                                    <h5>￥ <span>888</span></h5>
                                    <a>立即购买  </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*// <!--1F  客厅-->*/}
                    <div className="main-1">
                        <div className="main_tatale">
                            <p><span>1F</span>  &nbsp;  客厅 </p>
                        </div>

                        <div className="main-1_bottom">
                            <div className="main-1-botm-left">
                                <div className="main1-btm-img"><img src={require("../assets/images/dianshigui.jpg")} alt=""/></div>
                                <div className="tet">
                                    <div className="main-1-text">
                                        <div><img src={require("../assets/images/shafa.jpg")} alt=""/></div>
                                        <p className="p1">清新沙发</p>
                                        <p className="p2">简约气动家具R234</p>
                                    </div>
                                    <div className="main-1-text">
                                        <div><img src={require("../assets/images/chuanglian.jpg")} alt=""/></div>
                                        <p className="p1">繁星沙发</p>
                                        <p className="p2">简约气动家具R234</p>
                                    </div>
                                    <div className="main-1-text">
                                        <div><img src={require('../assets/images/chaji.jpg')} alt=""/></div>
                                        <p className="p1">黑板白底茶几</p>
                                        <p className="p2">简约气动家具R234</p>
                                    </div>
                                </div>
                            </div>
                            <div className="main-1-botm-left">
                                <div className="main1-btm-img"><img src={require("../assets/images/diaozhuideng.jpg")} alt=""/></div>
                                <div className="tet">
                                    <div className="main-1-text">
                                        <div><img src={require("../assets/images/diaodeng_a.jpg")} alt=""/></div>
                                        <p className="p1">雷士新中式吊灯</p>
                                        <p className="p2">简约气动家具R234</p>
                                    </div>
                                    <div className="main-1-text">
                                        <div><img src={require("../assets/images/diaodeng_b.jpg")} alt=""/></div>
                                        <p className="p1">水晶灯</p>
                                        <p className="p2">简约气动家具R234</p>
                                    </div>
                                    <div className="main-1-text">
                                        <div><img src={require("../assets/images/diaodeng_c.jpg")} alt=""/></div>
                                        <p className="p1">雷士</p>
                                        <p className="p2">简约气动家具R234</p>
                                    </div>
                                </div>
                            </div>
                            <div className="main-1-botm-left">
                                <div className="main1-btm-img"><img src={require("../assets/images/weichuang.jpg")} alt=""/></div>
                                <div className="tet">
                                    <div className="main-1-text">
                                        <div><img src={require("../assets/images/dongzhi.jpg")} alt=""/></div>
                                        <p className="p1">东芝液晶</p>
                                        <p className="p2">简约气动家具R234</p>
                                    </div>
                                    <div className="main-1-text">
                                        <div><img src={require("../assets/images/changhong.jpg")} alt=""/></div>
                                        <p className="p1">长虹液晶</p>
                                        <p className="p2">简约气动家具R234</p>
                                    </div>
                                    <div className="main-1-text">
                                        <div><img src={require("../assets/images/suoni.jpg")} alt=""/></div>
                                        <p className="p1">索尼液晶</p>
                                        <p className="p2">简约气动家具R234</p>
                                    </div>
                                </div>
                            </div>
                            <div className="main-1-botm-left main-1-botm-left2">
                                <div className="main1-btm-img"><img src={require("../assets/images/zhuozi.jpg")} alt=""/></div>
                                <div className="tet">
                                    <div className="main-1-text">
                                        <div><img src={require("../assets/images/zhuozi_a.jpg")} alt=""/></div>
                                        <p className="p1">清新大理石桌</p>
                                        <p className="p2">简约气动家具R234</p>
                                    </div>
                                    <div className="main-1-text">
                                        <div><img src={require("../assets/images/zhuozi_b.jpg")} alt=""/></div>
                                        <p className="p1">小巧大理石桌</p>
                                        <p className="p2">简约气动家具R234</p>
                                    </div>
                                    <div className="main-1-text">
                                        <div><img src={require("../assets/images/zhuozi_c.jpg")} alt=""/></div>
                                        <p className="p1">轻型大理石桌</p>
                                        <p className="p2">简约气动家具R234</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*// <!-- 2F 卧室-->*/}
                    <div className="main_2">
                        <div className="main_tatale">
                            <p><span>2F</span>  &nbsp;  卧室 </p>
                        </div>

                        <div className="main_2_bottom">
                            <div className="main_2_one">
                                <a href="/">
                                    <div className="img"><img src={require("../assets/images/yigui_a.jpg")} alt=""/></div>
                                    <div className="textt-botm">
                                        <p className="p0">普吉尼</p>
                                        <div>
                                            <p className="p1">￥ <span>1200</span></p>

                                            <p className="p2">￥ <span>1888</span></p>

                                            <p className="p3"> 已售<span>400</span></p>

                                        </div>
                                    </div>
                                </a>

                            </div>

                            {/*// <!--轮播-->*/}

                            <div className="main_2_one main_2_three">
                                <div className="banner-top Homemuseumlunbo1">
                                    <ul>
                                        <li><a href="/"><img src={require("../assets/images/yigui.jpg")} alt=""/></a></li>
                                        <li><a href="/"><img src={require("../assets/images/yigui_c.jpg")} alt=""/></a></li>
                                        <li><a href="/"><img src={require("../assets/images/yigui_f.jpg")} alt=""/></a></li>
                                    </ul>

                                    <ol>
                                        <li/>
                                        <li/>
                                        <li/>
                                    </ol>

                                </div>

                            </div>

                            <div className="main_2_one main_2_two">
                                <a href="/">
                                    <div className="img"><img src={require("../assets/images/yigui_b.jpg")} alt=""/></div>
                                    <div className="textt-botm">
                                        <p className="p0">简约纯白衣柜</p>
                                        <div>
                                            <p className="p1">￥ <span>2999</span></p>

                                            <p className="p2">￥ <span>3888</span></p>

                                            <p className="p3"> 已售<span>5000</span></p>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="main_2_one">
                                <a href="/">
                                    <div className="img"><img src={require("../assets/images/yigui_c.jpg")} alt=""/></div>
                                    <div className="textt-botm">
                                        <p className="p0">多色方格衣柜</p>
                                        <div>
                                            <p className="p1">￥ <span>1000</span></p>
                                            <p className="p2">￥ <span>1588</span></p>
                                            <p className="p3"> 已售<span>3000</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="main_2_one">
                                <a href="/">
                                    <div className="img"><img src={require("../assets/images/yigui_d.jpg")} alt=""/></div>
                                    <div className="textt-botm">
                                        <p className="p0">拉斐尔品牌衣柜</p>
                                        <div>
                                            <p className="p1">￥ <span>3999</span></p>
                                            <p className="p2">￥ <span>5999</span></p>
                                            <p className="p3"> 已售<span>10万+</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="main_2_one">
                                <a href="/">
                                    <div className="img"><img src={require("../assets/images/yigui_e.jpg")} alt=""/></div>
                                    <div className="textt-botm">
                                        <p className="p0">可爱粉白衣柜</p>
                                        <div>
                                            <p className="p1">￥ <span>1999</span></p>
                                            <p className="p2">￥ <span>2450</span></p>
                                            <p className="p3"> 已售<span>8000</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="main_2_one main_2_two">
                                <a href="/">
                                    <div className="img"><img src={require("../assets/images/yigui_f.jpg")} alt=""/></div>
                                    <div className="textt-botm">
                                        <p className="p0">纯白带放置电视衣柜</p>
                                        <div>
                                            <p className="p1">￥ <span>3999</span></p>
                                            <p className="p2">￥ <span>5000</span></p>
                                            <p className="p3"> 已售<span>10000</span></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*// <!--3F   客厅-->*/}
                    <div className="main-3">
                        <div className="main_tatale">
                            <p><span>3F</span>  &nbsp;  客厅 </p>
                        </div>

                        <div className="main-3_bottom">
                            <div className="div1">
                                <div className="div1_main">
                                    <p className="p-category_p">开 &nbsp;关</p>
                                    <p className="p-category_p p-category_p2">插 &nbsp;座</p>
                                    <p className="p-category_p">断路器</p>
                                    <p className="p-category_p p-category_p2">电 &nbsp;线</p>
                                    <p className="p-category_p">灯饰照明</p>
                                    <p className="p-category_p p-category_p2">插线板</p>

                                    <a className="main3-a-le-icn" href="/"><img src={require("../assets/images/main4-left-icon_03.jpg")} alt=""/></a>
                                    <a className="main3-a-le-icn" href="/"><img src={require("../assets/images/main4-left-icon_07.jpg")} alt=""/></a>
                                    <a className="main3-a-le-icn" href="/"><img src={require("../assets/images/main4-left-icon_11.jpg")} alt=""/></a>
                                    <a className="main3-a-le-icn" href="/"><img src={require("../assets/images/main4-left-icon_14.jpg")} alt=""/></a>

                                    <p className="text">原来生活可以更美好
                                        <br/>
                                        家有奥普才完美</p>
                                </div>
                            </div>

                            {/*// <!--轮播-->*/}
                            {/* <div className="div2">
                                <div className="banner-top Homemuseumlunbo2">
                                    <ul>
                                        <li><a href="/"><img src={require("../assets/images/zhuozi_a.jpg")} alt="阳台篇"/></a></li>
                                        <li><a href="/"><img src={require("../assets/images/zhuozi_b.jpg")} alt="卧室篇"/></a></li>
                                        <li><a href="/"><img src={require("../assets/images/zhuozi_c.jpg")} alt="客厅篇"/></a></li>
                                    </ul>

                                    <ol>
                                        <li/>
                                        <li/>
                                        <li/>
                                    </ol>
                                </div>
                            </div> */}

                            <div className="div3">
                                <div className="duanwutop">
                                    {/*<div className="img"><img src={require("../assets/images/duanwubuyaode_03.jpg")} alt=""/></div>*/}
                                    <p>大理石</p>
                                </div>
                                <p className="introduction">清新简单大理石卓</p>
                                <p className="Promotion "><span>促销价</span> ￥299 </p>
                                <div className="main-img-duanwu"><a href="/"><img src={require("../assets/images/zhuozi.jpg")} width="210" height="190px" alt=""/></a>
                                </div>
                            </div>

                            <div className="div4">
                                <p className="duanwutop"> 尊贵奢华</p>
                                <p className="introduction">纯白大理石桌子</p>
                                <p className="Promotion "><span>包邮价</span> ￥599 </p>
                                <div className="main-img-duanwu"><a href="/"><img src={require("../assets/images/zhuozi_a.jpg")} width="210" height="190px" alt=""/></a>
                                </div>
                            </div>

                            <div className="div5">
                                <p className="duanwutop"> 自然清新</p>
                                <p className="introduction">小型大理石桌子</p>
                                <p className="Promotion "><span>促销价</span> ￥199 </p>
                                <div className="main-img-shuzhuo"><a href="/"><img src={require("../assets/images/zhuozi_b.jpg")} width="210" height="190px" alt=""/></a>
                                </div>
                            </div>
                            <div className="div5">
                                <p className="duanwutop">优雅文艺 </p>
                                <p className="introduction">玻璃型桌子</p>
                                <p className="Promotion "><span>促销价</span> ￥499 </p>
                                <div className="main-img-shuzhuo"><a href="/"><img src={require("../assets/images/zhuozi_c.jpg")} width="210" height="190px" alt=""/></a>
                                </div>
                            </div>
                            <div className="div5">
                                <p className="duanwutop">多功能</p>
                                <p className="introduction">折叠式桌子</p>
                                <p className="Promotion "><span>促销价</span> ￥799 </p>
                                <div className="main-img-shuzhuo"><a href="/"><img src={require("../assets/images/zhuozi_d.jpg")} width="210" height="190px" alt=""/></a>
                                </div>
                            </div>
                            <div className="div5 div6">
                                <p className="duanwutop"> 实木餐桌</p>
                                <p className="introduction">时尚烤漆玻璃餐桌</p>
                                <p className="Promotion "><span>促销价</span> ￥199 </p>
                                <div className="main-img-shuzhuo"><a href="/"><img src={require("../assets/images/zhuozi_e.jpg")} width="210" height="190px" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*// <!--4F  客厅 -->*/}
                    <div className="main_4">
                        <div className="main_tatale">
                            <p><span>4F</span>  &nbsp;  客厅 </p>
                        </div>

                        <div className="main_4_botttom">
                            <div className="main_4_one">
                                <div className="icon-time"><img src={require("../assets/images/twoimages/icon_time_03.png")} alt=""/></div>
                                <p className="p1">新品上架 &nbsp; 限时抢购</p>
                                <p className="p2">精品好货都在这</p>
                                <div className="min-img"><img src={require("../assets/images/zhuozi_e.jpg")} width="210" height="190px" alt=""/></div>
                                <div>
                                    <p className="p3">品质保证 还包邮哦！亲</p>
                                    <div className="radius">
                                        <p className="p4">￥<span>390</span>元</p>
                                        <p className="p5">限量抢</p>
                                    </div>
                                </div>
                            </div>
                            <div className="main_4_two">
                                <p className="p1">折叠式桌子</p>
                                <p className="p2">￥<span>588.00</span> 元</p>
                                <div className="img"><img src={require("../assets/images/zhuozi_d.jpg")} width="210" height="190px" alt=""/></div>
                            </div>
                            <div className="main_4_two">
                                <p className="p1">时尚烤漆玻璃餐桌</p>
                                <p className="p2">￥<span>390.00</span> 元</p>
                                <div className="img"><img src={require("../assets/images/zhuozi_e.jpg")} width="210" height="190px" alt=""/></div>
                            </div>
                            <div className="main_4_two">
                                <p className="p1">玻璃型桌子</p>
                                <p className="p2">￥<span>388.00</span> 元</p>
                                <div className="img"><img src={require("../assets/images/zhuozi_c.jpg")} width="210" height="190px" alt=""/></div>
                            </div>
                            <div className="main_4_two main_4_three">
                                <p className="p1">小型大理石桌子</p>
                                <p className="p2">￥<span>499.00</span> 元</p>
                                <div className="img"><img src={require("../assets/images/zhuozi_b.jpg")} width="210" height="190px" alt=""/></div>
                            </div>
                            <div className="main_4_two main_4_three">
                                <p className="p1">纯白大理石桌子</p>
                                <p className="p2">￥<span>699.00</span> 元</p>
                                <div className="img"><img src={require("../assets/images/zhuozi_a.jpg")} width="210" height="190px" alt=""/></div>
                            </div>
                            <div className="main_4_two main_4_three">
                                <p className="p1">纯白阳光型</p>
                                <p className="p2">￥<span>888.00</span> 元</p>
                                <div className="img"><img src={require("../assets/images/zhuozi_f.jpg")} width="210" height="190px" alt=""/></div>
                            </div>
                            <div className="clear"></div>
                            <Lfoot></Lfoot>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home_Museum
