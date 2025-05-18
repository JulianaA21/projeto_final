import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import '../css/home.css';
import AppNavbar from '../components/navbar';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import Atividade from '../components/atividade';

import { ReservationsContext } from '../context';

const Home = () => {
  const { events: reservations, classes } = useContext(ReservationsContext);

  return (
    <>
      <AppNavbar />
      <Container className="my-5">
        <Row className="g-4">
          {/* Reservations Card */}
          <Col md={6}>
            <div className="card shadow p-4 rounded-4 bg-white border h-100">
              <img
                src={image4}
                alt="Reservas"
                className="card-img-top rounded-3 mb-3"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body">
                <h4 className="card-title mb-3">Reservas de Padel</h4>
                <p className="card-text">
                  Marca o teu campo de padel com facilidade. Escolhe a hora e confirma a tua reserva num clique!
                </p>
                <Button variant="primary" className="mt-3 custom-hover" href="/marcacoes">
                  Ver Reservas
                </Button>
              </div>
            </div>
          </Col>

          {/* Classes Card */}
          <Col md={6}>
            <div className="card shadow p-4 rounded-4 bg-white border h-100">
              <img
                src={image3}
                alt="Aulas"
                className="card-img-top rounded-3 mb-3"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body">
                <h4 className="card-title mb-3">Aulas de Padel</h4>
                <p className="card-text">
                  Junta-te às nossas aulas de padel para todos os níveis. Aprende, evolui e diverte-te!
                </p>
                <Button variant="success" className="mt-3 custom-hover" href="/aulas">
                  Ver Aulas
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        <div className="mt-5">
          <Atividade reservations={reservations} classes={classes} />
        </div>
      </Container>
    </>
  );
};

export default Home;
