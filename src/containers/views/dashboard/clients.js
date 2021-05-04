// LIBS
import React from "react";
import { connect } from "react-redux";

class Clients extends React.Component {
  constructor(props) {
    super(props);
    console.log("props :>> ", props);
  }
  render(props) {
    return (
      <div>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
        <h1>Listado de Clientes</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.dashboard;
export default connect(mapStateToProps)(Clients);
