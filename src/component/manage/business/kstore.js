import React, { Component } from 'react'
import './kstore.css'
//商家操作
export default class kstore extends Component {
    render() {
        return (
            // 商家
            <div className="kk">
               {/* 1 */}
               <div className="ecsc-path"><span>商品 - - 商品列表</span></div>
               {/* 2 */}
               <div className="tabmenu">
                    <ul className="tab">
                                <li className="active"><a href="goods.php?act=list">商品列表</a></li>
                                <li><a href="goods.php?act=list&amp;extension_code=virtual_card">虚拟商品列表</a></li>
                                <li><a href="goods.php?act=trash">商品回收站</a></li>
                                                    
                    </ul>
                </div>
                {/* 3 */}
                <div className="btn-info">
                    <a className="sc-btn sc-blue-btn" href="goods.php?act=add"><i className="icon-plus"></i>添加新商品</a>
                </div>
                {/* 4 */}
                <div className="explanation clear mb20" id="explanation">
                    <div className="ex_tit"><i className="sc_icon"></i><h4>操作提示</h4></div>
                    <ul>
                        <li>设置商品运费模板：平台-&gt;地区&amp;配送-&gt;<a href="goods_transport.php?act=list">运费管理</a></li>
                    </ul>
                </div>
                {/* 5 */}
                <div className="search-info">
                	<div className="search-form">
                    <form method="get" action="" name="searchFormList">
                        <div className="search-key">
                        	<input type="text" className="text" name="keyword"  placeholder="商品ID/商品关键字" />
                            <input type="submit" className="submit" value=" 搜索 " />
                            <input type="hidden" name="act" value="store_goods_online"/>
                            <input type="hidden" name="op" value="index"/>
                            <input type="hidden" name="cat_id" id="cat_id" value="0"/>
                        </div>
                    <input type="hidden" name="_token" value="NUboBRxOqhbL5tZGDXju97Sn36rJM5DxCZkTxtiz"/>
                    </form>
                    </div>
                </div>
                {/* 6 */}
                <form method="post" action="goods.php" name="listForm">
                    <div id="listDiv">
                    <table className="ecsc-default-table goods-default-table">
                            <thead>
                                    <tr ectype="table_header">
                                        <th width="8%" className="frist"><a href="3" title="">编号</a><img src=" https://demo.dscmall.cn/assets/seller/images/sort_desc.gif" /></th>
                                        <th width="34%" className="tl">商品名称</th>
                                        <th width="10%">价格/应结金额</th>
                                        <th width="7%">库存</th>
                                        <th width="7%"><a href="4">排序</a><div className="img"></div></th>
                                        <th width="8%">上架</th>
                                        <th width="8%">审核状态</th>
                                        <th width="19%">操作</th>
                                    </tr>
                            </thead>
                            <tbody>
                                {/* 1 */}
                                <tr>
                                    <td className="frist trigger">
                                    	<div className="checkbox-info">
                                    		<input type="checkbox" className="ui-checkbox" value="1067" id="checkbox_1067" name="checkboxes[]" /><label  className="ui-label" ></label>
                                        </div>
                                        <div className="number">1067</div>
                                    </td>
                                    <td className="tl">
                                        <div className="goods-info">
                                        	<div className="goods-sku">
                                            	<span className="sku">商品货号：BT001060</span>
                                                <span className="time">发布时间：2020-08-12 16:39:11</span>
                                            </div>
                                        	<div className="goods-img"><a href="https://demo.dscmall.cn/goods.php?id=1067" target="_blank"><img src="https://demo.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169313235.jpg"  /></a></div>
                                            <div className="goods-desc">
                                                <div className="name">
                                                	<font title="裤子">裤子</font>
                                                                                                    </div>
                                            	<div className="goods-tag">
                                                    
                                                    
                                                    
                                                    
                                                    
                                                       
                                                </div>
                                            </div>
                                            <div className="goods-lie">
                                            	<span>商品运费：</span>
                                                                                                <a href="goods_transport.php?act=edit&amp;tid=7" target="_blank">
                                                                                                            <span>按运费模板</span>&nbsp;<em className="red">(快递模板)</em>
                                                                                                    </a>
                                                                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    	<p>
                                                                                    </p><p>0.00</p>
                                                                                <p></p>
                                        <p>
                                                                                        <input className="text w30 tc fn"    type="text" />&nbsp;%
                                                                                    </p>
                                    </td>
                                    <td>
                                    	                                            <p>1000</p>
                                                                            </td>
                                    <td>
										<div className="tDiv">
											<div className="value">
												<input name="manual_intervention" data-goodsid="1067" className="sc-btn btn30 sc-blueBg-btn fn" value="智能权重" type="button" />
											</div>
										</div>
									</td>
                                    <td>
                                        <div className="switch active ml25" title="是">
                                            <div className="circle">已上架</div>
                                        </div>
                                        <input type="hidden" value="1" name="" />
                                    </td>
                                    <td className="audit_status">
                                        <font className="blue">无需审核</font>
                                    </td>
                                    <td className="ecsc-table-handle tr">
                                        <span><a href="1"  target="_blank" className="btn-orange"><i className="sc_icon_see"></i><p>查看</p></a></span>
                                        <span><a href="2" title="复制商品信息" className="btn-orange"><i className="icon-copy"></i><p>复制</p></a></span>
                                        <span><a href="3" className="btn-green"><i className="icon-edit"></i><p>编辑</p></a></span>
                                        <span><a href="4"  title=""   className="btn-red"><i className="icon-trash"></i><p>删除</p></a></span>
										<span><a href="5" title="" className="btn-violet"><i className="icon-file-alt"></i><p>日志</p></a></span>
                                   
                                    </td>
                                    </tr>
                                    {/* 2 */}
                                    <tr>
                                    <td className="frist trigger">
                                    	<div className="checkbox-info">
                                    		<input type="checkbox" className="ui-checkbox" value="1067" id="checkbox_1067" name="checkboxes[]" /><label  className="ui-label" ></label>
                                        </div>
                                        <div className="number">775</div>
                                    </td>
                                    <td className="tl">
                                        <div className="goods-info">
                                        	<div className="goods-sku">
                                            	<span className="sku">商品货号：BT001061</span>
                                                <span className="time">发布时间：2020-08-12 12:29:31</span>
                                            </div>
                                        	<div className="goods-img"><a href="https://demo.dscmall.cn/goods.php?id=1067" target="_blank"><img src="https://demo.dscmall.cn/storage/images/202008/thumb_img/0_thumb_G_1597166956330.jpg"  /></a></div>
                                            <div className="goods-desc">
                                                <div className="name">
                                                <font title="韩都衣舍2020春季新款不加绒薄款破洞外穿打底裤女九分裤韩版夏季 领券下单立减/单件包邮/先拍先发货！">韩都衣舍2017春季新款不加绒薄款破洞外穿打底裤女九分裤韩版夏季 领券下单立减/单件包邮/先拍先发货！</font>
                                                                                                    </div>
                                            	<div className="goods-tag">
                                                    
                                                    
                                                    
                                                    
                                                    
                                                       
                                                </div>
                                            </div>
                                            <div className="goods-lie">
                                            	<span>商品运费：</span>
                                                                                                <a href="goods_transport.php?act=edit&amp;tid=7" target="_blank">
                                                                                                            <span>按运费模板</span>&nbsp;<em className="red">(快递模板)</em>
                                                                                                    </a>
                                                                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    	<p>
                                                                                    </p><p>98.00</p>
                                                                                <p></p>
                                        <p>
                                                                                        <input className="text w30 tc fn"    type="text" />&nbsp;%
                                                                                    </p>
                                    </td>
                                    <td>
                                    	                                            <p>1000</p>
                                                                            </td>
                                    <td>
										<div className="tDiv">
											<div className="value">
												<input name="manual_intervention" data-goodsid="1067" className="sc-btn btn30 sc-blueBg-btn fn" value="智能权重" type="button" />
											</div>
										</div>
									</td>
                                    <td>
                                        <div className="switch active ml25" title="是">
                                            <div className="circle">已上架</div>
                                        </div>
                                        <input type="hidden" value="1" name="" />
                                    </td>
                                    <td className="audit_status">
                                        <font className="green">审核已通过</font>
                                    </td>
                                    <td className="ecsc-table-handle tr">
                                        <span><a href="1"  target="_blank" className="btn-orange"><i className="sc_icon_see"></i><p>查看</p></a></span>
                                        <span><a href="2" title="复制商品信息" className="btn-orange"><i className="icon-copy"></i><p>复制</p></a></span>
                                        <span><a href="3" className="btn-green"><i className="icon-edit"></i><p>编辑</p></a></span>
                                        <span><a href="4"  title=""   className="btn-red"><i className="icon-trash"></i><p>删除</p></a></span>
										<span><a href="5" title="" className="btn-violet"><i className="icon-file-alt"></i><p>日志</p></a></span>
                                   
                                    </td>
                                    </tr>
                                    {/* 3 */}
                                    <tr>
                                    <td className="frist trigger">
                                    	<div className="checkbox-info">
                                    		<input type="checkbox" className="ui-checkbox" value="1067" id="checkbox_1067" name="checkboxes[]" /><label  className="ui-label" ></label>
                                        </div>
                                        <div className="number">654</div>
                                    </td>
                                    <td className="tl">
                                        <div className="goods-info">
                                        	<div className="goods-sku">
                                            	<span className="sku">商品货号：BT001067</span>
                                                <span className="time">发布时间：2020-08-10 15:22:31</span>
                                            </div>
                                        	<div className="goods-img"><a href="https://demo.dscmall.cn/goods.php?id=1067" target="_blank"><img src="https://demo.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169281436.jpg"  /></a></div>
                                            <div className="goods-desc">
                                                <div className="name">
                                                <font title="韩都衣舍2020韩版女装春装新款条纹显瘦百搭宽松v领七分袖衬衫潮 领券立减/单件包邮/七天无理由退换">韩都衣舍2017韩版女装春装新款条纹显瘦百搭宽松v领七分袖衬衫潮 领券立减/单件包邮/七天无理由退换</font>
                                                                                                    </div>
                                            	<div className="goods-tag">
                                                    
                                                    
                                                    
                                                    
                                                    
                                                       
                                                </div>
                                            </div>
                                            <div className="goods-lie">
                                            	<span>商品运费：</span>
                                                                                                <a href="goods_transport.php?act=edit&amp;tid=7" target="_blank">
                                                                                                            <span>按运费模板</span>&nbsp;<em className="red">(快递模板)</em>
                                                                                                    </a>
                                                                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    	<p>
                                                                                    </p><p>158.00</p>
                                                                                <p></p>
                                        <p>
                                                                                        <input className="text w30 tc fn"    type="text" />&nbsp;%
                                                                                    </p>
                                    </td>
                                    <td>
                                    	                                            <p>1000</p>
                                                                            </td>
                                    <td>
										<div className="tDiv">
											<div className="value">
												<input name="manual_intervention" data-goodsid="1067" className="sc-btn btn30 sc-blueBg-btn fn" value="智能权重" type="button" />
											</div>
										</div>
									</td>
                                    <td>
                                        <div className="switch active ml25" title="是">
                                            <div className="circle">已上架</div>
                                        </div>
                                        <input type="hidden" value="1" name="" />
                                    </td>
                                    <td className="audit_status">
                                        <font className="green">审核已通过</font>
                                    </td>
                                    <td className="ecsc-table-handle tr">
                                        <span><a href="1"  target="_blank" className="btn-orange"><i className="sc_icon_see"></i><p>查看</p></a></span>
                                        <span><a href="2" title="复制商品信息" className="btn-orange"><i className="icon-copy"></i><p>复制</p></a></span>
                                        <span><a href="3" className="btn-green"><i className="icon-edit"></i><p>编辑</p></a></span>
                                        <span><a href="4"  title=""   className="btn-red"><i className="icon-trash"></i><p>删除</p></a></span>
										<span><a href="5" title="" className="btn-violet"><i className="icon-file-alt"></i><p>日志</p></a></span>
                                   
                                    </td>
                                    </tr>
                                    {/* 4 */}
                                    <tr>
                                    <td className="frist trigger">
                                    	<div className="checkbox-info">
                                    		<input type="checkbox" className="ui-checkbox" value="1067" id="checkbox_1067" name="checkboxes[]" /><label  className="ui-label" ></label>
                                        </div>
                                        <div className="number">123</div>
                                    </td>
                                    <td className="tl">
                                        <div className="goods-info">
                                        	<div className="goods-sku">
                                            	<span className="sku">商品货号：BT001062</span>
                                                <span className="time">发布时间：2020-08-10 17:29:42</span>
                                            </div>
                                        	<div className="goods-img"><a href="https://demo.dscmall.cn/goods.php?id=1067" target="_blank"><img src="https://demo.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169216444.jpg"  /></a></div>
                                            <div className="goods-desc">
                                                <div className="name">
                                                <font title="韩都衣舍2020新款秋冬款长袖连衣裙宽松学生冬季内搭打底裙子韩版 领券下单立减/单件包邮/先拍先发货！">韩都衣舍2016新款秋冬款长袖连衣裙宽松学生冬季内搭打底裙子韩版 领券下单立减/单件包邮/先拍先发货！</font>
                                                                                                    </div>
                                            	<div className="goods-tag">
                                                    
                                                    
                                                    
                                                    
                                                    
                                                       
                                                </div>
                                            </div>
                                            <div className="goods-lie">
                                            	<span>商品运费：</span>
                                                                                                <a href="goods_transport.php?act=edit&amp;tid=7" target="_blank">
                                                                                                            <span>按运费模板</span>&nbsp;<em className="red">(快递模板)</em>
                                                                                                    </a>
                                                                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    	<p>
                                                                                    </p><p>368.00</p>
                                                                                <p></p>
                                        <p>
                                                                                        <input className="text w30 tc fn"    type="text" />&nbsp;%
                                                                                    </p>
                                    </td>
                                    <td>
                                    	                                            <p>1000</p>
                                                                            </td>
                                    <td>
										<div className="tDiv">
											<div className="value">
												<input name="manual_intervention" data-goodsid="1067" className="sc-btn btn30 sc-blueBg-btn fn" value="智能权重" type="button" />
											</div>
										</div>
									</td>
                                    <td>
                                        <div className="switch active ml25" title="是">
                                            <div className="circle">已上架</div>
                                        </div>
                                        <input type="hidden" value="1" name="" />
                                    </td>
                                    <td className="audit_status">
                                        <font className="green">审核已通过</font>
                                    </td>
                                    <td className="ecsc-table-handle tr">
                                        <span><a href="1"  target="_blank" className="btn-orange"><i className="sc_icon_see"></i><p>查看</p></a></span>
                                        <span><a href="2" title="复制商品信息" className="btn-orange"><i className="icon-copy"></i><p>复制</p></a></span>
                                        <span><a href="3" className="btn-green"><i className="icon-edit"></i><p>编辑</p></a></span>
                                        <span><a href="4"  title=""   className="btn-red"><i className="icon-trash"></i><p>删除</p></a></span>
										<span><a href="5" title="" className="btn-violet"><i className="icon-file-alt"></i><p>日志</p></a></span>
                                   
                                    </td>
                                    </tr>
                                    {/* 5 */}
                                    <tr>
                                    <td className="frist trigger">
                                    	<div className="checkbox-info">
                                    		<input type="checkbox" className="ui-checkbox" value="1067" id="checkbox_1067" name="checkboxes[]" /><label  className="ui-label" ></label>
                                        </div>
                                        <div className="number">222</div>
                                    </td>
                                    <td className="tl">
                                        <div className="goods-info">
                                        	<div className="goods-sku">
                                            	<span className="sku">商品货号：BT001062</span>
                                                <span className="time">发布时间：2020-08-13 16:11:33</span>
                                            </div>
                                        	<div className="goods-img"><a href="https://demo.dscmall.cn/goods.php?id=1067" target="_blank"><img src="https://demo.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169250846.jpg"  /></a></div>
                                            <div className="goods-desc">
                                                <div className="name">
                                                <font title="韩都衣舍秋冬喇叭长袖针织衫毛衣女套头宽松纯色百搭学生韩版打底 领券下单立减/单件包邮/先拍先发货！">韩都衣舍秋冬喇叭长袖针织衫毛衣女套头宽松纯色百搭学生韩版打底 领券下单立减/单件包邮/先拍先发货！</font>
                                                                                                    </div>
                                            	<div className="goods-tag">
                                                    
                                                    
                                                    
                                                    
                                                    
                                                       
                                                </div>
                                            </div>
                                            <div className="goods-lie">
                                            	<span>商品运费：</span>
                                                                                                <a href="goods_transport.php?act=edit&amp;tid=7" target="_blank">
                                                                                                            <span>按运费模板</span>&nbsp;<em className="red">(快递模板)</em>
                                                                                                    </a>
                                                                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    	<p>
                                                                                    </p><p>228.00</p>
                                                                                <p></p>
                                        <p>
                                                                                        <input className="text w30 tc fn"    type="text" />&nbsp;%
                                                                                    </p>
                                    </td>
                                    <td>
                                    	                                            <p>1000</p>
                                                                            </td>
                                    <td>
										<div className="tDiv">
											<div className="value">
												<input name="manual_intervention" data-goodsid="1067" className="sc-btn btn30 sc-blueBg-btn fn" value="智能权重" type="button" />
											</div>
										</div>
									</td>
                                    <td>
                                        <div className="switch active ml25" title="是">
                                            <div className="circle">已上架</div>
                                        </div>
                                        <input type="hidden" value="1" name="" />
                                    </td>
                                    <td className="audit_status">
                                        <font className="green">审核已通过</font>
                                    </td>
                                    <td className="ecsc-table-handle tr">
                                        <span><a href="1"  target="_blank" className="btn-orange"><i className="sc_icon_see"></i><p>查看</p></a></span>
                                        <span><a href="2" title="复制商品信息" className="btn-orange"><i className="icon-copy"></i><p>复制</p></a></span>
                                        <span><a href="3" className="btn-green"><i className="icon-edit"></i><p>编辑</p></a></span>
                                        <span><a href="4"  title=""   className="btn-red"><i className="icon-trash"></i><p>删除</p></a></span>
										<span><a href="5" title="" className="btn-violet"><i className="icon-file-alt"></i><p>日志</p></a></span>
                                   
                                    </td>
                                    </tr>
                                    {/* 6 */}
                                    <tr>
                                    <td className="frist trigger">
                                    	<div className="checkbox-info">
                                    		<input type="checkbox" className="ui-checkbox" value="1067" id="checkbox_1067" name="checkboxes[]" /><label  className="ui-label" ></label>
                                        </div>
                                        <div className="number">58</div>
                                    </td>
                                    <td className="tl">
                                        <div className="goods-info">
                                        	<div className="goods-sku">
                                            	<span className="sku">商品货号：BT001063</span>
                                                <span className="time">发布时间：2020-08-11 15:29:42</span>
                                            </div>
                                        	<div className="goods-img"><a href="https://demo.dscmall.cn/goods.php?id=1067" target="_blank"><img src="https://demo.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169186175.jpg"  /></a></div>
                                            <div className="goods-desc">
                                                <div className="name">
                                                <font title="韩都衣舍2020春装新款女装春款拼接喇叭长袖连衣裙中长款时尚韩版 领券立减/单件包邮/七天无理由退换">韩都衣舍2017春装新款女装春款拼接喇叭长袖连衣裙中长款时尚韩版 领券立减/单件包邮/七天无理由退换</font>
                                                                                                    </div>
                                            	<div className="goods-tag">
                                                    
                                                    
                                                    
                                                    
                                                    
                                                       
                                                </div>
                                            </div>
                                            <div className="goods-lie">
                                            	<span>商品运费：</span>
                                                                                                <a href="goods_transport.php?act=edit&amp;tid=7" target="_blank">
                                                                                                            <span>按运费模板</span>&nbsp;<em className="red">(快递模板)</em>
                                                                                                    </a>
                                                                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    	<p>
                                                                                    </p><p>178.00</p>
                                                                                <p></p>
                                        <p>
                                                                                        <input className="text w30 tc fn"    type="text" />&nbsp;%
                                                                                    </p>
                                    </td>
                                    <td>
                                    	                                            <p>1000</p>
                                                                            </td>
                                    <td>
										<div className="tDiv">
											<div className="value">
												<input name="manual_intervention" data-goodsid="1067" className="sc-btn btn30 sc-blueBg-btn fn" value="智能权重" type="button" />
											</div>
										</div>
									</td>
                                    <td>
                                        <div className="switch active ml25" title="是">
                                            <div className="circle">已上架</div>
                                        </div>
                                        <input type="hidden" value="1" name="" />
                                    </td>
                                    <td className="audit_status">
                                        <font className="green">审核已通过</font>
                                    </td>
                                    <td className="ecsc-table-handle tr">
                                        <span><a href="1"  target="_blank" className="btn-orange"><i className="sc_icon_see"></i><p>查看</p></a></span>
                                        <span><a href="2" title="复制商品信息" className="btn-orange"><i className="icon-copy"></i><p>复制</p></a></span>
                                        <span><a href="3" className="btn-green"><i className="icon-edit"></i><p>编辑</p></a></span>
                                        <span><a href="4"  title=""   className="btn-red"><i className="icon-trash"></i><p>删除</p></a></span>
										<span><a href="5" title="" className="btn-violet"><i className="icon-file-alt"></i><p>日志</p></a></span>
                                   
                                    </td>
                                    </tr>
                                    {/* 7 */}
                                    <tr>
                                    <td className="frist trigger">
                                    	<div className="checkbox-info">
                                    		<input type="checkbox" className="ui-checkbox" value="1067" id="checkbox_1067" name="checkboxes[]" /><label  className="ui-label" ></label>
                                        </div>
                                        <div className="number">666</div>
                                    </td>
                                    <td className="tl">
                                        <div className="goods-info">
                                        	<div className="goods-sku">
                                            	<span className="sku">商品货号：BT001065</span>
                                                <span className="time">发布时间：2020-08-12 14:29:42</span>
                                            </div>
                                        	<div className="goods-img"><a href="https://demo.dscmall.cn/goods.php?id=1067" target="_blank"><img src="https://demo.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169151126.jpg"  /></a></div>
                                            <div className="goods-desc">
                                                <div className="name">
                                                <font title="韩都衣舍2020韩版女装春装新款条纹显瘦百搭宽松v领七分袖衬衫潮 领券立减/单件包邮/七天无理由退换">韩都衣舍2017韩版女装春装新款条纹显瘦百搭宽松v领七分袖衬衫潮 领券立减/单件包邮/七天无理由退换</font>
                                                                                                    </div>
                                            	<div className="goods-tag">
                                                    
                                                    
                                                    
                                                    
                                                    
                                                       
                                                </div>
                                            </div>
                                            <div className="goods-lie">
                                            	<span>商品运费：</span>
                                                                                                <a href="goods_transport.php?act=edit&amp;tid=7" target="_blank">
                                                                                                            <span>按运费模板</span>&nbsp;<em className="red">(快递模板)</em>
                                                                                                    </a>
                                                                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    	<p>
                                                                                    </p><p>158.00</p>
                                                                                <p></p>
                                        <p>
                                                                                        <input className="text w30 tc fn"    type="text" />&nbsp;%
                                                                                    </p>
                                    </td>
                                    <td>
                                    	                                            <p>1000</p>
                                                                            </td>
                                    <td>
										<div className="tDiv">
											<div className="value">
												<input name="manual_intervention" data-goodsid="1067" className="sc-btn btn30 sc-blueBg-btn fn" value="智能权重" type="button" />
											</div>
										</div>
									</td>
                                    <td>
                                        <div className="switch active ml25" title="是">
                                            <div className="circle">已上架</div>
                                        </div>
                                        <input type="hidden" value="1" name="" />
                                    </td>
                                    <td className="audit_status">
                                        <font className="green">审核已通过</font>
                                    </td>
                                    <td className="ecsc-table-handle tr">
                                        <span><a href="1"  target="_blank" className="btn-orange"><i className="sc_icon_see"></i><p>查看</p></a></span>
                                        <span><a href="2" title="复制商品信息" className="btn-orange"><i className="icon-copy"></i><p>复制</p></a></span>
                                        <span><a href="3" className="btn-green"><i className="icon-edit"></i><p>编辑</p></a></span>
                                        <span><a href="4"  title=""   className="btn-red"><i className="icon-trash"></i><p>删除</p></a></span>
										<span><a href="5" title="" className="btn-violet"><i className="icon-file-alt"></i><p>日志</p></a></span>
                                   
                                    </td>
                                    </tr>
                                    {/* 8 */}
                                    <tr>
                                    <td className="frist trigger">
                                    	<div className="checkbox-info">
                                    		<input type="checkbox" className="ui-checkbox" value="1067" id="checkbox_1067" name="checkboxes[]" /><label  className="ui-label" ></label>
                                        </div>
                                        <div className="number">888</div>
                                    </td>
                                    <td className="tl">
                                        <div className="goods-info">
                                        	<div className="goods-sku">
                                            	<span className="sku">商品货号：BT001067</span>
                                                <span className="time">发布时间：2020-08-11 12:31:42</span>
                                            </div>
                                        	<div className="goods-img"><a href="https://demo.dscmall.cn/goods.php?id=1067" target="_blank"><img src="https://demo.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169074773.jpg"  /></a></div>
                                            <div className="goods-desc">
                                                <div className="name">
                                                <font title="韩都衣舍2020韩版女装春装新款条纹显瘦百搭宽松v领七分袖衬衫潮 领券立减/单件包邮/七天无理由退换">韩都衣舍2017韩版女装春装新款条纹显瘦百搭宽松v领七分袖衬衫潮 领券立减/单件包邮/七天无理由退换</font>
                                                                                                    </div>
                                            	<div className="goods-tag">
                                                    
                                                    
                                                    
                                                    
                                                    
                                                       
                                                </div>
                                            </div>
                                            <div className="goods-lie">
                                            	<span>商品运费：</span>
                                                                                                <a href="goods_transport.php?act=edit&amp;tid=7" target="_blank">
                                                                                                            <span>按运费模板</span>&nbsp;<em className="red">(快递模板)</em>
                                                                                                    </a>
                                                                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    	<p>
                                                                                    </p><p>268.00</p>
                                                                                <p></p>
                                        <p>
                                                                                        <input className="text w30 tc fn"    type="text" />&nbsp;%
                                                                                    </p>
                                    </td>
                                    <td>
                                    	                                            <p>1000</p>
                                                                            </td>
                                    <td>
										<div className="tDiv">
											<div className="value">
												<input name="manual_intervention" data-goodsid="1067" className="sc-btn btn30 sc-blueBg-btn fn" value="智能权重" type="button" />
											</div>
										</div>
									</td>
                                    <td>
                                        <div className="switch active ml25" title="是">
                                            <div className="circle">已上架</div>
                                        </div>
                                        <input type="hidden" value="1" name="" />
                                    </td>
                                    <td className="audit_status">
                                        <font className="green">审核已通过</font>
                                    </td>
                                    <td className="ecsc-table-handle tr">
                                        <span><a href="1"  target="_blank" className="btn-orange"><i className="sc_icon_see"></i><p>查看</p></a></span>
                                        <span><a href="2" title="复制商品信息" className="btn-orange"><i className="icon-copy"></i><p>复制</p></a></span>
                                        <span><a href="3" className="btn-green"><i className="icon-edit"></i><p>编辑</p></a></span>
                                        <span><a href="4"  title=""   className="btn-red"><i className="icon-trash"></i><p>删除</p></a></span>
										<span><a href="5" title="" className="btn-violet"><i className="icon-file-alt"></i><p>日志</p></a></span>
                                   
                                    </td>
                                    </tr>

                                    </tbody>
                                    </table>
                                    </div>
                                    </form>
                                    </div>

        )
    }
}
