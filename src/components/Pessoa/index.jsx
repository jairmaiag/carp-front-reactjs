import React, { Component } from "react";
import { Table } from "react-materialize";
import api from "../../services/api";

export default class Pessoa extends Component {
  state = {
    pessoas: [],
  };
  componentDidMount() {
    this.loadPessoa();
  }
  loadPessoa = async () => {
    const resposta = await api.get("/pessoa");
    console.log(resposta);
    this.setState({ pessoas: resposta.data });
  };
  render() {
    const { pessoas } = this.state;
    return (
      <div className="container">
        <div className="card white darken-1">
          <div className="card-content">
            <span className="card-title">Pessoa</span>
            <Table className="highlight responsive-table z-depth-2">
              <thead className="white blue-grey lighten-3">
                <tr>
                  <th data-field="id">Id</th>
                  <th data-field="name">Nome completo</th>
                </tr>
              </thead>
              <tbody>
                {pessoas.map((pessoa) => (
                  <tr key={pessoa.id}>
                    <td>
                      <a href={`/pessoa/${pessoa.id}`}>{pessoa.id}</a>
                    </td>
                    <td>
                      <a href={`/pessoa/${pessoa.id}`}>
                        {pessoa.nome} {pessoa.nomemeio} {pessoa.sobrenome}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
