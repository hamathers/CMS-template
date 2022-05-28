import React from "react";
// import axios from "../../../../axios";
import Cookies from "js-cookie";
// import { compose } from 'redux';
import { connect } from "react-redux";
import { saveCustomerInfo } from '../../../../store/actions/AuthAction'

const wkrd = Cookies.get("__wkrd");
class Authenticator extends React.Component {
  componentDidMount = async () => {
    if (!wkrd) {
      // window.location.replace(process.env.REACT_APP_LOGIN_URL)
      console.log(1111);
    } else {
      try {
        console.log(wkrd);
        // let dataUser = await axios.post({});
        let dataUser = 1;
        if (dataUser && dataUser === 1) {
        }
      } catch (error) {
        if (error.response) {
          if (error.response.dataUser) {
            this.setState = {
              errorMess: error.response.dataUser,
            };
          }
        }
        console.log(error);
      }
    }
  };
  render() {
    return (
      <>
        {/* {!wkrd ? window.location.replace(process.env.REACT_APP_LOGIN_URL) : <>LOGIN</>} */}
        {/* {wkrd ? window.location.replace(process.env.REACT_APP_LOGIN_URL) : <>LOGIN</>} */}
        <button onClick={() => this.props.saveCustomerInfo()}>Save</button>
        <button onClick={() => console.log(this.props.state)}>Log</button>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveCustomerInfo: () =>
      dispatch(saveCustomerInfo({ token: "1", fullName: "2" })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authenticator);
// export default Authenticator;
