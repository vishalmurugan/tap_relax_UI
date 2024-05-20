import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MyOrders from "../dashboard/my-orders/MyOrders";
import MyAccount from "../dashboard/my-account/MyAccountPersonal";
import MyStandee from "../dashboard/my-standee/MyStandee";
import Profile from "../dashboard/profile/Profile";
import Rewards from "../dashboard/rewards/Rewards";
import MyCards from "../dashboard/mycards/my-cards";
import MyContact from "../dashboard/my-contact/MyContact";
import './vertical-navbar/vertical-navBar.css'
import VerticalNavBar from "./vertical-navbar/vertical-navBar";
import NewContact from "../dashboard/my-contact/New-Contact";
import ViewContact from "../dashboard/my-contact/View-Contact";

const DashboardLayout = () => {
  const location = useLocation();

  useEffect(() => { }, [location]);

  // Function to render the component based on the current path
  const renderComponent = () => {
    switch (location.pathname) {
      case "/user/my-cards":
        return <MyCards />;
      case "/user/orders":
        return <MyOrders />;
      case "/user/account":
        return <MyAccount />;
      case "/user/my-standee":
        return <MyStandee />;
      case "/user/profile":
        return <Profile />;
      case "/user/rewards":
        return <Rewards />;
      case "/user/contact":
        return <MyContact />;
      case "/user/new-contact": 
        return <NewContact />;
        case "/user/view-contact": 
        return <ViewContact />;  
      default:
        return null;
    }
  };

  // Function to conditionally render the vertical navbar
  const renderVerticalNavbar = () => {
    return location.pathname !== "/user/share-card" && <VerticalNavBar />;
  };

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <div className="row">
        <div className="col">
        {renderVerticalNavbar()}
        </div>
        <div className="col-8 dashboard-right-side-layout">
          {renderComponent(location.pathname)}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
