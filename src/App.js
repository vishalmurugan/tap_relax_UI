import "./App.css";
import LoginPage from "../src/components/account/login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "../src/components/account/register/register";
import RegisterConfirmationPage from "../src/components/account/register/register-confirmation";
import RegisterVerificationPage from "../src/components/account/register/register-otp";
import UpdatePersonalInfo from "../src/components/update-info/update-personal-info/update-personal-info";
import SelectPayment from "../src/components/select-payment";
import PaymentSuccess from "../src/components/payment-sucess";
import DeliveryAddress from "../src/components/delivery-address/delivery-address";
import OrderTotalPage from "../src/components/order-total";
import NameCard from "../src/components/name-card";
import ForgotPasswordPage from "../src/components/account/forget-password/forget-password";
import ResetConfirmationPage from "../src/components/account/forget-password/reset-confirmation";
import OTPVerifiedPage from "../src/components/account/forget-password/otp-verfied";
import ResetVerificationCodePage from "../src/components/account/forget-password/reset-verification";
import DashboardLayout from "../src/components/layout/dashboard-layout";
import PersonalPreviewView from "./components/preview/personal-preview";
import CompanyPreviewView from "./components/preview/company-preview";
import ShareCard from "./components/dashboard/share-card/ShareCard";
import ConnectInfo from "./components/mobile-screens/connect-info";
import ProfileInfo from "./components/mobile-screens/profile-info";
import ShareContact from "./components/dashboard/share-card/shareContact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Templete from "./components/template";
import Home from "./components/layout/home";
import ChooseSharedComponent from "./components/shared/choose-shared-component";
import PersonalInformationSharedComponent from "./components/shared/personal-info-shared-component";
import UpdateCompanyInfo from "./components/update-info/update-company-info/update.company.info";
import ViewContact from "./components/dashboard/my-contact/View-Contact";
import {GlobalStore} from "./Store";

function App() {
  return (
  <GlobalStore>
    <ToastContainer 
		autoClose={2500}
			closeOnClick={true}
			pauseOnFocusLoss={false}
			pauseOnHover={ false}
		/>{/* Toster */}
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* register */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register-verification" element={<RegisterVerificationPage />} />
          <Route path="/register-confirmation" element={<RegisterConfirmationPage />} />

          {/* resetPassword */}
          <Route path="/forget-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-verification" element={<ResetVerificationCodePage />} />
          <Route path="/reset-password" element={<OTPVerifiedPage />} />
          <Route path="/reset-confirmation" element={<ResetConfirmationPage />} />

          <Route path="/user" element={<Templete />}>

          {/* personal step */}
          <Route path="personal-info" element={<UpdatePersonalInfo />} />

          {/* personal preview */}
          <Route path="personal-preview" element={<PersonalPreviewView />} />
          <Route path="name-card" element={<NameCard />} />

          {/* company step */}
          <Route path="company-info" element={<UpdateCompanyInfo />} />
          
          {/* company preview */}
          <Route path="company-preview" element={<CompanyPreviewView />} />

          <Route path="delivery-address" element={<DeliveryAddress />} />
          <Route path="order-total" element={<OrderTotalPage />} />
          <Route path="select-payment" element={<SelectPayment />} />
          <Route path="payment-success" element={<PaymentSuccess />} />

          {/* user dashboard part */}
          <Route path="my-cards" element={<DashboardLayout />} />
          <Route path="orders" element={<DashboardLayout />} />

          <Route path="share-contact" element={<ShareContact />} />
          <Route path="account" element={<DashboardLayout />} />
          <Route path="my-standee" element={<DashboardLayout />} />
          <Route path="profile" element={<DashboardLayout />} />
          <Route path="rewards" element={<DashboardLayout />} />
          <Route path="contact" element={<DashboardLayout />} />
          <Route path="new-contact" element={<DashboardLayout />} />
          <Route path="view-contact/:id" element={<ViewContact />} />
          <Route path="share-card" element={<ShareCard />} />


          {/* mobile screens */}
          <Route path="connect-info" element={<ConnectInfo />} />
          <Route path="choose-card" element={<ChooseSharedComponent />} />
          <Route path="info-steps" element={<PersonalInformationSharedComponent />} />
          </Route>
          <Route path="profile-info/:id" element={<ProfileInfo />} />
      </Routes>
    </BrowserRouter>
    </div>
    </GlobalStore>
  );
}

export default App;
