"use client";

import React from "react";

import HamburgerMenu from "./hamburger-menu";
import MainMenu from "./main-menu";

const Header = () => (
  <section>
    <MainMenu />
    <HamburgerMenu />
  </section>
);

export default Header;
