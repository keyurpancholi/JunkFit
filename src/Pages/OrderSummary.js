import React, { Fragment } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import OrderSum from "../Components/OrderSum";
const OrderSummary=()=>{
    return(
    <Fragment>
        <Nav></Nav>
        <OrderSum></OrderSum>
        <Footer></Footer>

    </Fragment>
    )

}
export default OrderSummary;
