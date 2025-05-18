import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Atividade = ({ reservations = [], classes = [] }) => {
  return (
    <Container className="my-5">
      <h3 className="mb-4">Últimas Atividades</h3>
      <Row className="g-4">
        {/* Últimas Marcações */}
        <Col md={6}>
          <Card className="shadow p-4 rounded-4 bg-white border h-100">
            <Card.Body>
              <Card.Title>Marcações Recentes</Card.Title>
              {reservations.length === 0 ? (
                <p>Sem marcações recentes.</p>
              ) : (
                reservations.map((res, index) => (
                  <div key={index} className="mb-3 border-bottom pb-2">
                    <strong>{res.title}</strong>
                    <div className="text-muted" style={{ fontSize: "0.9rem" }}>
                      {new Date(res.start).toLocaleString("pt-PT", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </div>
                  </div>
                ))
              )}
            </Card.Body>
          </Card>
        </Col>

        {/* Últimas Aulas */}
        <Col md={6}>
          <Card className="shadow p-4 rounded-4 bg-white border h-100">
            <Card.Body>
              <Card.Title>Aulas Recentes</Card.Title>
              {classes.length === 0 ? (
                <p>Sem aulas recentes.</p>
              ) : (
                classes.map((cls, index) => (
                  <div key={index} className="mb-3 border-bottom pb-2">
                    <strong>{cls.title}</strong>
                    <div className="text-muted" style={{ fontSize: "0.9rem" }}>
                      {new Date(cls.date).toLocaleString("pt-PT", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </div>
                  </div>
                ))
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Atividade;
