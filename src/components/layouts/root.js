import React from "react";
// import Header from "../header/Header";
import Navbar from "../header/Navbar";
import Footer from "./Footer";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 92px;

  @media (width <= 800px) {
    margin-top: 52px;
  }
`;

export default function RootLayout(props) {
  return (
    <>
      <Navbar />
      <main>
        <Container className="flex-grow-1">
          <div style={{ maxWidth: "100%" }}>{props.children}</div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
