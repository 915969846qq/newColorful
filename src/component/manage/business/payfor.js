import React, { Component } from 'react'
import './parfor.css'
//配送方式
export default class payfor extends Component {
    render() {
        return (
            <div className="parfor">
                {/* 1 */}
              <div className="ecsc-path"><span>系统 - - 配送方式</span></div>
                 {/* 2 */}
                 <div className="tabmenu">
                    <ul className="tab">
                        <li className="active"><a href="shipping.php?act=list">配送方式</a></li>
                        <li><a href="goods_transport.php?act=list">运费管理</a></li>                       
                    </ul>
                </div>
                {/* 3 */}
                <div className="list-div" id="listDiv">
                <table className="ecsc-default-table mt20">
                	<thead>
                        <tr>
                            <th width="12%" className="tl pl10">配送方式名称</th>
                            <th width="35%" className="tl pl10">配送方式描述</th>
                            <th width="16%">保价费用</th>
                            <th width="16%">货到付款</th>
							<th width="10%">支持快递鸟打印</th>
                            <th width="10%">排序</th>
       
                        </tr>
                    </thead>
					<tbody>
                                                                                                        <tr>
                            <td className="tl pl10">城际快递</td>
                            <td className="tl pl10">配送的运费是固定的</td>
                            <td align="center">0</td>
                            <td align="center">是</td>
							<td align="center">否</td>
                            <td align="center" valign="top">  <span>0</span>  </td>
                            <td align="center" nowrap="true">
                                                                                                       
                                                            </td>
                        </tr>
                                                                                    <tr>
                            <td className="tl pl10">德邦物流</td>
                            <td className="tl pl10"><a href="https://www.deppon.com" target="_blank">https://www.deppon.com</a></td>
                            <td align="center">0</td>
                            <td align="center">否</td>
							<td align="center">是</td>
                            <td align="center" valign="top">  <span>0</span>  </td>
                            <td align="center" nowrap="true">
                                                                                                          
                                                                        
                                                            </td>
                        </tr>
                                                                                                                            <tr>
                            <td className="tl pl10">市内快递</td>
                            <td className="tl pl10">固定运费的配送方式内容</td>
                            <td align="center">0</td>
                            <td align="center">否</td>
							<td align="center">否</td>
                            <td align="center" valign="top">  <span>0</span>  </td>
                            <td align="center" nowrap="true">
                                                                                                      
                                                            </td>
                        </tr>
                                                                                    <tr>
                            <td className="tl pl10">运费到付</td>
                            <td className="tl pl10">所购商品到达即付运费</td>
                            <td align="center">0</td>
                            <td align="center">否</td>
							<td align="center">否</td>
                            <td align="center" valign="top">  <span>0</span>  </td>
                            <td align="center" nowrap="true">
                                                                                                       
                                                            </td>
                        </tr>
                                                                                    <tr>
                            <td className="tl pl10">百世汇通快递</td>
                            <td className="tl pl10"><a href="http://www.htky365.com" target="_blank">http://www.htky365.com</a></td>
                            <td align="center">0</td>
                            <td align="center">否</td>
							<td align="center">是</td>
                            <td align="center" valign="top">  <span>0</span>  </td>
                            <td align="center" nowrap="true">
                                                                                                            
                                                                       
                                                            </td>
                        </tr>
                                                                                                                            <tr>
                            <td className="tl pl10">邮局平邮</td>
                            <td className="tl pl10"><a href="http://yjcx.chinapost.com.cn" target="_blank">http://yjcx.chinapost.com.cn</a></td>
                            <td align="center">0</td>
                            <td align="center">否</td>
							<td align="center">否</td>
                            <td align="center" valign="top">  <span>0</span>  </td>
                            <td align="center" nowrap="true">
                                                                                                     
                                                            </td>
                        </tr>
                                                                                                                                                                    <tr>
                            <td className="tl pl10">顺丰速运</td>
                            <td className="tl pl10">江、浙、沪地区首重15元/KG，续重2元/KG，其余城市首重20元/KG</td>
                            <td align="center">0</td>
                            <td align="center">否</td>
							<td align="center">是</td>
                            <td align="center" valign="top">  <span>1</span>  </td>
                            <td align="center" nowrap="true">
                                                                                                         
                                                                        
                                                            </td>
                        </tr>
                                                                                    <tr>
                            <td className="tl pl10">申通快递</td>
                            <td className="tl pl10">江、浙、沪地区首重为15元/KG，其他地区18元/KG， 续重均为5-6元/KG， 云南地区为8元</td>
                            <td align="center">0</td>
                            <td align="center">否</td>
							<td align="center">是</td>
                            <td align="center" valign="top">  <span>0</span>  </td>
                            <td align="center" nowrap="true">
                                                                                                           
                                                                       
                                                            </td>
                        </tr>
                                                                                    <tr>
                            <td className="tl pl10">天天快递</td>
                            <td className="tl pl10">http://www.ttkdex.com</td>
                            <td align="center">0</td>
                            <td align="center">否</td>
							<td align="center">是</td>
                            <td align="center" valign="top">  <span>0</span>  </td>
                            <td align="center" nowrap="true">
                                                                                                            
                                                                      
                                                            </td>
                        </tr>
                                                                                                                            <tr>
                            <td className="tl pl10">韵达速递</td>
                            <td className="tl pl10"><a href="http://www.yundaex.com" target="_blank">http://www.yundaex.com</a></td>
                            <td align="center">0</td>
                            <td align="center">否</td>
							<td align="center">是</td>
                            <td align="center" valign="top">  <span>0</span>  </td>
                            <td align="center" nowrap="true">
                                                                                                            
                                                                 
                                                            </td>
                        </tr>
                                                                                                                                       		</tbody>
                </table>
        		</div>
            </div>
        )
    }
}
