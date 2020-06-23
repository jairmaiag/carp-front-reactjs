import React, { Component } from "react";
import M from "materialize-css";
import { Navbar, NavItem, Dropdown, Divider, Icon } from "react-materialize";

export default class Menu extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="container">
        <Navbar
          alignLinks="left"
          brand={
            <a className="brand-logo" href="/">
              Logo
            </a>
          }
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true,
          }}
        >
          <NavItem href="/orcamento">Orçamento</NavItem>
          <NavItem href="/ordem">Ordens</NavItem>
          <Dropdown
            id="Dropdown_6"
            options={{
              alignment: "left",
              autoTrigger: true,
              closeOnClick: false,
              constrainWidth: true,
              container: null,
              coverTrigger: true,
              hover: true,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250,
            }}
            trigger={
              <a href="#!">
                Tabelas <Icon right>arrow_drop_down</Icon>
              </a>
            }
          >
            <a href="/usuario">Usuário</a>
            <a href="/cliente">Cliente</a>
            <Divider />
            <a href="/pessoa">Pessoa</a>
          </Dropdown>
        </Navbar>
      </div>
    );
  }
}
