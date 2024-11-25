import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const TurnosContext = createContext();

// Proveedor del contexto
export const TurnosProvider = ({ children }) => {
  const [turnos, setTurnos] = useState([]);
  const [clientas, setClientas] = useState([]);

  // Función para agregar un turno
  const agregarTurno = (nuevoTurno) => {
    setTurnos([...turnos, nuevoTurno]);
  };

  // Función para agregar una clienta
  const agregarClienta = (nuevaClienta) => {
    setClientas([...clientas, nuevaClienta]);
  };

  // Valores disponibles en el contexto
  const value = {
    turnos,
    clientas,
    agregarTurno,
    agregarClienta,
  };

  return <TurnosContext.Provider value={value}>{children}</TurnosContext.Provider>;
};

// Hook personalizado para usar el contexto
export const useTurnos = () => {
  return useContext(TurnosContext);
};
