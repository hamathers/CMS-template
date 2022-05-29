import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.scss";
import AppRoutes from "./AppRoutes";
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";
import SettingsPanel from "./shared/SettingsPanel";
import Footer from "./shared/Footer";
import { withTranslation } from "react-i18next";
import Login from "./base-template/user-pages/Login";
import { connect } from "react-redux";

class App extends Component {
  state = {};
  componentDidMount() {
    console.log('havh', this.props.token)
    this.onRouteChanged();
  }
  render() {
    let navbarComponent = !this.state.isFullPageLayout ? <Navbar /> : "";
    let sidebarComponent = !this.state.isFullPageLayout ? <Sidebar /> : "";
    let SettingsPanelComponent = !this.state.isFullPageLayout ? (
      <SettingsPanel />
    ) : (
      ""
    );
    let footerComponent = !this.state.isFullPageLayout ? <Footer /> : "";
    return (
      <>
        {this.props.token ? (
          <div className="container-scroller">
            {navbarComponent}
            <div className="container-fluid page-body-wrapper">
              {sidebarComponent}
              <div className="main-panel">
                <div className="content-wrapper">
                  <AppRoutes />
                  {SettingsPanelComponent}
                </div>
                {footerComponent}
              </div>
            </div>
          </div>
        ) : (
          <Login />
        )}
      </>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    const { i18n } = this.props;
    const body = document.querySelector("body");
    console.log(1);
    if (this.props.location.pathname === "/layout/RtlLayout") {
      body.classList.add("rtl");
    } else {
      body.classList.remove("rtl");
    }
    i18n.changeLanguage("en");
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = [
      "/user-pages/login-1",
      "/user-pages/register-1",
      "/user-pages/lockscreen",
      "/error-pages/error-404",
      "/error-pages/error-500",
      "/general-pages/landing-page",
    ];
    // for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
    //   if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
    //     this.setState({
    //       isFullPageLayout: true,
    //     });
    //     document
    //       .querySelector(".page-body-wrapper")
    //       .classList.add("full-page-wrapper");
    //     break;
    //   } else {
    //     this.setState({
    //       isFullPageLayout: false,
    //     });
    //     document
    //       .querySelector(".page-body-wrapper")
    //       .classList.remove("full-page-wrapper");
    //   }
    // }
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.authReducer.detail.token,
  };
};

export default connect(
  mapStateToProps,
  null
)(withTranslation()(withRouter(App)));
