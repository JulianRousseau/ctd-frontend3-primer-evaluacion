import React, { Component } from "react";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";
import data from "../helpers/data.json";

const opcionesElegidas = [];
let contador = 1;
let op = "";

export default class Layout extends Component {
  state = {
    id: data[0].id,
    historia: data[0].historia,
    opciones: data[0].opciones,
    ultimaElegida: "",
  };

  componentDidMount() {
    console.log("El componente se monto en el DOM");
  }

  componentDidUpdate() {
    console.log("El estado o las props de componente cambiaron");
    opcionesElegidas.push(this.state.ultimaElegida);
  }

  handleClick = (evento) => {
    op = evento.target.id === "A" ? "a" : "b";
    contador = contador + 1;
    if (contador >= 6) {
      alert("FIN");
    } else {
      this.setState({
        id: `${contador}${op}`,
        historia: data.find((e) => e.id === `${contador}${op}`).historia,
        opciones: data.find((e) => e.id === `${contador}${op}`).opciones,
        ultimaElegida: evento.target.id,
      });
    }
  };

  render() {
    return (
      <div className="layout" key={this.state.id}>
        <h1 className="historia">{this.state.historia}</h1>
        <Opciones
          opciones={this.state.opciones}
          handleClick={this.handleClick}
        />
        <Recordatorio
          ultimaElegida={this.state.ultimaElegida}
          opcionesElegidas={opcionesElegidas}
        />
      </div>
    );
  }
}
