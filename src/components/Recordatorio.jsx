import React from "react";

const Recordatorio = ({ ultimaElegida, opcionesElegidas }) => {
  return (
    <div className="recordatorio">
      <h3>Selección anterior: {ultimaElegida}</h3>
      <h4>Historial de opciones elegidas:</h4>
      <ul>
        {opcionesElegidas.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recordatorio;
