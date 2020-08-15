import React, { Component } from 'react';
import './css/secheader.css'
import {Row,Col} from 'antd'
import {Link} from 'react-router-dom'
class Secheader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="chenmingheader" >
              <Row>
    <Col span={2}></Col>
    <Col span={18}>
                <div className="header_center">
                    <div className="headerlogo">
                   <Link to="/">< img className="full" src={require("../../assets/images/logo2.png")} alt=""/> </Link>
                        </div>
                <div className="headerh4">二手商品</div>
                </div>
              </Col>
              <Col span={4}></Col>
          </Row>
            </div>
         );
    }
}
 
export default Secheader;