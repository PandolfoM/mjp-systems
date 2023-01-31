import { Burger, Drawer } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/logobig.svg";
import Auth from "../utils/Auth";
import { useNavigate } from "react-router-dom";

function Nav(props) {
  const navigate = useNavigate();
  const { setIsClientModalOpen } = props;
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <header
      className={scroll.y >= 100 ? "nav-container-scrolled" : "nav-container"}>
      <div className="nav-desktop">
        <Link to={"/#"} className="img">
          <img src={logo} alt="MJP Systems"></img>
        </Link>
        <ul className="nav-desktop-links">
          <li>
            <Link smooth to={"/#"}>
              Home
            </Link>
          </li>
          <li>
            <Link smooth to={"/#benefits"}>
              Services
            </Link>
          </li>
          <li>
            <Link smooth to={"/#contact"}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link smooth to={"/form"}>
              Form
            </Link>
          </li>
          <li>
            <a
              onClick={() =>
                Auth.loggedIn()
                  ? navigate("/dashboard", { replace: true })
                  : setIsClientModalOpen(true)
              }>
              Client Access
            </a>
          </li>
        </ul>
      </div>

      <div className="nav-mobile">
        <img src={logo} alt="MJP Systems"></img>
        <Burger
          opened={burgerOpen}
          onClick={() => setBurgerOpen(!burgerOpen)}
          size="md"
          title={burgerOpen ? "Close Navigation" : "Open Navigation"}
        />
        <Drawer
          opened={burgerOpen}
          onClose={() => setBurgerOpen(false)}
          title="Navigation"
          position="right"
          size={"sm"}
          padding="md">
          <ul className="nav-mobile-links">
            <li>
              <Link smooth to={"/#"}>
                Home
              </Link>
            </li>
            <li>
              <Link smooth to={"/#benefits"}>
                Services
              </Link>
            </li>
            <li>
              <Link smooth to={"/#contact"}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link smooth to={"/form"}>
                Form
              </Link>
            </li>
            <li>
              <a
                onClick={() =>
                  Auth.loggedIn()
                    ? navigate("/dashboard", { replace: true })
                    : setIsClientModalOpen(true)
                }>
                Client Access
              </a>
            </li>
          </ul>
        </Drawer>
      </div>
    </header>
  );
}

export default Nav;
