import React, { createContext, useState } from 'react';

export const ReservationsContext = createContext();

export const ReservationsProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      title: 'Reserva Confirmada',
      start: new Date(2025, 4, 20, 10, 0),
      end: new Date(2025, 4, 20, 11, 0),
    },
     {
      title: 'Reserva Confirmada',
      start: new Date(2025, 4, 21, 14, 0),
      end: new Date(2025, 4, 21, 15, 0),
    }
  ]);
  const [classes, setClasses] = useState([
    {
      title: 'Aula de Iniciados',
      date: new Date(2025, 4, 21, 18, 0),
    },
  ]);

  return (
    <ReservationsContext.Provider value={{ events, setEvents, classes, setClasses }}>
      {children}
    </ReservationsContext.Provider>
  );
};
