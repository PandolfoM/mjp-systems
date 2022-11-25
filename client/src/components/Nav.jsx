import { Burger, Drawer, Header, Image, useMantineTheme } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/logobig.svg";

function Nav() {
  const theme = useMantineTheme();
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
            <Link to={"/#"}>Home</Link>
          </li>
          <li>
            <Link to={"/#services"}>Our Services</Link>
          </li>
          <li>
            <Link>Client Access</Link>
          </li>
          <li>
            <Link to={"/#contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/form"}>Form</Link>
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
          title="Navigation Drawer"
          position="right"
          size={"sm"}
          padding="md"
          overlayColor={
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2]
          }
          overlayOpacity={0.55}
          overlayBlur={2}>
          <ul className="nav-mobile-links">
            <li>
              <Link to={"/#"}>Home</Link>
            </li>
            <li>
              <Link to={"/#services"}>Our Services</Link>
            </li>
            <li>
              <Link>Client Access</Link>
            </li>
            <li>
              <Link to={"/#contact"}>Contact Us</Link>
            </li>
          </ul>
        </Drawer>
      </div>
    </header>
  );
}

export default Nav;
