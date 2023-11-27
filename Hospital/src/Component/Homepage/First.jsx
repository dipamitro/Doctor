import React from 'react'
import { Link } from "react-router-dom";
function First() {
  return (
    <>
    {/* Start Navbar Area */}
    <header className="position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-1 col-4">
            <a href="#" className="header-logo">
              <img 
                src="https://infyhms.sgp1.cdn.digitaloceanspaces.com/449/InfyHMS-80.png"
                alt="Infy HMS"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-lg-11 col-8 ps-0">
            <nav className="navbar navbar-expand-xl navbar-light justify-content-end py-0">
              <button
                className="navbar-toggler border-0 p-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul className="navbar-nav align-items-center py-2 py-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      href="#our-services"
                    >
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#our-doctors"
                      className="nav-link "
                    >
                      Doctors
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#about-us"
                      className="nav-link "
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#contact-us"
                      className="nav-link "
                    >
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="##">
                      Our Features
                      <svg
                        className="svg-inline--fa fa-angle-down ms-1"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="angle-down"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
                        ></path>
                      </svg>
                      {/* <i class="fa-solid fa-angle-down ms-1"></i> Font Awesome fontawesome.com */}
                    </a>
                    <ul className="nav submenu">
                      <li className="nav-item">
                        <a
                          className="nav-link "
                          href="#appointment"
                        >
                          Appointment
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a
                          className="nav-link "
                          href="#working-hours"
                        >
                          Working Hours
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link "
                          href="#testimonial"
                        >
                          Testimonials
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link "
                          href="#terms-of-service"
                        >
                          Terms of Service
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link "
                          href="#privacy-policy"
                        >
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)">
                      {" "}
                      English
                    </a>
                    <ul className="nav submenu language-menu">
                      <li
                        className="nav-item languageSelection"
                        data-prefix-value="ar"
                      >
                        <a
                          href="javascript:void(0)"
                          className="nav-link d-flex align-items-center"
                        >
                          <img
                            className="me-2 country-flag"
                            src="./Home _ HMS_files/iraq.svg"
                          />
                          Arabic
                        </a>
                      </li>
                      <li
                        className="nav-item languageSelection"
                        data-prefix-value="zh"
                      >
                        <a
                          href="javascript:void(0)"
                          className="nav-link d-flex align-items-center"
                        >
                          <img
                            className="me-2 country-flag"
                            src="./Home _ HMS_files/china.svg"
                          />
                          Chinese
                        </a>
                      </li>
                      <li
                        className="nav-item languageSelection"
                        data-prefix-value="en"
                      >
                        <a
                          href="javascript:void(0)"
                          className="nav-link d-flex align-items-center"
                        >
                          <img
                            className="me-2 country-flag"
                            src="./Home _ HMS_files/united-states.svg"
                          />
                          English
                        </a>
                      </li>
                      <li
                        className="nav-item languageSelection"
                        data-prefix-value="fr"
                      >
                        <a
                          href="javascript:void(0)"
                          className="nav-link d-flex align-items-center"
                        >
                          <img
                            className="me-2 country-flag"
                            src="./Home _ HMS_files/france.svg"
                          />
                          French
                        </a>
                      </li>
                      <li
                        className="nav-item languageSelection"
                        data-prefix-value="de"
                      >
                        <a
                          href="javascript:void(0)"
                          className="nav-link d-flex align-items-center"
                        >
                          <img
                            className="me-2 country-flag"
                            src="./Home _ HMS_files/germany.svg"
                          />
                          German
                        </a>
                      </li>
                      <li
                        className="nav-item languageSelection"
                        data-prefix-value="pt"
                      >
                        <a
                          href="javascript:void(0)"
                          className="nav-link d-flex align-items-center"
                        >
                          <img
                            className="me-2 country-flag"
                            src="./Home _ HMS_files/portugal.svg"
                          />
                          Portuguese
                        </a>
                      </li>
                      <li
                        className="nav-item languageSelection"
                        data-prefix-value="ru"
                      >
                        <a
                          href="javascript:void(0)"
                          className="nav-link d-flex align-items-center"
                        >
                          <img
                            className="me-2 country-flag"
                            src="./Home _ HMS_files/russia.svg"
                          />
                          Russian
                        </a>
                      </li>
                      <li
                        className="nav-item languageSelection"
                        data-prefix-value="es"
                      >
                        <a
                          href="javascript:void(0)"
                          className="nav-link d-flex align-items-center"
                        >
                          <img
                            className="me-2 country-flag"
                            src="./Home _ HMS_files/spain.svg"
                          />
                          Spanish
                        </a>
                      </li>
                      <li
                        className="nav-item languageSelection"
                        data-prefix-value="tr"
                      >
                        <a
                          href="javascript:void(0)"
                          className="nav-link d-flex align-items-center"
                        >
                          <img
                            className="me-2 country-flag"
                            src="./Home _ HMS_files/turkey.svg"
                          />
                          Turkish
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="text-xl-end header-btn-grp ms-xl-3">
                  <a
                    href="#login"
                    data-turbo="false"
                    className="btn btn-success me-2 mb-3 mb-xl-0"
                  >
                    
                    <Link to={'/logIn'} className="nav-link" >Log in Admin</Link>
                  </a>
                  <a
                    href="#appointment"
                    className="btn btn-primary mb-3 mb-xl-0"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    {/* End Navbar Area */}
    <input
      className="userCurrentLanguage"
      name="userCurrentLanguage"
      type="hidden"
      defaultValue="en"
    />
    <input
      className="invalidNumber"
      name="invalidNumber"
      type="hidden"
      defaultValue="Invalid number"
    />
    <input
      className="invalidCountryNumber"
      name="invalidCountryNumber"
      type="hidden"
      defaultValue="Invalid country code"
    />
    <input
      className="tooShort"
      name="tooShort"
      type="hidden"
      defaultValue="Too short"
    />
    <input
      className="tooLong"
      name="tooLong"
      type="hidden"
      defaultValue="Too long"
    />
    <input
      className="invalidNumber"
      name="invalidNumber"
      type="hidden"
      defaultValue="Invalid number"
    />
    <input
      className="invalidNumber"
      name="invalidNumber"
      type="hidden"
      defaultValue="Invalid number"
    />
    <div className="home-page">
      {/* start hero section */}
      <section
        className="hero-section position-relative p-t-120 p-b-200 border-bottom-right-rounded border-bottom-left-rounded bg-gray"
        id="div1"
      >
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6 text-lg-start text-center">
              <div className="hero-content mt-5 mt-lg-0">
                <h6 className="text-primary mb-3">5 Years Experience</h6>
                <h1 className="mb-3 pb-1">
                  Digital Hospital Management at one place
                </h1>
                <p className="mb-lg-4 pb-lg-3 mb-4">
                  Next-Gen Hospital Solutions: Drive Innovation, Deliver Quality
                  Healthcare
                </p>
                <a
                  href="#register"
                  className="btn btn-primary"
                  data-turbo="false"
                >
                  Sign Up
                </a>
                <a style={{marginLeft:"18px"}}
                  href="#register"
                  className="btn btn-primary"
                  data-turbo="false"
                >
                  Sign In 
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end text-center">
              <img
                src="https://infyhms.sgp1.cdn.digitaloceanspaces.com/298/Home.png"
                alt="Infy Care"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      {/* end hero section */}
      {/*start book-appointment section*/}
      <section className="appointment-section">
        <div className="container">
          <div className="book-appintment position-relative br-2 bg-white">
            <form
              action="#appointment-form"
              method="POST"
              turbo:load=""
            >
              <div className="row align-items-center justify-content-around">
                <div className="col-lg-3">
                  <h3 className="mb-lg-0 mb-3 fw-bold">Book an Appointment</h3>
                </div>
                <div className="col-lg-3 col-md-6 text-center mb-lg-0 mb-3">
                  <select
                    className="doctor-name-filter selectized"
                    name="doctorId"
                    id="appointmentDoctorId"
                    aria-label="select doctor"
                    tabIndex={-1}
                    style={{ display: "none" }}
                  >
                    <option value="" selected="selected" />
                  </select>
                  <div className="selectize-control doctor-name-filter single">
                    <div className="selectize-input items not-full has-options">
                      <input
                        type="text"
                        autoComplete="off"
                        tabIndex=""
                        placeholder="Select Doctor"
                        style={{
                          width: "100.047px",
                          opacity: 1,
                          position: "relative",
                          left: 0
                        }}
                      />
                    </div>
                    <div
                      className="selectize-dropdown single doctor-name-filter"
                      style={{
                        display: "none",
                        visibility: "visible",
                        width: 296,
                        top: 50,
                        left: 0
                      }}
                    >
                      <div className="selectize-dropdown-content">
                        <div data-value={1} data-selectable="" className="option">
                          Steven Lyon
                        </div>
                        <div data-value={2} data-selectable="" className="option">
                          John Avery
                        </div>
                        <div data-value={3} data-selectable="" className="option">
                          Mealeni Dyer
                        </div>
                        <div data-value={4} data-selectable="" className="option">
                          Tulasi Dahal
                        </div>
                        <div data-value={5} data-selectable="" className="option">
                          Dhakhtar Dabiib
                        </div>
                        <div data-value={6} data-selectable="" className="option">
                          Mitchell Vettori
                        </div>
                        <div data-value={7} data-selectable="" className="option">
                          Mark Cruise
                        </div>
                        <div data-value={9} data-selectable="" className="option">
                          Sahid Saikh
                        </div>
                        <div
                          data-value={10}
                          data-selectable=""
                          className="option"
                        >
                          Cheng Chui
                        </div>
                        <div
                          data-value={11}
                          data-selectable=""
                          className="option"
                        >
                          Lois Carr
                        </div>
                        <div
                          data-value={12}
                          data-selectable=""
                          className="option"
                        >
                          Mohaikahiyg jhjhbk Jgftuvjghk
                        </div>
                        <div
                          data-value={13}
                          data-selectable=""
                          className="option"
                        >
                          Murad Shirinov
                        </div>
                        <div
                          data-value={14}
                          data-selectable=""
                          className="option"
                        >
                          Dr Mohsin Mumtaz Dr mohsin
                        </div>
                        <div
                          data-value={15}
                          data-selectable=""
                          className="option"
                        >
                          Anas Anas
                        </div>
                        <div
                          data-value={17}
                          data-selectable=""
                          className="option"
                        >
                          Developer Kavadakar
                        </div>
                        <div
                          data-value={18}
                          data-selectable=""
                          className="option"
                        >
                          Heidi Lawson
                        </div>
                        <div
                          data-value={21}
                          data-selectable=""
                          className="option"
                        >
                          DLuis Gonzalesgbnhn
                        </div>
                        <div
                          data-value={22}
                          data-selectable=""
                          className="option"
                        >
                          محمد احمد
                        </div>
                        <div
                          data-value={24}
                          data-selectable=""
                          className="option"
                        >
                          Nigeli Hunter
                        </div>
                        <div
                          data-value={25}
                          data-selectable=""
                          className="option"
                        >
                          Fatimah Sanusi
                        </div>
                        <div
                          data-value={26}
                          data-selectable=""
                          className="option"
                        >
                          Farida Hassan
                        </div>
                        <div
                          data-value={27}
                          data-selectable=""
                          className="option"
                        >
                          Peter Abubakar
                        </div>
                        <div
                          data-value={28}
                          data-selectable=""
                          className="option"
                        >
                          Sample Name Psicologist
                        </div>
                        <div
                          data-value={29}
                          data-selectable=""
                          className="option"
                        >
                          Kadi Koudougou
                        </div>
                        <div
                          data-value={30}
                          data-selectable=""
                          className="option"
                        >
                          Doctor Raogo
                        </div>
                        <div
                          data-value={31}
                          data-selectable=""
                          className="option"
                        >
                          Aaaaaa Aaaaaa
                        </div>
                        <div
                          data-value={32}
                          data-selectable=""
                          className="option"
                        >
                          Rohit Doctor
                        </div>
                        <div
                          data-value={33}
                          data-selectable=""
                          className="option"
                        >
                          Douidi Samir
                        </div>
                        <div
                          data-value={34}
                          data-selectable=""
                          className="option"
                        >
                          Salhi Kamel
                        </div>
                        <div
                          data-value={35}
                          data-selectable=""
                          className="option"
                        >
                          Faci Hanane
                        </div>
                        <div
                          data-value={36}
                          data-selectable=""
                          className="option"
                        >
                          Kadri New
                        </div>
                        <div
                          data-value={38}
                          data-selectable=""
                          className="option"
                        >
                          Dr. Bhahwan Singh
                        </div>
                        <div
                          data-value={41}
                          data-selectable=""
                          className="option"
                        >
                          J Asd
                        </div>
                        <div
                          data-value={42}
                          data-selectable=""
                          className="option"
                        >
                          Kalpit Gbani Jacobs
                        </div>
                        <div
                          data-value={46}
                          data-selectable=""
                          className="option"
                        >
                          Adnan Tahir
                        </div>
                        <div
                          data-value={47}
                          data-selectable=""
                          className="option"
                        >
                          Dr Aklima Khan
                        </div>
                        <div
                          data-value={51}
                          data-selectable=""
                          className="option"
                        >
                          Chizzy Obi
                        </div>
                        <div
                          data-value={52}
                          data-selectable=""
                          className="option"
                        >
                          Zzzz Ccc
                        </div>
                        <div
                          data-value={53}
                          data-selectable=""
                          className="option"
                        >
                          Filan Fisteku
                        </div>
                        <div
                          data-value={54}
                          data-selectable=""
                          className="option"
                        >
                          Kylan Dalton
                        </div>
                        <div
                          data-value={56}
                          data-selectable=""
                          className="option"
                        >
                          Casey Tucker
                        </div>
                        <div
                          data-value={60}
                          data-selectable=""
                          className="option"
                        >
                          Anastasia Baird
                        </div>
                        <div
                          data-value={61}
                          data-selectable=""
                          className="option"
                        >
                          Sever Leverly
                        </div>
                        <div
                          data-value={62}
                          data-selectable=""
                          className="option"
                        >
                          Doctor Cock
                        </div>
                        <div
                          data-value={64}
                          data-selectable=""
                          className="option"
                        >
                          Boby C
                        </div>
                        <div
                          data-value={74}
                          data-selectable=""
                          className="option"
                        >
                          Rats Dokter
                        </div>
                        <div
                          data-value={76}
                          data-selectable=""
                          className="option"
                        >
                          Joseph Cum
                        </div>
                        <div
                          data-value={80}
                          data-selectable=""
                          className="option"
                        >
                          Emeka Obiano
                        </div>
                        <div
                          data-value={82}
                          data-selectable=""
                          className="option"
                        >
                          Usman Lanzai
                        </div>
                        <div
                          data-value={85}
                          data-selectable=""
                          className="option"
                        >
                          Razzaq Ahmad
                        </div>
                        <div
                          data-value={86}
                          data-selectable=""
                          className="option"
                        >
                          Dr Sandhu
                        </div>
                        <div
                          data-value={87}
                          data-selectable=""
                          className="option"
                        >
                          Ahmad Mehmood
                        </div>
                        <div
                          data-value={88}
                          data-selectable=""
                          className="option"
                        >
                          Ateeeb Ateeeb
                        </div>
                        <div
                          data-value={90}
                          data-selectable=""
                          className="option"
                        >
                          Kirsten Howard
                        </div>
                        <div
                          data-value={92}
                          data-selectable=""
                          className="option"
                        >
                          Dr Zakir Naik
                        </div>
                        <div
                          data-value={94}
                          data-selectable=""
                          className="option"
                        >
                          TestDoctor Test1
                        </div>
                        <div
                          data-value={95}
                          data-selectable=""
                          className="option"
                        >
                          Ahmed Mohamed
                        </div>
                        <div
                          data-value={96}
                          data-selectable=""
                          className="option"
                        >
                          Ima Nguyen
                        </div>
                        <div
                          data-value={97}
                          data-selectable=""
                          className="option"
                        >
                          Hyh Hyhy
                        </div>
                        <div
                          data-value={101}
                          data-selectable=""
                          className="option"
                        >
                          Talal Khan
                        </div>
                        <div
                          data-value={102}
                          data-selectable=""
                          className="option"
                        >
                          Khan Khan
                        </div>
                        <div
                          data-value={109}
                          data-selectable=""
                          className="option"
                        >
                          Ali Sahil
                        </div>
                        <div
                          data-value={110}
                          data-selectable=""
                          className="option"
                        >
                          Assem Nour
                        </div>
                        <div
                          data-value={111}
                          data-selectable=""
                          className="option"
                        >
                          Sserujogi Fahadi
                        </div>
                        <div
                          data-value={112}
                          data-selectable=""
                          className="option"
                        >
                          A Aa
                        </div>
                        <div
                          data-value={118}
                          data-selectable=""
                          className="option"
                        >
                          Bdoc Doc
                        </div>
                        <div
                          data-value={122}
                          data-selectable=""
                          className="option"
                        >
                          Doctor Ebs
                        </div>
                        <div
                          data-value={123}
                          data-selectable=""
                          className="option"
                        >
                          Hussain DD
                        </div>
                        <div
                          data-value={127}
                          data-selectable=""
                          className="option"
                        >
                          Dr. Satyavati AL
                        </div>
                        <div
                          data-value={128}
                          data-selectable=""
                          className="option"
                        >
                          Police Abbaa Jokoto
                        </div>
                        <div
                          data-value={129}
                          data-selectable=""
                          className="option"
                        >
                          Anubhav Goswami
                        </div>
                        <div
                          data-value={130}
                          data-selectable=""
                          className="option"
                        >
                          Doctor1 Doctor1
                        </div>
                        <div
                          data-value={132}
                          data-selectable=""
                          className="option"
                        >
                          VINEETAG Agarwal
                        </div>
                        <div
                          data-value={133}
                          data-selectable=""
                          className="option"
                        >
                          HT DGRFERG
                        </div>
                        <div
                          data-value={134}
                          data-selectable=""
                          className="option"
                        >
                          Teststs Frwf
                        </div>
                        <div
                          data-value={135}
                          data-selectable=""
                          className="option"
                        >
                          Sdv Jboi
                        </div>
                        <div
                          data-value={136}
                          data-selectable=""
                          className="option"
                        >
                          Shdhf Shddh
                        </div>
                        <div
                          data-value={137}
                          data-selectable=""
                          className="option"
                        >
                          Developer H
                        </div>
                        <div
                          data-value={138}
                          data-selectable=""
                          className="option"
                        >
                          DR. Jeet Kk
                        </div>
                        <div
                          data-value={139}
                          data-selectable=""
                          className="option"
                        >
                          Dr. zen One
                        </div>
                        <div
                          data-value={141}
                          data-selectable=""
                          className="option"
                        >
                          Tej Inder
                        </div>
                        <div
                          data-value={144}
                          data-selectable=""
                          className="option"
                        >
                          Annie Bsseor
                        </div>
                        <div
                          data-value={145}
                          data-selectable=""
                          className="option"
                        >
                          Dr. Jagdish Yerodkar
                        </div>
                        <div
                          data-value={146}
                          data-selectable=""
                          className="option"
                        >
                          DR JAPTEJ SINGH
                        </div>
                        <div
                          data-value={147}
                          data-selectable=""
                          className="option"
                        >
                          Dr. Lalan Khatiwoda
                        </div>
                        <div
                          data-value={148}
                          data-selectable=""
                          className="option"
                        >
                          Lewis Kim
                        </div>
                        <div
                          data-value={149}
                          data-selectable=""
                          className="option"
                        >
                          Test Test
                        </div>
                        <div
                          data-value={150}
                          data-selectable=""
                          className="option"
                        >
                          NILANJAN MAITI
                        </div>
                        <div
                          data-value={151}
                          data-selectable=""
                          className="option"
                        >
                          Doctor One
                        </div>
                        <div
                          data-value={152}
                          data-selectable=""
                          className="option"
                        >
                          Lklklk Lklklk
                        </div>
                        <div
                          data-value={153}
                          data-selectable=""
                          className="option"
                        >
                          Dr Zia Farooi
                        </div>
                        <div
                          data-value={154}
                          data-selectable=""
                          className="option"
                        >
                          Bhautik Bhalala Doctor
                        </div>
                        <div
                          data-value={155}
                          data-selectable=""
                          className="option"
                        >
                          Nash Raymond
                        </div>
                        <div
                          data-value={156}
                          data-selectable=""
                          className="option"
                        >
                          Jocelyn Graham
                        </div>
                        <div
                          data-value={157}
                          data-selectable=""
                          className="option"
                        >
                          Mikayla Fowler
                        </div>
                        <div
                          data-value={158}
                          data-selectable=""
                          className="option"
                        >
                          Muhammad Arif
                        </div>
                        <div
                          data-value={159}
                          data-selectable=""
                          className="option"
                        >
                          NUR SYAHIRAH ZAHARI
                        </div>
                        <div
                          data-value={160}
                          data-selectable=""
                          className="option"
                        >
                          Khalid Al habsi
                        </div>
                        <div
                          data-value={161}
                          data-selectable=""
                          className="option"
                        >
                          Yanick Armand WATCHO
                        </div>
                        <div
                          data-value={162}
                          data-selectable=""
                          className="option"
                        >
                          Galena Leblanc
                        </div>
                        <div
                          data-value={163}
                          data-selectable=""
                          className="option"
                        >
                          Wasi Khan
                        </div>
                        <div
                          data-value={164}
                          data-selectable=""
                          className="option"
                        >
                          ROAYAH EST
                        </div>
                        <div
                          data-value={165}
                          data-selectable=""
                          className="option"
                        >
                          Aremu Lanre
                        </div>
                        <div
                          data-value={166}
                          data-selectable=""
                          className="option"
                        >
                          Kashish K
                        </div>
                        <div
                          data-value={167}
                          data-selectable=""
                          className="option"
                        >
                          Saurabh Pandey
                        </div>
                        <div
                          data-value={168}
                          data-selectable=""
                          className="option"
                        >
                          Hassan Pudineh
                        </div>
                        <div
                          data-value={169}
                          data-selectable=""
                          className="option"
                        >
                          Dddd Ddd
                        </div>
                        <div
                          data-value={170}
                          data-selectable=""
                          className="option"
                        >
                          Crazy Bow
                        </div>
                        <div
                          data-value={171}
                          data-selectable=""
                          className="option"
                        >
                          Dcotor Who
                        </div>
                        <div
                          data-value={172}
                          data-selectable=""
                          className="option"
                        >
                          Ahmed Lasif
                        </div>
                        <div
                          data-value={173}
                          data-selectable=""
                          className="option"
                        >
                          Branly De León
                        </div>
                        <div
                          data-value={174}
                          data-selectable=""
                          className="option"
                        >
                          Arvind Goswami
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center mb-lg-0 mb-3">
                  <input
                    type="text"
                    name="appointmentDate"
                    autoComplete="off"
                    className="form-control datepicker hasDatepicker"
                    id="datepicker"
                    placeholder="Select Date"
                  />
                </div>
                <div className="col-lg-3 text-end">
                  <button
                    type="submit"
                    className="btn btn-primary d-block w-100"
                    id="bookAppointment"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/*end book-appointment section*/}
      {/* start easy-solution section */}
      <section className="easy-solution-section position-relative">
        <div className="container">
          <div className="col-lg-6 text-center mx-auto">
            <h6 className="text-primary pb-2">Easy Solutions</h6>
            <h2 className="mb-4 pb-4">
              4 Easy Step and Get the World Best Treatment
            </h2>
          </div>
          <div className="easy-solution-cards">
            <div className="row justify-content-between">
              <div className="col-xxl-3 col-md-6 text-center solution-card mb-xxl-0 mb-4">
                <div className="card">
                  <div className="icon-box mx-auto br-5 mb-4 d-flex align-items-center justify-content-center">
                    <svg
                      className="svg-inline--fa fa-user fs-5"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="user"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                      ></path>
                    </svg>
                    {/* <i class="fa-solid fa-user fs-5"></i> Font Awesome fontawesome.com */}
                  </div>
                  <div className="card-body p-0 text-center">
                    <h4>Qualified Doctors</h4>
                    <p className="mb-0">
                      Check expert Doctor profile as per your need and get
                      consultation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 text-center solution-card mb-xxl-0 mb-4">
                <div className="card">
                  <div className="icon-box mx-auto br-5 mb-4 d-flex align-items-center justify-content-center">
                    <svg
                      className="svg-inline--fa fa-headphones-simple fs-5"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="headphones-simple"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M256 32C112.9 32 4.563 151.1 0 288v104C0 405.3 10.75 416 23.1 416S48 405.3 48 392V288c0-114.7 93.34-207.8 208-207.8C370.7 80.2 464 173.3 464 288v104C464 405.3 474.7 416 488 416S512 405.3 512 392V287.1C507.4 151.1 399.1 32 256 32zM160 288L144 288c-35.34 0-64 28.7-64 64.13v63.75C80 451.3 108.7 480 144 480L160 480c17.66 0 32-14.34 32-32.05v-127.9C192 302.3 177.7 288 160 288zM368 288L352 288c-17.66 0-32 14.32-32 32.04v127.9c0 17.7 14.34 32.05 32 32.05L368 480c35.34 0 64-28.7 64-64.13v-63.75C432 316.7 403.3 288 368 288z"
                      ></path>
                    </svg>
                    {/* <i class="fa-solid fa-headphones-simple fs-5"></i> Font Awesome fontawesome.com */}
                  </div>
                  <div className="card-body p-0 text-center">
                    <h4>Digital Consultation R...</h4>
                    <p className="mb-0">
                      Our utmost priority is to ensure safety and well being of
                      our patients. To avoid adverse health conditions later,...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 text-center solution-card mb-xxl-0 mb-4">
                <div className="card">
                  <div className="icon-box mx-auto br-5 mb-4 d-flex align-items-center justify-content-center">
                    <svg
                      className="svg-inline--fa fa-calendar-check fs-5"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="calendar-check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM328.1 304.1C338.3 295.6 338.3 280.4 328.1 271C319.6 261.7 304.4 261.7 295 271L200 366.1L152.1 319C143.6 309.7 128.4 309.7 119 319C109.7 328.4 109.7 343.6 119 352.1L183 416.1C192.4 426.3 207.6 426.3 216.1 416.1L328.1 304.1z"
                      ></path>
                    </svg>
                    {/* <i class="fa-solid fa-calendar-check fs-5"></i> Font Awesome fontawesome.com */}
                  </div>
                  <div className="card-body p-0 text-center">
                    <h4>Get Your Consultant</h4>
                    <p className="mb-0">
                      Our internal medicine consultants provide personalized care
                      and treat patients with a wide range of acute and chro...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 text-center solution-card mb-xxl-0 mb-lg-4">
                <div className="card">
                  <div className="icon-box mx-auto br-5 mb-4 d-flex align-items-center justify-content-center">
                    <svg
                      className="svg-inline--fa fa-check-double fs-5"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check-double"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M182.6 246.6C170.1 259.1 149.9 259.1 137.4 246.6L57.37 166.6C44.88 154.1 44.88 133.9 57.37 121.4C69.87 108.9 90.13 108.9 102.6 121.4L159.1 178.7L297.4 41.37C309.9 28.88 330.1 28.88 342.6 41.37C355.1 53.87 355.1 74.13 342.6 86.63L182.6 246.6zM182.6 470.6C170.1 483.1 149.9 483.1 137.4 470.6L9.372 342.6C-3.124 330.1-3.124 309.9 9.372 297.4C21.87 284.9 42.13 284.9 54.63 297.4L159.1 402.7L393.4 169.4C405.9 156.9 426.1 156.9 438.6 169.4C451.1 181.9 451.1 202.1 438.6 214.6L182.6 470.6z"
                      ></path>
                    </svg>
                    {/* <i class="fa-solid fa-check-double fs-5"></i> Font Awesome fontawesome.com */}
                  </div>
                  <div className="card-body p-0 text-center">
                    <h4>Get Your Treatment</h4>
                    <p className="mb-0">
                      We offers expert care from the best doctors. The doctors may
                      direct you to a specialist if needed, in order to hel...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end easy-solution section */}
      {/*start about-section */}
      <section className="about-section p-t-200 p-b-120">
        <div className="container">
          <div className="row align-items-stretch flex-column-reverse flex-lg-row">
            <div className="col-lg-6 col-md-12">
              <div className="row h-100">
                <div className="col-lg-7 col-md-7 about-count-block">
                  <div className="about-count h-100 br-2 text-center d-flex align-items-center justify-content-center py-lg-3 py-5 px-3">
                    <div>
                      <h3 className="text-green">132</h3>
                      <h4 className="fw-normal mb-0">Patients Beds</h4>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-5 col-md-5 about-count-block">
                  <div className="about-count h-100 br-2 text-center d-flex align-items-center justify-content-center py-lg-3 py-5 px-3">
                    <div>
                      <h3 className="text-pink">131</h3>
                      <h4 className="fw-normal mb-0">Doctors &amp; Nurses</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 about-count-block">
                  <div className="about-count h-100 br-2 text-center d-flex align-items-center justify-content-center py-lg-3 py-5 px-3">
                    <div>
                      <h3 className="text-primary">1157</h3>
                      <h4 className="fw-normal mb-0">Happy Patients</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 about-count-block">
                  <div className="about-count h-100 br-2 text-center d-flex align-items-center justify-content-center py-lg-3 py-5 px-3">
                    <div>
                      <h3 className="text-blue">5</h3>
                      <h4 className="fw-normal mb-0">Years Experience</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-right pb-5 pt-lg-5 text-lg-start text-center">
                <h2 className="mt-md-3">About Us</h2>
                <p className="mt-4">
                  At Home of Compassion Hospital, we are dedicated to providing
                  exceptional and comprehensive care to our patients. Our team of
                  experienced healthcare professionals is committed to using the
                  latest technologies and techniques to ensure that every patient
                  receives the highest quality of care. We pride ourselves on our
                  commitment to excellence and strive to make a positive
                  difference in the lives of those we serve. Join us in our
                  mission to advance healthcare and improve lives.
                </p>
                <a
                  href="#appointment"
                  className="btn btn-primary mt-4"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about-section */}
      {/* start service-section */}
      <section className="service-section p-t-120 p-b-100 bg-gray">
        <div className="container">
          <div className="col-lg-6 text-center mx-auto">
            <h6 className="text-primary mb-3">Our Services</h6>
            <h2 className="mb-4 pb-xl-4">
              We Offer Different Services To Improve Your Health
            </h2>
          </div>
          <div className="our-service">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6 py-lg-2 card-hover d-flex align-items-stretch">
                <div className="card p-c-4 my-lg-2 mx-lg-1 my-md-3 my-2 flex-fill">
                  <img
                    src="./Home _ HMS_files/Cardiology.png"
                    className="card-img-top img-wh mx-auto "
                    alt="Cardiology"
                  />
                  <div className="card-body p-0 text-center flex-column">
                    <h4 className="card-title mt-4">Cardiology</h4>
                    <p className="card-text">
                      Cardiology is medicine speciality that involves diagnosis
                      and treatment of disorders of the heart and certain parts of
                      the...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 py-lg-2 card-hover d-flex align-items-stretch">
                <div className="card p-c-4 my-lg-2 mx-lg-1 my-md-3 my-2 flex-fill">
                  <img
                    src="./Home _ HMS_files/Orthopedics.png"
                    className="card-img-top img-wh mx-auto "
                    alt="Cardiology"
                  />
                  <div className="card-body p-0 text-center flex-column">
                    <h4 className="card-title mt-4">Orthopedics</h4>
                    <p className="card-text">
                      Orthopedics is a branch of medicine that focuses on the care
                      of the musculoskeletal system. This system is made up of
                      muscl...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 py-lg-2 card-hover d-flex align-items-stretch">
                <div className="card p-c-4 my-lg-2 mx-lg-1 my-md-3 my-2 flex-fill">
                  <img
                    src="./Home _ HMS_files/Medicine.png"
                    className="card-img-top img-wh mx-auto "
                    alt="Cardiology"
                  />
                  <div className="card-body p-0 text-center flex-column">
                    <h4 className="card-title mt-4">Medicine</h4>
                    <p className="card-text">
                      Medicine is the science[1] and practice[2] of caring for a
                      patient, managing the diagnosis, prognosis, prevention,
                      treatmen...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 py-lg-2 card-hover d-flex align-items-stretch">
                <div className="card p-c-4 my-lg-2 mx-lg-1 my-md-3 my-2 flex-fill">
                  <img
                    src="./Home _ HMS_files/1.png"
                    className="card-img-top img-wh mx-auto "
                    alt="Cardiology"
                  />
                  <div className="card-body p-0 text-center flex-column">
                    <h4 className="card-title mt-4">Ambulance</h4>
                    <p className="card-text">
                      An ambulance is a medically equipped vehicle which
                      transports patients to treatment facilities, such as
                      hospitals. Typicall...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 py-lg-2 card-hover d-flex align-items-stretch">
                <div className="card p-c-4 my-lg-2 mx-lg-1 my-md-3 my-2 flex-fill">
                  <img
                    src="./Home _ HMS_files/Ophthalmology.png"
                    className="card-img-top img-wh mx-auto "
                    alt="Cardiology"
                  />
                  <div className="card-body p-0 text-center flex-column">
                    <h4 className="card-title mt-4">Ophthalmology</h4>
                    <p className="card-text">
                      Ophthalmology is the study of medical conditions relating to
                      the eye. Ophthalmologists are doctors who specialize in the
                      me...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 py-lg-2 card-hover d-flex align-items-stretch">
                <div className="card p-c-4 my-lg-2 mx-lg-1 my-md-3 my-2 flex-fill">
                  <img
                    src="./Home _ HMS_files/Neurology.png"
                    className="card-img-top img-wh mx-auto "
                    alt="Cardiology"
                  />
                  <div className="card-body p-0 text-center flex-column">
                    <h4 className="card-title mt-4">Neurology</h4>
                    <p className="card-text">
                      Neurology deals with the diagnosis and treatment of all
                      categories of conditions and disease involving the central
                      and peri...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 py-lg-2 card-hover d-flex align-items-stretch">
                <div className="card p-c-4 my-lg-2 mx-lg-1 my-md-3 my-2 flex-fill">
                  <img
                    src="./Home _ HMS_files/about.png"
                    className="card-img-top img-wh mx-auto "
                    alt="Cardiology"
                  />
                  <div className="card-body p-0 text-center flex-column">
                    <h4 className="card-title mt-4">General OPD</h4>
                    <p className="card-text">General OPD - for outpatient only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end service-section */}
      {/* start quality-section */}
      <section className="quality-section p-t-120 p-b-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="quality-desc mt-lg-4 text-lg-start text-center">
                <h6 className="text-primary pb-2">Quality Healthcare</h6>
                <h2 className="mb-3">
                  Have Certified and High Quality Doctor For You
                </h2>
                <p>
                  Our medical clinic provides quality care for the entire family
                  while maintaining a personable atmosphere best services. Our
                  medical clinic provides quality. Our medical clinic provides
                  quality care for the entire family while maintaining lizam a
                  personable atmosphere best services. Our medical clinic
                  provides.
                </p>
                <a
                  href="#appointment"
                  className="btn btn-primary mt-lg-4 mb-lg-0 mb-4"
                >
                  Book Appointment
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 position-relative">
              <div className="certified-doctor  text-end">
                <img
                  src="./Home _ HMS_files/Doctors.png"
                  alt="Certifired Doctor"
                  className="img-fluid"
                />
              </div>
              <div className="doctor-desc position-absolute br-2 d-flex align-items-center">
                <div className="icon-box br-5 me-md-4 me-2 text-primary bg-white d-flex align-items-center justify-content-center">
                  <svg
                    className="svg-inline--fa fa-certificate fs-5"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="certificate"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M256 53.46L300.1 7.261C307 1.034 315.1-1.431 324.4 .8185C332.8 3.068 339.3 9.679 341.4 18.1L357.3 80.6L419.3 63.07C427.7 60.71 436.7 63.05 442.8 69.19C448.1 75.34 451.3 84.33 448.9 92.69L431.4 154.7L493.9 170.6C502.3 172.7 508.9 179.2 511.2 187.6C513.4 196 510.1 204.1 504.7 211L458.5 256L504.7 300.1C510.1 307 513.4 315.1 511.2 324.4C508.9 332.8 502.3 339.3 493.9 341.4L431.4 357.3L448.9 419.3C451.3 427.7 448.1 436.7 442.8 442.8C436.7 448.1 427.7 451.3 419.3 448.9L357.3 431.4L341.4 493.9C339.3 502.3 332.8 508.9 324.4 511.2C315.1 513.4 307 510.1 300.1 504.7L256 458.5L211 504.7C204.1 510.1 196 513.4 187.6 511.2C179.2 508.9 172.7 502.3 170.6 493.9L154.7 431.4L92.69 448.9C84.33 451.3 75.34 448.1 69.19 442.8C63.05 436.7 60.71 427.7 63.07 419.3L80.6 357.3L18.1 341.4C9.679 339.3 3.068 332.8 .8186 324.4C-1.431 315.1 1.034 307 7.261 300.1L53.46 256L7.261 211C1.034 204.1-1.431 196 .8186 187.6C3.068 179.2 9.679 172.7 18.1 170.6L80.6 154.7L63.07 92.69C60.71 84.33 63.05 75.34 69.19 69.19C75.34 63.05 84.33 60.71 92.69 63.07L154.7 80.6L170.6 18.1C172.7 9.679 179.2 3.068 187.6 .8185C196-1.431 204.1 1.034 211 7.261L256 53.46z"
                    ></path>
                  </svg>
                  {/* <i class="fa-solid fa-certificate fs-5"></i> Font Awesome fontawesome.com */}
                </div>
                <div className="desc">
                  <h4 className="text-white">Certified Doctor</h4>
                  <p className="text-white fs-14 mb-0">
                    All expertise doctors as per Hospital and M...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end quality-section */}
      {/* start professional-doctors section */}
      <section className="professional-doctors-section shape-rectangle position-relative">
        <div className="container">
          <div className="col-lg-6 text-center mx-auto">
            <h6 className="text-primary mb-3">Professional Doctors</h6>
            <h2 className="mb-5 pb-xl-3">
              We are Experienced Healthcare Professionals
            </h2>
          </div>
          <div className="slick-slider slick-initialized slick-dotted">
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{
                  opacity: 1,
                  width: 5344,
                  transform: "translate3d(-1336px, 0px, 0px)"
                }}
              >
                <div
                  className="slide text-center slick-slide slick-cloned"
                  data-slick-index={-4}
                  id=""
                  aria-hidden="true"
                  style={{ width: 334 }}
                  tabIndex={-1}
                >
                  <img
                    src="./Home _ HMS_files/saved_resource"
                    alt="Doctor"
                    className="mx-auto"
                  />
                  <div className="slide-desc mt-4 text-center">
                    <h6>Dr. Satyavati AL</h6>
                    <p>MD</p>
                  </div>
                </div>
                <div
                  className="slide text-center slick-slide slick-cloned"
                  data-slick-index={-3}
                  id=""
                  aria-hidden="true"
                  style={{ width: 334 }}
                  tabIndex={-1}
                >
                  <img
                    src="./Home _ HMS_files/saved_resource(1)"
                    alt="Doctor"
                    className="mx-auto"
                  />
                  <div className="slide-desc mt-4 text-center">
                    <h6>NUR SYAHIRAH ZAHARI</h6>
                    <p>fdfdgs</p>
                  </div>
                </div>
                <div
                  className="slide text-center slick-slide slick-cloned"
                  data-slick-index={-2}
                  id=""
                  aria-hidden="true"
                  style={{ width: 334 }}
                  tabIndex={-1}
                >
                  <img
                    src="./Home _ HMS_files/saved_resource(2)"
                    alt="Doctor"
                    className="mx-auto"
                  />
                  <div className="slide-desc mt-4 text-center">
                    <h6>Police Abbaa Jokoto</h6>
                    <p>Medical Doctor</p>
                  </div>
                </div>
                <div
                  className="slide text-center slick-slide slick-cloned"
                  data-slick-index={-1}
                  id=""
                  aria-hidden="true"
                  style={{ width: 334 }}
                  tabIndex={-1}
                >
                  <img
                    src="./Home _ HMS_files/doctor12.jpeg"
                    alt="Doctor"
                    className="mx-auto"
                  />
                  <div className="slide-desc mt-4 text-center">
                    <h6>John Avery</h6>
                    <p>Rerum ut deserunt qu</p>
                  </div>
                </div>
                <div
                  className="slide text-center slick-slide slick-current slick-active"
                  data-slick-index={0}
                  aria-hidden="false"
                  style={{ width: 334 }}
                  tabIndex={0}
                  role="tabpanel"
                  id="slick-slide00"
                  aria-describedby="slick-slide-control00"
                >
                  <img
                    src="./Home _ HMS_files/doc13.jpeg"
                    alt="Doctor"
                    className="mx-auto"
                  />
                  <div className="slide-desc mt-4 text-center">
                    <h6>Steven Lyon</h6>
                    <p>MBBS</p>
                  </div>
                </div>
                <div
                  className="slide text-center slick-slide slick-active"
                  data-slick-index={1}
                  aria-hidden="false"
                  style={{ width: 334 }}
                  tabIndex={0}
                  role="tabpanel"
                  id="slick-slide01"
                  aria-describedby="slick-slide-control01"
                >
                  <img
                    src="./Home _ HMS_files/saved_resource(3)"
                    alt="Doctor"
                    className="mx-auto"
                  />
                  <div className="slide-desc mt-4 text-center">
                    <h6>Ali Sahil</h6>
                    <p>MBBS</p>
                  </div>
                </div>
                <div
                  className="slide text-center slick-slide slick-active"
                  data-slick-index={2}
                  aria-hidden="false"
                  style={{ width: 334 }}
                  tabIndex={0}
                  role="tabpanel"
                  id="slick-slide02"
                  aria-describedby="slick-slide-control02"
                >
                  <img
                    src="./Home _ HMS_files/saved_resource"
                    alt="Doctor"
                    className="mx-auto"
                  />
                  <div className="slide-desc mt-4 text-center">
                    <h6>Dr. Satyavati AL</h6>
                    <p>MD</p>
                  </div>
                </div>
                <div
                  className="slide text-center slick-slide slick-active"
                  data-slick-index={3}
                  aria-hidden="false"
                  style={{ width: 334 }}
                  tabIndex={0}
                  role="tabpanel"
                  id="slick-slide03"
                  aria-describedby="slick-slide-control03"
                >
                  <img
                    src="./Home _ HMS_files/saved_resource(1)"
                    alt="Doctor"
                    className="mx-auto"
                  />
                  <div className="slide-desc mt-4 text-center">
                    <h6>NUR SYAHIRAH ZAHARI</h6>
                    <p>fdfdgs</p>
                  </div>
                </div>
                <div
                  className="slide text-center slick-slide"
                  data-slick-index={4}
                  aria-hidden="true"
                  style={{ width: 334 }}
                  tabIndex={-1}
                  role="tabpanel"
                  id="slick-slide04"
                  aria-describedby="slick-slide-control04"
                >
                  <img
                    src="./Home _ HMS_files/saved_resource(2)"
                    alt="Doctor"
                    className="mx-auto"
                  />
                  <div className="slide-desc mt-4 text-center">
                    <h6>Police Abbaa Jokoto</h6>
                    <p>Medical Doctor</p>
                  </div>
                </div>
                <div
                  className="slide text-center slick-slide"
                  data-slick-index={5}
                  aria-hidden="true"
                  style={{ width: 334 }}
                  tabIndex={-1}
                  role="tabpanel"
                  id="slick-slide05"
                  aria-describedby="slick-slide-control05"
                >
                  <img
                    src="./Home _ HMS_files/doctor12.jpeg"
                    alt="Doctor"
                    className="mx-auto"
                  />
                  <div className="slide-desc mt-4 text-center">
                    <h6>John Avery</h6>
                    <p>Rerum ut deserunt qu</p>
                  </div>
                </div>
                <div
                  className="slide text-center slick-slide slick-cloned"
                  data-slick-index={6}
                  id=""
                  aria-hidden="true"
                  style={{ width: 334 }}
                  tabIndex={-1}
                >
                  <img
                    src="./Home _ HMS_files/doc13.jpeg"
                    alt="Doctor"
                    className="mx-auto"
                  />
                  <div className="slide-desc mt-4 text-center">
                    <h6>Steven Lyon</h6>
                    <p>MBBS</p>
                  </div>
                </div>
                <div
                  className="slide text-center slick-slide slick-cloned"
                  data-slick-index={7}
                  id=""
                  aria-hidden="true"
                  style={{ width: 334 }}
                  tabIndex={-1}
                >
                  <img
                    src="./Home _ HMS_files/saved_resource(3)"
                    alt="Doctor"
                    className="mx-auto"
                  />
                  <div className="slide-desc mt-4 text-center">
                    <h6>Ali Sahil</h6>
                    <p>MBBS</p>
                  </div>
                </div>
                <div
                  className="slide text-center slick-slide slick-cloned"
                  data-slick-index={8}
                  id=""
                  aria-hidden="true"
                  style={{ width: 334 }}
                  tabIndex={-1}
                >
                  <img
                    src="./Home _ HMS_files/saved_resource"
                    alt="Doctor"
                    className="mx-auto"
                  />
                  <div className="slide-desc mt-4 text-center">
                    <h6>Dr. Satyavati AL</h6>
                    <p>MD</p>
                  </div>
                </div>
                <div
                  className="slide text-center slick-slide slick-cloned"
                  data-slick-index={9}
                  id=""
                  aria-hidden="true"
                  style={{ width: 334 }}
                  tabIndex={-1}
                >
                  <img
                    src="./Home _ HMS_files/saved_resource(1)"
                    alt="Doctor"
                    className="mx-auto"
                  />
                  <div className="slide-desc mt-4 text-center">
                    <h6>NUR SYAHIRAH ZAHARI</h6>
                    <p>fdfdgs</p>
                  </div>
                </div>
                <div
                  className="slide text-center slick-slide slick-cloned"
                  data-slick-index={10}
                  id=""
                  aria-hidden="true"
                  style={{ width: 334 }}
                  tabIndex={-1}
                >
                  <img
                    src="./Home _ HMS_files/saved_resource(2)"
                    alt="Doctor"
                    className="mx-auto"
                  />
                  <div className="slide-desc mt-4 text-center">
                    <h6>Police Abbaa Jokoto</h6>
                    <p>Medical Doctor</p>
                  </div>
                </div>
                <div
                  className="slide text-center slick-slide slick-cloned"
                  data-slick-index={11}
                  id=""
                  aria-hidden="true"
                  style={{ width: 334 }}
                  tabIndex={-1}
                >
                  <img
                    src="./Home _ HMS_files/doctor12.jpeg"
                    alt="Doctor"
                    className="mx-auto"
                  />
                  <div className="slide-desc mt-4 text-center">
                    <h6>John Avery</h6>
                    <p>Rerum ut deserunt qu</p>
                  </div>
                </div>
              </div>
            </div>
            <ul className="slick-dots" style={{}} role="tablist">
              <li className="slick-active" role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control00"
                  aria-controls="slick-slide00"
                  aria-label="1 of 2"
                  tabIndex={0}
                  aria-selected="true"
                >
                  1
                </button>
              </li>
              <li role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control01"
                  aria-controls="slick-slide01"
                  aria-label="2 of 2"
                  tabIndex={-1}
                >
                  2
                </button>
              </li>
              <li role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control02"
                  aria-controls="slick-slide02"
                  aria-label="3 of 2"
                  tabIndex={-1}
                >
                  3
                </button>
              </li>
              <li role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control03"
                  aria-controls="slick-slide03"
                  aria-label="4 of 2"
                  tabIndex={-1}
                >
                  4
                </button>
              </li>
              <li role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control04"
                  aria-controls="slick-slide04"
                  aria-label="5 of 2"
                  tabIndex={-1}
                >
                  5
                </button>
              </li>
              <li role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control05"
                  aria-controls="slick-slide05"
                  aria-label="6 of 2"
                  tabIndex={-1}
                >
                  6
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* end professional-doctors section */}
      {/* start testimonial-section */}
      <section className="testimonial-section p-t-120">
        <div className="container">
          <div className="col-lg-6 text-center mx-auto">
            <h6 className="text-primary pb-2">Our Testimonials</h6>
            <h2 className="mb-4 pb-xl-4">
              What Our Patients Say About Our Medical Treatments
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="testimonial-slider slick-initialized slick-slider slick-dotted">
                <span className="prev-arrow slick-arrow" style={{}}>
                  <svg
                    className="svg-inline--fa fa-chevron-left fs-5"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
                    ></path>
                  </svg>
                  {/* <i class="fas fa-chevron-left fs-5"></i> Font Awesome fontawesome.com */}
                </span>
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 8964,
                      transform: "translate3d(-996px, 0px, 0px)"
                    }}
                  >
                    <div
                      className="justify-content-center slick-slide slick-cloned"
                      data-slick-index={-1}
                      id=""
                      aria-hidden="true"
                      style={{ width: 996 }}
                      tabIndex={-1}
                    >
                      <div className="row align-items-center">
                        <div className="col-md-4 col-sm-4 position-relative">
                          <div className="testimonial-img">
                            <img
                              src="./Home _ HMS_files/Testimonial-1696416540.png"
                              alt="testimonial image"
                              className="img-fluid"
                            />
                          </div>
                          <div className="quote-img br-5 position-absolute">
                            <img src="./Home _ HMS_files/quote.png" alt="quote" />
                          </div>
                        </div>
                        <div className="col-md-8 col-sm-8 position-relative pb-md-5 mb-md-3">
                          <div className="testimonial-desc ps-lg-5 pt-sm-0 pt-4">
                            <h3>Miley Kottler</h3>
                            <p className="mb-0">
                              Provided me with excellent and prompt service. The
                              nurses are very attentive and there are always
                              enough meals and service for the patients.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="justify-content-center slick-slide slick-current slick-active"
                      data-slick-index={0}
                      aria-hidden="false"
                      style={{ width: 996 }}
                      tabIndex={0}
                      role="tabpanel"
                      id="slick-slide10"
                      aria-describedby="slick-slide-control10"
                    >
                      <div className="row align-items-center">
                        <div className="col-md-4 col-sm-4 position-relative">
                          <div className="testimonial-img">
                            <img
                              src="./Home _ HMS_files/Testimonial-1637126662.jpeg"
                              alt="testimonial image"
                              className="img-fluid"
                            />
                          </div>
                          <div className="quote-img br-5 position-absolute">
                            <img src="./Home _ HMS_files/quote.png" alt="quote" />
                          </div>
                        </div>
                        <div className="col-md-8 col-sm-8 position-relative pb-md-5 mb-md-3">
                          <div className="testimonial-desc ps-lg-5 pt-sm-0 pt-4">
                            <h3>Rossy</h3>
                            <p className="mb-0">
                              The services are very good. I recommend another
                              patient to come to this hospital. Everything in
                              hospital is good.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="justify-content-center slick-slide"
                      data-slick-index={1}
                      aria-hidden="true"
                      style={{ width: 996 }}
                      tabIndex={-1}
                      role="tabpanel"
                      id="slick-slide11"
                      aria-describedby="slick-slide-control11"
                    >
                      <div className="row align-items-center">
                        <div className="col-md-4 col-sm-4 position-relative">
                          <div className="testimonial-img">
                            <img
                              src="./Home _ HMS_files/Testimonial-1637126738.jpeg"
                              alt="testimonial image"
                              className="img-fluid"
                            />
                          </div>
                          <div className="quote-img br-5 position-absolute">
                            <img src="./Home _ HMS_files/quote.png" alt="quote" />
                          </div>
                        </div>
                        <div className="col-md-8 col-sm-8 position-relative pb-md-5 mb-md-3">
                          <div className="testimonial-desc ps-lg-5 pt-sm-0 pt-4">
                            <h3>David Swatznager</h3>
                            <p className="mb-0">
                              We have found the doctors, nursing, staff and
                              support personnel to be extremely skilled and caring
                              in our daily contact with all concerned.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="justify-content-center slick-slide"
                      data-slick-index={2}
                      aria-hidden="true"
                      style={{ width: 996 }}
                      tabIndex={-1}
                      role="tabpanel"
                      id="slick-slide12"
                      aria-describedby="slick-slide-control12"
                    >
                      <div className="row align-items-center">
                        <div className="col-md-4 col-sm-4 position-relative">
                          <div className="testimonial-img">
                            <img
                              src="./Home _ HMS_files/Testimonial-1637129957.jpeg"
                              alt="testimonial image"
                              className="img-fluid"
                            />
                          </div>
                          <div className="quote-img br-5 position-absolute">
                            <img src="./Home _ HMS_files/quote.png" alt="quote" />
                          </div>
                        </div>
                        <div className="col-md-8 col-sm-8 position-relative pb-md-5 mb-md-3">
                          <div className="testimonial-desc ps-lg-5 pt-sm-0 pt-4">
                            <h3>Callings Hokma</h3>
                            <p className="mb-0">
                              During our stay in hospital, we find good and
                              excellent treatment from all the employees. They
                              really helpful in all areas of the treatment.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="justify-content-center slick-slide"
                      data-slick-index={3}
                      aria-hidden="true"
                      style={{ width: 996 }}
                      tabIndex={-1}
                      role="tabpanel"
                      id="slick-slide13"
                      aria-describedby="slick-slide-control13"
                    >
                      <div className="row align-items-center">
                        <div className="col-md-4 col-sm-4 position-relative">
                          <div className="testimonial-img">
                            <img
                              src="./Home _ HMS_files/Testimonial-1696416540.png"
                              alt="testimonial image"
                              className="img-fluid"
                            />
                          </div>
                          <div className="quote-img br-5 position-absolute">
                            <img src="./Home _ HMS_files/quote.png" alt="quote" />
                          </div>
                        </div>
                        <div className="col-md-8 col-sm-8 position-relative pb-md-5 mb-md-3">
                          <div className="testimonial-desc ps-lg-5 pt-sm-0 pt-4">
                            <h3>Miley Kottler</h3>
                            <p className="mb-0">
                              Provided me with excellent and prompt service. The
                              nurses are very attentive and there are always
                              enough meals and service for the patients.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="justify-content-center slick-slide slick-cloned"
                      data-slick-index={4}
                      id=""
                      aria-hidden="true"
                      style={{ width: 996 }}
                      tabIndex={-1}
                    >
                      <div className="row align-items-center">
                        <div className="col-md-4 col-sm-4 position-relative">
                          <div className="testimonial-img">
                            <img
                              src="./Home _ HMS_files/Testimonial-1637126662.jpeg"
                              alt="testimonial image"
                              className="img-fluid"
                            />
                          </div>
                          <div className="quote-img br-5 position-absolute">
                            <img src="./Home _ HMS_files/quote.png" alt="quote" />
                          </div>
                        </div>
                        <div className="col-md-8 col-sm-8 position-relative pb-md-5 mb-md-3">
                          <div className="testimonial-desc ps-lg-5 pt-sm-0 pt-4">
                            <h3>Rossy</h3>
                            <p className="mb-0">
                              The services are very good. I recommend another
                              patient to come to this hospital. Everything in
                              hospital is good.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="justify-content-center slick-slide slick-cloned"
                      data-slick-index={5}
                      id=""
                      aria-hidden="true"
                      style={{ width: 996 }}
                      tabIndex={-1}
                    >
                      <div className="row align-items-center">
                        <div className="col-md-4 col-sm-4 position-relative">
                          <div className="testimonial-img">
                            <img
                              src="./Home _ HMS_files/Testimonial-1637126738.jpeg"
                              alt="testimonial image"
                              className="img-fluid"
                            />
                          </div>
                          <div className="quote-img br-5 position-absolute">
                            <img src="./Home _ HMS_files/quote.png" alt="quote" />
                          </div>
                        </div>
                        <div className="col-md-8 col-sm-8 position-relative pb-md-5 mb-md-3">
                          <div className="testimonial-desc ps-lg-5 pt-sm-0 pt-4">
                            <h3>David Swatznager</h3>
                            <p className="mb-0">
                              We have found the doctors, nursing, staff and
                              support personnel to be extremely skilled and caring
                              in our daily contact with all concerned.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="justify-content-center slick-slide slick-cloned"
                      data-slick-index={6}
                      id=""
                      aria-hidden="true"
                      style={{ width: 996 }}
                      tabIndex={-1}
                    >
                      <div className="row align-items-center">
                        <div className="col-md-4 col-sm-4 position-relative">
                          <div className="testimonial-img">
                            <img
                              src="./Home _ HMS_files/Testimonial-1637129957.jpeg"
                              alt="testimonial image"
                              className="img-fluid"
                            />
                          </div>
                          <div className="quote-img br-5 position-absolute">
                            <img src="./Home _ HMS_files/quote.png" alt="quote" />
                          </div>
                        </div>
                        <div className="col-md-8 col-sm-8 position-relative pb-md-5 mb-md-3">
                          <div className="testimonial-desc ps-lg-5 pt-sm-0 pt-4">
                            <h3>Callings Hokma</h3>
                            <p className="mb-0">
                              During our stay in hospital, we find good and
                              excellent treatment from all the employees. They
                              really helpful in all areas of the treatment.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="justify-content-center slick-slide slick-cloned"
                      data-slick-index={7}
                      id=""
                      aria-hidden="true"
                      style={{ width: 996 }}
                      tabIndex={-1}
                    >
                      <div className="row align-items-center">
                        <div className="col-md-4 col-sm-4 position-relative">
                          <div className="testimonial-img">
                            <img
                              src="./Home _ HMS_files/Testimonial-1696416540.png"
                              alt="testimonial image"
                              className="img-fluid"
                            />
                          </div>
                          <div className="quote-img br-5 position-absolute">
                            <img src="./Home _ HMS_files/quote.png" alt="quote" />
                          </div>
                        </div>
                        <div className="col-md-8 col-sm-8 position-relative pb-md-5 mb-md-3">
                          <div className="testimonial-desc ps-lg-5 pt-sm-0 pt-4">
                            <h3>Miley Kottler</h3>
                            <p className="mb-0">
                              Provided me with excellent and prompt service. The
                              nurses are very attentive and there are always
                              enough meals and service for the patients.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="next-arrow slick-arrow" style={{}}>
                  <svg
                    className="svg-inline--fa fa-chevron-right fs-5"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
                    ></path>
                  </svg>
                  {/* <i class="fas fa-chevron-right fs-5"></i> Font Awesome fontawesome.com */}
                </span>
                <ul className="slick-dots" style={{}} role="tablist">
                  <li className="slick-active" role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control10"
                      aria-controls="slick-slide10"
                      aria-label="1 of 4"
                      tabIndex={0}
                      aria-selected="true"
                    >
                      1
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control11"
                      aria-controls="slick-slide11"
                      aria-label="2 of 4"
                      tabIndex={-1}
                    >
                      2
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control12"
                      aria-controls="slick-slide12"
                      aria-label="3 of 4"
                      tabIndex={-1}
                    >
                      3
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id="slick-slide-control13"
                      aria-controls="slick-slide13"
                      aria-label="4 of 4"
                      tabIndex={-1}
                    >
                      4
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end testimonial-section */}
    </div>
    {/* Start Footer Area */}
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 mb-lg-0 mb-4">
            <div className="row justify-content-between">
              <div className="col-lg-2 mb-lg-0 mb-4">
                <img
                  src="./Home _ HMS_files/InfyHMS-80.png"
                  alt="Infy HMS"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-10">
                <p className="d-block text-white">
                  Over past 10+ years of experience and skills in various
                  technologies, we built great scalable products.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-3">
            <h3 className="mb-4 pb-1 text-primary">Useful Link</h3>
            <ul className="ps-0">
              <li className="">
                <a
                  href="#"
                  className="footer-active text-decoration-none mb-3 d-block text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#our-services"
                  className=" text-decoration-none mb-3 d-block text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#our-doctors"
                  className=" text-decoration-none mb-3 d-block text-white"
                >
                  Doctors
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className=" text-decoration-none mb-3 d-block text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                  className=" text-decoration-none mb-3 d-block text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <h3 className="mb-4 pb-1 text-primary">Contact Information</h3>
            <div className="footer-info">
              <div className="d-flex align-items-center footer-info__block mb-3 pb-1">
                <svg
                  className="svg-inline--fa fa-phone text-white fs-5 me-3"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
                  ></path>
                </svg>
                {/* <i class="fa-solid fa-phone text-white fs-5 me-3"></i> Font Awesome fontawesome.com */}
                <a
                  href="tel:+905414761900"
                  className="text-decoration-none text-white fs-6"
                >
                  +905414761900
                </a>
              </div>
              <div className="d-flex align-items-center footer-info__block mb-3 pb-1">
                <svg
                  className="svg-inline--fa fa-clock fs-5 me-3 text-white"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="clock"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
                  ></path>
                </svg>
                {/* <i class="fa-solid fa-clock fs-5 me-3 text-white"></i> Font Awesome fontawesome.com */}
                <p className="text-white fs-6 mb-0">08:00 AM to 21:00 PM</p>
              </div>
              <div className="d-flex align-items-center footer-info__block mb-3 pb-1">
                <svg
                  className="svg-inline--fa fa-location-dot fs-5 me-3 text-white"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="location-dot"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
                  ></path>
                </svg>
                {/* <i class="fa-solid fa-location-dot fs-5 me-3 text-white"></i> Font Awesome fontawesome.com */}
                <p className="text-white fs-6 mb-0">
                  C/303, Atlanta Shopping Mall Sudama Chowk, Mota Varachha, Surat,
                  Gujarat 394101
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 text-center mt-lg-5 mt-4 copy-right">
            <p className="pt-4 pb-4 mb-0 text-white">
              Copyright © 2023 All Rights Reserved by HMS
            </p>
          </div>
        </div>
      </div>
    </footer>
    {/* end footer section */}
    {/* Start Go Top Area */}
    <div className="go-top bg-success d-flex align-items-center justify-content-center">
      <svg
        className="svg-inline--fa fa-chevron-up next-arrow"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="chevron-up"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        data-fa-i2svg=""
      >
        <path
          fill="currentColor"
          d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z"
        ></path>
      </svg>
      {/* <i class="fas fa-chevron-up next-arrow"></i> Font Awesome fontawesome.com */}
    </div>
    <div
      id="ui-datepicker-div"
      className="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"
      style={{
        position: "absolute",
        top: "837.562px",
        left: "963.5px",
        zIndex: 1000,
        display: "none"
      }}
    >
      <div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">
        <a
          className="ui-datepicker-prev ui-corner-all ui-state-disabled"
          title="Prev"
        >
          <span className="ui-icon ui-icon-circle-triangle-w">Prev</span>
        </a>
        <a
          className="ui-datepicker-next ui-corner-all"
          data-handler="next"
          data-event="click"
          title="Next"
        >
          <span className="ui-icon ui-icon-circle-triangle-e">Next</span>
        </a>
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">November</span>&nbsp;
          <span className="ui-datepicker-year">2023</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <thead>
          <tr>
            <th scope="col" className="ui-datepicker-week-end">
              <span title="Sunday">Su</span>
            </th>
            <th scope="col">
              <span title="Monday">Mo</span>
            </th>
            <th scope="col">
              <span title="Tuesday">Tu</span>
            </th>
            <th scope="col">
              <span title="Wednesday">We</span>
            </th>
            <th scope="col">
              <span title="Thursday">Th</span>
            </th>
            <th scope="col">
              <span title="Friday">Fr</span>
            </th>
            <th scope="col" className="ui-datepicker-week-end">
              <span title="Saturday">Sa</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
              &nbsp;
            </td>
            <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
              &nbsp;
            </td>
            <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
              &nbsp;
            </td>
            <td className=" ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">1</span>
            </td>
            <td className=" ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">2</span>
            </td>
            <td className=" ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">3</span>
            </td>
            <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">4</span>
            </td>
          </tr>
          <tr>
            <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">5</span>
            </td>
            <td className=" ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">6</span>
            </td>
            <td className=" ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">7</span>
            </td>
            <td className=" ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">8</span>
            </td>
            <td className=" ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">9</span>
            </td>
            <td className=" ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">10</span>
            </td>
            <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">11</span>
            </td>
          </tr>
          <tr>
            <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">12</span>
            </td>
            <td className=" ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">13</span>
            </td>
            <td className=" ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">14</span>
            </td>
            <td className=" ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">15</span>
            </td>
            <td className=" ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">16</span>
            </td>
            <td className=" ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">17</span>
            </td>
            <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">18</span>
            </td>
          </tr>
          <tr>
            <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">19</span>
            </td>
            <td className=" ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">20</span>
            </td>
            <td className=" ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">21</span>
            </td>
            <td className=" ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">22</span>
            </td>
            <td className=" ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">23</span>
            </td>
            <td className=" ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">24</span>
            </td>
            <td className=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled ">
              <span className="ui-state-default">25</span>
            </td>
          </tr>
          <tr>
            <td
              className=" ui-datepicker-week-end ui-datepicker-days-cell-over  ui-datepicker-today"
              data-handler="selectDay"
              data-event="click"
              data-month={10}
              data-year={2023}
            >
              <a
                className="ui-state-default ui-state-highlight ui-state-hover"
                href="##"
              >
                26
              </a>
            </td>
            <td
              className=" "
              data-handler="selectDay"
              data-event="click"
              data-month={10}
              data-year={2023}
            >
              <a className="ui-state-default" href="##">
                27
              </a>
            </td>
            <td
              className=" "
              data-handler="selectDay"
              data-event="click"
              data-month={10}
              data-year={2023}
            >
              <a className="ui-state-default" href="##">
                28
              </a>
            </td>
            <td
              className=" "
              data-handler="selectDay"
              data-event="click"
              data-month={10}
              data-year={2023}
            >
              <a className="ui-state-default" href="##">
                29
              </a>
            </td>
            <td
              className=" "
              data-handler="selectDay"
              data-event="click"
              data-month={10}
              data-year={2023}
            >
              <a className="ui-state-default" href="##">
                30
              </a>
            </td>
            <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
              &nbsp;
            </td>
            <td className=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
              &nbsp;
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
  )
}

export default First