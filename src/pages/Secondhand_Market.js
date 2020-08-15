import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sec from '../component/Secondhand_market/Secondhand_Market_component'
import Secdetail from '../component/Secondhand_market/secprodmarket-message'
import Secpublishchenming from '../component/Secondhand_market/secpublish'
import Lheader from '../component/commen/Lheader'
import Myheader from '../component/Secondhand_market/secheader'
import Myfooter from '../component/commen/footer'
import Ordertwo from '../component/Person_center/Personal_My_shopping_order_two'
import Orderthree from '../component/Person_center/Personal_My_shopping_order_three'
class Secondhand_Market extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <div className="index">
                <Lheader></Lheader>
                <Myheader></Myheader>
            </div>
            <Router>

            <Route
              path="/Secondhand_Market/Secdetail/:id"
              component={Secdetail}
            ></Route>
           <Route
              path="/Secondhand_Market/Secpublish"
              component={Secpublishchenming}
            ></Route>
            <Route
              path="/orderllist"
              component={Ordertwo}
            ></Route>
            <Route
              path="/Personal_My_shopping_order_three"
              component={Orderthree}
            ></Route>
            <Route
              path="/Secondhand_Market" exact
              component={Sec}
            ></Route>
            </Router>
          <Myfooter></Myfooter>
        </div> );
    }
}
 
export default Secondhand_Market;