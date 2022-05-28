import React from "react";
import { listOrderApi, getOrderNew } from "../controllers/productApi";
class productView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result:[],
      data: {
        keyword: "",
        status: "-1",
        fromDate: "25/01/2022",
        toDate: "25/04/2022",
        page: "1",
        pagesize: "20",
      },
      order:{
        'orderid': ''
      }
    };
  }
  componentDidMount = async () => {
    try {
      let data = await listOrderApi(this.state.data);
      if (data && data.errorCode !== 0) {
        this.setState = {
          errorMess: data.message,
        };
      } else {
        //Todo  userLoginSucces
        // userLoginSucces(data.user)
        // this.setState
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState = {
            errorMess: error.response.data,
          };
        }
      }
      console.log(error);
    }
  };
  handleOnclickDemo = (orderId, event) =>{
    this.setState={
      order:orderId
    }
    let dataOrder = getOrderNew(this.state.order)
    console.log(dataOrder)
  }
  render() {
    return (
      <div className="background">
      <button className="btnClass btn" onClick={(event) =>this.handleOnclickDemo('123321', event)}>aaa</button>
      </div>
    );
  }
}

export default productView;
