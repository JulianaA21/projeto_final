import AppNavbar from '../components/navbar';
import '../css/login.css';
import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';

import image2 from '../assets/image2.jpg';
import logo from '../assets/PadelCoimbra.svg';



const Login = () => {
  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) return;
    setJustifyActive(value);
  };

  return (
    <>
      <MDBContainer className="my-5 d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
        <MDBCard className="shadow" style={{ borderRadius: '20px', overflow: 'hidden', maxWidth: '1000px', width: '100%' }}>
          <MDBRow className="g-0">

            {/* Left Side Image */}
            <MDBCol md="6">
              <MDBCardImage
                src={image2}
                alt="login form"
                className="w-100 h-100"
                style={{ objectFit: 'cover' }}
              />
            </MDBCol>

            {/* Right Side Form */}
            <MDBCol md="6" className="d-flex align-items-center">
              <MDBCardBody className="px-5 py-4">
                <img
                  src={logo}
                  alt="PadelCoimbra Logo"
                  style={{ height: '30px', objectFit: 'contain' }}
                />   
                <p className="text-muted mb-4 mt-4">Sign into your account</p>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formEmail"
                  type="email"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formPassword"
                  type="password"
                  size="lg"
                />

                <MDBBtn
                  href="http://localhost:5173"
                  className="w-100 mb-4"
                  color="dark"
                  size="lg"
                  style={{ borderRadius: '12px' }}
                >
                  Login
                </MDBBtn>

                <div className="text-center">
                  <a className="small text-muted d-block mb-2" href="#!">Esqueceu-se da password?</a>
                  <span className="text-muted">Não tens conta criada? </span>
                  <a href="http://localhost:5173/register" className="text-primary fw-bold">Regista-te aqui!</a>
                </div>

                <hr className="my-4" />

                <div className="d-flex justify-content-center flex-wrap text-muted small">
                  <a href="#!" className="me-3">Termos de utilização</a>
                  <a href="#!">Política de privacidade</a>
                </div>

              </MDBCardBody>
            </MDBCol>

          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default Login;
