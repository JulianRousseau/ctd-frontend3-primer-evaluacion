import React, { Component } from "react";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";
import data from "../helpers/data.json";

const opcionesElegidas = [];
let contador = 1;

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

  handleClickA = () => {
    contador = contador + 1;
    if (contador >= 6) {
      alert("FIN");
    } else {
      this.setState({
        id: `${contador}a`,
        historia: data.find((e) => e.id === `${contador}a`).historia,
        opciones: data.find((e) => e.id === `${contador}a`).opciones,
        ultimaElegida: "A",
      });
    }
  };

  handleClickB = () => {
    contador = contador + 1;
    if (contador >= 6) {
      alert("FIN");
    } else {
      this.setState({
        id: `${contador}b`,
        historia: data.find((e) => e.id === `${contador}b`).historia,
        opciones: data.find((e) => e.id === `${contador}b`).opciones,
        ultimaElegida: "B",
      });
    }
  };

  render() {
    return (
      <div className="layout" key={this.state.id}>
        <h1 className="historia">{this.state.historia}</h1>
        <Opciones
          opciones={this.state.opciones}
          handleClickA={this.handleClickA}
          handleClickB={this.handleClickB}
        />
        <Recordatorio
          ultimaElegida={this.state.ultimaElegida}
          opcionesElegidas={opcionesElegidas}
        />
      </div>
    );
  }
}
