import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminDeshBoard from '../AdminDeshBoard/AdminDeshBoard'


const Login = () => {
  const [userToken, setUserToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const loginUrl =
      "https://api.doctor-chamber-management.egsystembd.com/api/admin-panel/login";
    const userData = {
      email: email,
      password: password,
    };

    fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then(console.log)
      .then((data) => {
        if (data.token) {
          setUserToken(data.token);
          console.log("Logged in and token stored.");
        } else {
          console.error("Login failed. Invalid credentials.");
        }
      })
      .catch((error) => {
        console.error("Login Error:", error);
      });
  };

  return (
    <div className="bod2y1">
      {userToken ? (
        <div>
          <div>
            <AdminDeshBoard/>
          </div>
        </div>
      ) : (
        <>
          <div className="account-pages pt-sm-5 pb-4 pb-sm-5">
            <div className="container-fluid">
              <div className="row justify-content-center mt-5">
                <div className="col-xxl-4 col-lg-5">
                  <div className="card">
                    <div className="card-header py-4 text-center text-light bg-primary  d-flex align-items-center">
                      <a href="#">
                        <span>
                          <img
                            src="public/logo.png"
                            alt="logo"
                            height={26}
                          />
                        </span>
                      </a>
                      <h3>eG Doctor Chamber Management </h3>
                    </div>
                    <div className="card-body p-5">
                      <div className="text-center w-75 m-auto">
                        <h4 className="text-dark-50 text-center pb-0 fw-bold">
                          Sign In
                        </h4>
                        <p className="text-muted mb-4">
                          Enter your email address and password to access admin
                          panel.
                        </p>
                      </div>
                      <form action="#">
                        <div className="mb-3">
                          <label htmlFor="emailaddress" className="form-label">
                            Email address
                          </label>
                          <input
                            class="form-control"
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                          />
                        </div>
                        <div className="mb-3">
                          <a
                            href="recover-page.html"
                            className="text-muted float-end"
                          >
                            <small>
                            <Link to={'/recover'} className="nav-link" > Forgot your password? </Link>
                              
                              
                             </small>
                          </a>
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              class="form-control"
                              type="password"
                              name="pass"
                              placeholder="Enter password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <div
                              className="input-group-text eye-icon"
                              onclick="showPassword()"
                              data-password="false"
                            >
                              <i
                                id="hidden_pass"
                                className="fa fa-eye"
                                aria-hidden="true"
                              />
                              <i
                                id="show_pass"
                                className="fa fa-eye-slash"
                                aria-hidden="true"
                                style={{ display: "none" }}
                              >
                                {" "}
                              </i>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 mb-3">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="checkbox-signin"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkbox-signin"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="mb-3 mb-0 text-center">
                          <button onClick={handleLogin}
                            className="btn btn-primary w-100 py-3"
                            type="submit"
                          >
                            {" "}
                            Log In{" "}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12 text-center">
                      <p className="text-muted">
                        Don't have an account?{" "}
                        <a
                          href="register-page.html"
                          className="text-muted ms-1"
                        >
                          <b>
                          <Link to={'/signup'} className="nav-link" > Sign Up</Link>
                          </b>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <footer className="footer footer-alt ">© eGsystem</footer> */}
        </>
      )}
    </div>
  );
};

export default Login;
