import React from "react";
// import Header from "../header/Header";
import Navbar from "../header/Navbar";
import Footer from "./Footer";
import styled from "styled-components";

export default function RootLayout(props) {
  const Container = styled.div`
    margin-top: 92px;

    @media (width <= 800px) {
      margin-top: 52px;
    }
  `;
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Navbar />
      <Container className="flex-grow-1">
        <div style={{ maxWidth: "100%" }}>{props.children}</div>
      </Container>
      <Footer />
    </div>
  );
}
