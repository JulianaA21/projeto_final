import React, { useState } from "react";
import { Container, Card, Button, Form, Alert } from "react-bootstrap";
import AppNavbar from "../components/navbar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const ProfilePage = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    nome: "João Silva",
    dataNascimento: "1995-08-20",
    email: "joao.silva@example.com",
    contacto: "912345678",
    password: "Senha@123",
  });

  const [formData, setFormData] = useState({
    ...profile,
    dataNascimento: dayjs(profile.dataNascimento),
  });

  const [confirmPassword, setConfirmPassword] = useState(profile.password);
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (pwd) => {
    const regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&._\-])[A-Za-z\d@$!%*?&._\-]{8,}$/;
    return regex.test(pwd);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!validatePassword(formData.password)) {
      setPasswordError(
        "A senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas, número e símbolo."
      );
      return;
    }
    if (formData.password !== confirmPassword) {
      setPasswordError("As senhas não coincidem.");
      return;
    }

    setPasswordError("");
    setProfile({
      ...formData,
      dataNascimento: formData.dataNascimento.format("YYYY-MM-DD"),
    });
    setEditing(false);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja eliminar o perfil?"
    );
    if (confirmDelete) {
      alert("Perfil eliminado!");
      setProfile(null);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("pt-PT", options);
  };

  if (!profile) {
    return (
      <>
        <AppNavbar />
        <Container className="my-5 text-center">
          <h3>Perfil não encontrado.</h3>
        </Container>
      </>
    );
  }

  return (
    <>
      <AppNavbar />
      <Container className="my-5">
        <Card className="p-4 shadow rounded-4 border mx-auto" style={{ maxWidth: "500px" }}>
          <Card.Title className="mb-4 text-center fs-3">Perfil do Usuário</Card.Title>
          {editing ? (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Data de Nascimento</Form.Label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={formData.dataNascimento}
                    onChange={(newDate) =>
                      setFormData((prev) => ({ ...prev, dataNascimento: newDate }))
                    }
                    format="DD/MM/YYYY"
                  />
                </LocalizationProvider>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contacto</Form.Label>
                <Form.Control
                  type="text"
                  name="contacto"
                  value={formData.contacto}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Confirmar Password</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>

              {passwordError && <Alert variant="danger">{passwordError}</Alert>}

              <div className="d-flex justify-content-between">
                <Button variant="success" onClick={handleSave}>
                  Salvar
                </Button>
                <Button variant="secondary" onClick={() => setEditing(false)}>
                  Cancelar
                </Button>
              </div>
            </Form>
          ) : (
            <>
              <p><strong>Nome:</strong> {profile.nome}</p>
              <p><strong>Data de Nascimento:</strong> {formatDate(profile.dataNascimento)}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Contacto:</strong> {profile.contacto}</p>
              <p><strong>Password:</strong> ******</p>

              <div className="d-flex justify-content-between">
                <Button
                  variant="primary"
                  onClick={() => {
                    setEditing(true);
                    setFormData({
                      ...profile,
                      dataNascimento: dayjs(profile.dataNascimento),
                    });
                    setConfirmPassword(profile.password);
                  }}
                >
                  Editar Perfil
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                  Eliminar Perfil
                </Button>
              </div>
            </>
          )}
        </Card>
      </Container>
    </>
  );
};

export default ProfilePage;
