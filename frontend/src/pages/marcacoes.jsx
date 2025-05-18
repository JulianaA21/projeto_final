import React, { useContext } from "react";
import '../css/index.css';
import AppNavbar from '../components/navbar';
import { Container, Row, Col, Button } from "react-bootstrap";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { ReservationsContext } from '../context';

const localizer = momentLocalizer(moment);

const Marcacoes = () => {
  const { events, setEvents, classes, setClasses } = useContext(ReservationsContext);

  const addReservation = (slotInfo) => {
    const selectedHour = new Date(slotInfo.start).getHours();
    if (selectedHour < 9 || selectedHour >= 23) return;

    const start = new Date(slotInfo.start);
    start.setMinutes(0, 0, 0);
    const end = new Date(start.getTime() + 60 * 60 * 1000);

    const formatted = start.toLocaleString('pt-PT', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    const confirm = window.confirm(`Tens a certeza que queres confirmar esta reserva para ${formatted}?`);

    if (confirm) {
      setEvents(prev => [...prev, { title: "Reserva Confirmada", start, end }]);
    }
  };

  const addClass = () => {
    const title = prompt("Título da aula:");
    if (!title) return;

    const dateStr = prompt("Data e hora da aula (ex: 2025-05-21 18:00):");
    if (!dateStr) return;

    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      alert("Data inválida!");
      return;
    }

    setClasses(prev => [...prev, { title, date }]);
  };

  return (
    <>
      <AppNavbar />
      <div className="background-image">
        <Container className="my-5">
          <h2 className="text-center mb-4">Reserva o teu campo!</h2>

          <div className="shadow p-4 rounded-4 bg-white border mb-4">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
              defaultView="week"
              views={['week']}
              min={new Date(new Date().setHours(9, 0, 0, 0))}
              max={new Date(new Date().setHours(23, 0, 0, 0))}
              step={60}
              timeslots={1}
              selectable
              selectRange={false}
              onSelectSlot={addReservation}
              onSelectEvent={(event) => alert(`Reserva: ${event.title}`)}
            />
          </div>
          <h3 className="mb-4">Lista de Reservas</h3>
          {events.length === 0 ? (
            <p>Sem reservas ainda.</p>
          ) : (
            events
              .sort((a, b) => a.start - b.start)
              .map((event, index) => {
                const dateStr = event.start.toLocaleDateString('pt-PT', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                });

                const timeStr = event.start.toLocaleTimeString('pt-PT', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false
                });

                return (
                  <div className="card shadow p-4 rounded-4 bg-white border mb-4" key={index}>
                    <div className="card-body">
                      <h5 className="card-title">{event.title}</h5>
                      <p className="card-text">
                        📅 <strong>{dateStr}</strong><br />
                        ⏰ <strong>{timeStr}</strong>
                      </p>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          if (window.confirm("Tens a certeza que queres cancelar esta reserva?")) {
                            setEvents(events.filter((_, i) => i !== index));
                          }
                        }}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                );
              })
          )}
        </Container>
      </div>
    </>
  );
};

export default Marcacoes;
