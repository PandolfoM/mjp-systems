import {
  Burger,
  Drawer,
  Header,
  Image,
  useMantineTheme,
} from "@mantine/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logobig.svg";

function Nav() {
  const theme = useMantineTheme();
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <Header height={70} p="xs" pos={'fixed'}>
      <div className="nav-desktop">
        <Image width={180} src={logo} alt="MJP Systems"></Image>
        <ul className="nav-desktop-links">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>Our Services</li>
          <li>Client Access</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="nav-mobile">
        <Image width={120} src={logo} alt="MJP Systems"></Image>
        <Burger
          opened={burgerOpen}
          onClick={() => setBurgerOpen(!burgerOpen)}
          size="sm"
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
              <Link to={"/"}>Home</Link>
            </li>
            <li>Our Services</li>
            <li>Client Access</li>
            <li>Contact Us</li>
          </ul>
        </Drawer>
      </div>
    </Header>
  );
}

export default Nav;
