import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import AppNavbar from '../components/navbar';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

const ClassPage = () => {
  const aulas = [
    { nome: "Aula de Iniciantes", descricao: "Para quem está começando no padel", horario: "9h - 10h" },
    { nome: "Aula Infantil", descricao: "Aulas para crianças de 8 a 12 ano", horario: "Sábado 10h - 11h" },
    { nome: "Aula Avançada", descricao: "Treino para jogadores experientes", horario: "15h - 17h" },
    { nome: "Aula Fitness Padel", descricao: "Aula com foco em condicionamento físico", horario: "Sábado 11h30 - 12h30" },
   ];  

  const imagens = [image1, image2, image3, image4];

  const handleEscolherAula = (aula) => {
    alert(`${aula.nome}: escolhida`);
  };

  return (
    <>
      <AppNavbar />
      <Container className="my-5">
        <h2 className="mb-4">Aulas Disponíveis</h2>
        <Row className="g-3">
          {aulas.map((aula, idx) => (
            <Col key={idx} md={4} sm={7} xs={13}>
              <Card className="h-100 shadow rounded-4 border">
                <Card.Img
                  variant="top"
                  src={imagens[idx % imagens.length]} // Escolhe a imagem ciclicamente
                  alt={`Imagem da aula: ${aula.nome}`}
                  className="card-img-top rounded-3 mb-3"
                  style={{ objectFit: "cover", height: "180px" }}
                />
                <Card.Body>
                  <Card.Title>{aula.nome}</Card.Title>
                  <Card.Text>{aula.descricao}</Card.Text>
                  <Card.Text>
                    <strong>Horário:</strong> {aula.horario}
                  </Card.Text>
                  <Button variant="success" onClick={() => handleEscolherAula(aula)}>
                    Escolher Aula
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ClassPage;
