import React, { useState } from "react";
import styled from "styled-components";

import EducationTutorials from "./tutorials";
import EducationWorkshops from "./Workshops";
import EducationCodeReviews from "./CodeReviews";
// import EducationOfficeHours from "./OfficeHours";

const SidebarContainer = styled.div`
  grid-column: span 1 / span 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 800px) {
    flex-direction: row;
    overflow: auto;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding: 1rem 0;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const MainContainer = styled.div`
  grid-column: 3 span / 3 span;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SidebarLinks = styled.div`
  cursor: pointer;
  flex-grow: 1;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Resources() {
  const [menu, setMenu] = useState("All");

  function Sidebar() {
    return (
      <div>
        <h3>Resources</h3>
        <SidebarContainer>
          <SidebarLinks onClick={() => setMenu("All")}>All</SidebarLinks>
          <SidebarLinks onClick={() => setMenu("Tutorials")}>
            Tutorials
          </SidebarLinks>
          <SidebarLinks onClick={() => setMenu("Code Reviews")}>
            Code Reviews
          </SidebarLinks>
          <SidebarLinks onClick={() => setMenu("Workshops")}>
            Workshops
          </SidebarLinks>
          {/* <SidebarLinks onClick={() => setMenu("Office Hours")}>
            Office Hours
          </SidebarLinks> */}
        </SidebarContainer>
      </div>
    );
  }

  const Education = () => {
    switch (menu) {
      case "Tutorials":
        return <EducationTutorials />;
      case "Code Reviews":
        return <EducationCodeReviews />;
      case "Workshops":
        return <EducationWorkshops />;
      // case "Office Hours":
      //   return <EducationOfficeHours />;
      default:
        return (
          <>
            <EducationTutorials />
            <EducationCodeReviews />
            <EducationWorkshops />
            {/* <EducationOfficeHours /> */}
          </>
        );
    }
  };
  return (
    <Container>
      <Sidebar />
      <MainContainer>
        <Education />
      </MainContainer>
    </Container>
  );
}
