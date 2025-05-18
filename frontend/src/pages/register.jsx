import AppNavbar from '../components/navbar';
import '../css/login.css';
import React from 'react';
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

import image1 from '../assets/image1.jpg';
import logo from '../assets/PadelCoimbra.svg';



const Register = () => {
  return (
    <>
      <MDBContainer className="my-5 d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
        <MDBCard className="shadow"style={{ borderRadius: '20px', overflow: 'hidden', maxWidth: '1000px', width: '100%' }}>
          <MDBRow className="g-0">

            {/* Left Image */}
            <MDBCol md="6">
              <MDBCardImage
                src={image1}
                alt="register form"
                className="w-100 h-100"
                style={{ objectFit: 'cover' }}
              />
            </MDBCol>

            {/* Right Form */}
            <MDBCol md="6" className="d-flex align-items-center">
              <MDBCardBody className="px-5 py-4">
                <img
                  src={logo}
                  alt="PadelCoimbra Logo"
                  style={{ height: '30px', objectFit: 'contain' }}
                />                
                <p className="text-muted mb-4 mt-4">Cria a tua conta</p>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Nome completo"
                  id="name"
                  type="text"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="email"
                  type="email"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="password"
                  type="password"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Confirmar Password"
                  id="confirmPassword"
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
                  Registar
                </MDBBtn>

                <div className="text-center">
                  <span className="text-muted">Já tens conta? </span>
                  <a href="http://localhost:5173/login" className="text-primary fw-bold">Entra aqui!</a>
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

export default Register;
