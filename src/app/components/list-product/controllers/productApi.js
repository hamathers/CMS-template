import axios from "../../../../axios";

const listOrderApi = (data) => {
  let result =  axios.post("/filterHistoryOrder", (data));
  return result;
};

const getOrderNew = (orderId) =>{
    let result =  axios.get("/getHistoryOrderDetail", {
        params:{
            'orderCode':'220425162758'
        }
    });
    return result;
}

export { listOrderApi, getOrderNew };
