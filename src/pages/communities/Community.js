import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 120px;

  @media screen and (max-width: 1730px) {
    align-items: flex-start;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 800px) {
    padding: 60px 1rem;
    gap: 40px;
  }
`;

const SectionHeading = styled.h2`
  color: #1b1b18;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 103.5%; /* 49.68px */
  margin-bottom: 40px;

  @media screen and (max-width: 800px) {
    color: #1b1b18;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 103.5%; /* 33.12px */
  }
`;

const ExploreCard = ({ title, description, icon, link }) => {
  const Title = styled.p`
    color: #1b1b18;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120.5%; /* 28.92px */
    margin: 0;
  `;

  const Description = styled.p`
    color: #1b1b18;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120.5%; /* 19.28px */
    margin: 0;
  `;

  const Card = styled.a`
    border-radius: 8px;
    transition: all 300ms;
    cursor: pointer;
    &:hover {
      background: #eee8dd;
      text-decoration: none;
      svg {
        transition: all 300ms;
        filter: invert(42%) sepia(97%) saturate(649%) hue-rotate(117deg)
          brightness(97%) contrast(98%);
      }
    }
  `;

  return (
    <Card href={link} className="d-flex p-3 gap-3" style={{ maxWidth: "475" }}>
      <div>{icon}</div>
      <div>
        <Title className="mb-3">{title}</Title>
        <Description>{description}</Description>
      </div>
    </Card>
  );
};

const CommunityIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000"
      className="bi bi-people"
      viewBox="0 0 16 16"
    >
      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
    </svg>
  );
};

const cards = [
  {
    title: "Developer Communities",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt dui a penatibus laoreet dui lectus tempor sed integer.",
    icon: <CommunityIcon />,
    link: "/communities/developer",
  },
  {
    title: "Project Communities",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt dui a penatibus laoreet dui lectus tempor sed integer.",
    icon: <CommunityIcon />,
    link: "/communities/project",
  },
  {
    title: "Regional Communities",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt dui a penatibus laoreet dui lectus tempor sed integer.",
    icon: <CommunityIcon />,
    link: "/communities/regional",
  },
  {
    title: "General BOS Communities",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt dui a penatibus laoreet dui lectus tempor sed integer.",
    icon: <CommunityIcon />,
    link: "/communities/general-bos",
  },
];

export default function Community() {
  return (
    <Container className="container">
      <div>
        <SectionHeading>Explore Communities</SectionHeading>
        <div
          className="d-flex flex-wrap align-items-center"
          style={{ gap: 40 }}
        >
          {cards.map((card) => (
            <ExploreCard
              title={card.title}
              description={card.description}
              icon={card.icon}
              link={card.link}
              key={`Opportunity-${Math.random()}`}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
