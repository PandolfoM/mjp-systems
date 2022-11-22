import { Header, Image } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logobig.svg";
import "./style.sass";

function Nav() {
  return (
    <Header height={70} p="xs">
      <div className="nav">
        <Image width={180} src={logo} alt="MJP Systems"></Image>
        <ul className="nav-links">
          <li><Link to={'/'}>Home</Link></li>
          <li>Our Services</li>
          <li>Client Access</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </Header>
  );
}

export default Nav;
