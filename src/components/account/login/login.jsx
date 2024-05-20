import React, { useState } from "react";
import "../account.css";
import { Link, useNavigate } from "react-router-dom";
import vectorLogo from "../../../assets/vector-logo.svg";
import Background from "../../../assets/background-image.webp";
import { validate } from "../../../services/ValidationService";
import * as Yup from "yup";
import ApiService from "../../../services/ApiService";
import { toast } from "react-toastify";
import personFillIcon from "../../../assets/person-filled-icon.svg";
import passwordIcon from "../../../assets/password-icon.svg";

const LoginPage = () => {

  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const loginFields = [
    { name: "email", validation: Yup.string().required().email() },
    { name: "password", validation: Yup.string().required() },
  ];

   /** 
	* To handle input fields change function
	* @e - we capture the input fields events
	**/
  const handleChange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    const Errors = await validate({ [name]: value }, loginFields);
    setError({ ...error, [name]: Errors[name] });
  };

    /**
  * To handle login submit function
  * @e - we capture the login form events
  **/
  const handleSubmit = async (e) => {
    e.preventDefault();
    const Errors = await validate(data, loginFields);
    setError(Errors);

    if (!Object.keys(Errors).length) {
      const response = await ApiService.login(data);
      if (response.status === 200) {
        toast.success(response.data.message);

        // Call getProfile API after successful login
        const profileResponse = await ApiService.getProfile();

        if (profileResponse && profileResponse.data && profileResponse.data.profile && profileResponse.data.profile.is_subscribed === 0) {
          navigate("/user/choose-card");
        } else {
          navigate("/user/my-cards");
        }
      } else {
        toast.error(response.data.error);
      }
    }
    //navigate("/user/my-cards");
  };

  return (
    <div>
      <div>
        <div className="col-md-12">
          <img
            src={Background}
            className="bg-pattern"
            alt="Background"
            style={{ height: "100vh", width: "80%", marginLeft: "6%" }}
          />
        </div>
        <div className="col-auto me-5">
          <div
            className="login-card text-center p-5">
            <div className="card-body">
              <img
                src={vectorLogo}
                alt="vectorLogo"
                className="logo"
                style={{ marginTop: "10%" }}
              />
              <p className="mt-5" style={{ fontSize: "19px" }}>
                LOGIN
              </p>
              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                style={{ marginTop: "15%" }}
              >
                <div className="form-group mt-5">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span>
                        <img src={personFillIcon} alt="personFillIcon" />
                      </span>
                    </div>
                    <input
                      type="email"
                      className="form-control text-center"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      value={data.email ? data.email : ""}
                      placeholder="Enter email"
                      style={{ color: "white" }}
                    />
                  </div>
                </div>
                {error && error.email && (
                  <h4 className="text-danger text-capitalize">{error.email}</h4>
                )}
                <div className="form-group mt-5">
                  <div className="input-group">
                    <div className="input-group-prepend mt-4">
                      <span>
                        <img src={passwordIcon} alt="passwordIcon" />
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control mt-4 text-center"
                      id="password"
                      value={data.password ? data.password : ""}
                      name="password"
                      onChange={handleChange}
                      placeholder="Enter Password"
                    />
                  </div>
                </div>
                {error && error.password && (
                  <h4 className="text-danger text-capitalize">{error.password}</h4>
                )}

                <p className="text-right me-5">
                  <Link
                    to="/forget-password"
                    className="me-4"
                    style={{
                      fontSize: "16px",
                      textDecoration: "none",
                      color: "#1DDA63",
                    }}
                  >
                    Forget Password ?
                  </Link>
                </p>
                <button type="submit" className="btn-login">
                  Login
                </button>
              </form>
              <p style={{ fontSize: "16px", color: "#1DDA63" }} className="mt-5">
                New here ?
                <Link
                  to="/register"
                  className="ms-2"
                  style={{ textDecoration: "none", color: "#1DDA63" }}
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
