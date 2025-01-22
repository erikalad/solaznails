import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Crear el contexto
const TurnosContext = createContext();

// Proveedor del contexto
export const TurnosProvider = ({ children }) => {
  const [turnos, setTurnos] = useState([]);
  const [clientas, setClientas] = useState([]);
  const [visitas, setVisitas] = useState([]);
  const [fotos, setFotos] = useState([]);
  const [clientaSeleccionada, setClientaSeleccionada] = useState(null); // Para GETBYID
  const [error, setError] = useState(null);
  console.log("clientas", clientas,"visitas",visitas,"fotos", fotos, "turnos", turnos)

  const baseURL = "https://solaznails-back.onrender.com"; // Cambia esto a tu baseURL

  // Función para manejar errores
const handleError = (error) => {
  if (axios.isAxiosError(error)) {
    // Errores relacionados con Axios
    console.error("Error de Axios:", error.message);
    return error.response?.data?.message || "Ocurrió un error al procesar la solicitud.";
  } else {
    // Otros errores
    console.error("Error inesperado:", error);
    return "Algo salió mal. Por favor, inténtalo de nuevo más tarde.";
  }
};

  // Función para cargar turnos desde el servidor
  const fetchTurnos = async (mes = null, anio = null) => {
    try {
      // Si no se proporcionan mes y año, usa el actual
      const fechaActual = new Date();
      const mesActual = mes || String(fechaActual.getMonth() + 1).padStart(2, '0'); // Mes en formato '01', '02', etc.
      const anioActual = anio || String(fechaActual.getFullYear());
  
      const response = await axios.get(`${baseURL}/turnos`, {
        params: {
          mes: mesActual,
          anio: anioActual,
        },
      });
      setTurnos(response.data);
      setError(null); // Limpiar error previo
    } catch (error) {
      const errorMessage = handleError(error);
      setError(errorMessage);
    }
  };
  

  // Función para cargar clientas desde el servidor
  const fetchClientas = async () => {
    try {
      const response = await axios.get(`https://solaznails-back.onrender.com/clientas`, {
        headers: {
          'Content-Type': 'application/json', // Especifica el tipo de contenido
        },
      });
      console.log("la data",response.data)

      setClientas(response.data);
      setError(null); // Limpiar error previo
    } catch (error) {
      const errorMessage = handleError(error);
      setError(errorMessage);
    }
  };
  // Función para cargar visitas desde el servidor
  const fetchVisitas = async () => {
    try {
      const response = await axios.get(`${baseURL}/visitas`);
      setVisitas(response.data);
      setError(null); // Limpiar error previo
    } catch (error) {
      const errorMessage = handleError(error);
      setError(errorMessage);
    }
  };

  // Función para cargar fotos desde el servidor
  const fetchFotos = async () => {
    try {
      const response = await axios.get(`${baseURL}/uploads`);
      setFotos(response.data);
      console.log("estas son las fotos", response.data)
      setError(null); // Limpiar error previo
    } catch (error) {
      const errorMessage = handleError(error);
      setError(errorMessage);
      console.log("error de fotos", errorMessage)
    }
  };

  // Función para agregar un nuevo turno al servidor
  // const agregarTurno = async (nuevoTurno) => {
  //   try {
  //     const response = await axios.post(`${baseURL}/turnos`, nuevoTurno);
  //     setTurnos([...turnos, response.data]);
  //   } catch (error) {
  //     console.error("Error al agregar un turno:", error);
  //   }
  // };

  // Función para agregar una nueva clienta al servidor
  const agregarClienta = async (nuevaClienta) => {
    try {
      const response = await axios.post(`${baseURL}/clienta`, nuevaClienta);
      setClientas([...clientas, response.data]);
      console.log("se creo esta clienta:", response.data)
      setError(null); // Limpiar error previo
    } catch (error) {
      const errorMessage = handleError(error);
      setError(errorMessage);
    }
  };

  const actualizarClienta = async (id, data) => {
    try {
      const response = await axios.patch(`${baseURL}/clienta/${id}`, data, 
        
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // },
      );
  
      setClientas((prevClientas) =>
        prevClientas.map((clienta) =>
          clienta.id === id ? { ...clienta, ...response.data } : clienta
        )
      );
      setError(null);
    } catch (error) {
      const errorMessage = handleError(error);
      setError(errorMessage);
    }
  };
  
  

  // Función para eliminar una clienta
  const eliminarClienta = async (id) => {
    try {
      await axios.delete(`${baseURL}/clienta/${id}`);
      setClientas((prevClientas) =>
        prevClientas.filter((clienta) => clienta.id !== id)
      );
      console.log("se elimino la clienta")
      setError(null); // Limpiar error previo
    } catch (error) {
      const errorMessage = handleError(error);
      setError(errorMessage);
      console.log("no se elimino la clienta", errorMessage)
    }
  };

  // Función para obtener una clienta por ID
  const obtenerClientaPorId = async (id) => {
    try {
      const response = await axios.get(`${baseURL}/clienta/${id}`);
      setClientaSeleccionada(response.data);
      setError(null); // Limpiar error previo
    } catch (error) {
      const errorMessage = handleError(error);
      setError(errorMessage);
    }
  };

  // Cargar datos iniciales al montar el componente
  useEffect(() => {
    fetchTurnos();
    fetchClientas();
    fetchVisitas();
    //fetchFotos();
  }, []);

  // Valores disponibles en el contexto
  const value = {
    turnos,
    clientas,
    visitas,
    fotos,
    clientaSeleccionada,
    error,
    // agregarTurno,
    fetchTurnos,
    fetchClientas,
    agregarClienta,
    actualizarClienta,
    eliminarClienta,
    obtenerClientaPorId,
  };

  return <TurnosContext.Provider value={value}>{children}</TurnosContext.Provider>;
};

// Hook personalizado para usar el contexto
export const useTurnos = () => {
  return useContext(TurnosContext);
};
