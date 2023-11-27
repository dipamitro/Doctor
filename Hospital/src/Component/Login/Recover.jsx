import React from 'react'

function Recover() {
  return (
    <>
  <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5 position-relative">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-xxl-4 col-lg-5">
          <div className="card">
            {/* Logo */}
            <div className="card-header py-4 text-center text-light bg-primary d-flex">
              <a href="#">
                <span>
                  <img src="assets/images/logo.png" alt="logo" height={22} />
                </span>
              </a>
              <h3>eG Doctor Chamber Management </h3>
            </div>
            <div className="card-body p-5">
              <div className="text-center w-75 m-auto">
                <h4 className="text-dark-50 text-center mt-0 fw-bold">
                  Reset Password
                </h4>
                <p className="text-muted mb-4">
                  Enter your email address and we'll send you an email with
                  instructions to reset your password.
                </p>
              </div>
              <form action="#">
                <div className="mb-3">
                  <label htmlFor="emailaddress" className="form-label">
                    Email address
                  </label>
                  <input
                    className="form-control input-lg"
                    type="email"
                    id="emailaddress"
                    rows={3}
                    required=""
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3 text-center">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 text-center">
              <p className="text-muted">
                Back to{" "}
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
  <footer className="foote footer-alt">© eGsystem</footer>
</>

  )
}

export default Recover