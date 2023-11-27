import React from 'react'

function SignUp() {
  return (
    <>
  <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5 position-relative">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-xxl-4 col-lg-5">
          <div className="card">
            {/* Logo*/}
            <div className="card-header py-4 text-center text-light bg-primary  d-flex align-items-center">
              <a href="#">
                <span>
                  <img src="assets/images/logo.png" alt="logo" height={26} />
                </span>
              </a>
              <h3>eG Doctor Chamber Management </h3>
            </div>
            <div className="card-body p-5">
              <div className="text-center w-75 m-auto">
                <h4 className="text-dark-50 text-center mt-0 fw-bold">
                  Free Sign Up
                </h4>
                <p className="text-muted mb-4">
                  Don't have an account? Create your account, it takes less than
                  a minute{" "}
                </p>
              </div>
              <form action="#">
                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label">
                    Full Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="fullname"
                    placeholder="Enter your name"
                    required=""
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailaddress" className="form-label">
                    Email address
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="emailaddress"
                    required=""
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter your password"
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
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="checkbox-signup"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-signup"
                    >
                      I accept{" "}
                      <a href="#" className="text-muted">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <div className="mb-3 text-center">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    {" "}
                    Sign Up{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 text-center">
              <p className="text-muted">
                Already have account?{" "}
                <a href="login-page.html" className="text-muted ms-1">
                  <b>Log In</b>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="footer footer-alt">© eGsystem</footer>
</>

  )
}

export default SignUp