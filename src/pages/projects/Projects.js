import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 120px;

  @media (width <= 1730px) {
    align-items: flex-start;
  }

  @media (width <= 1200px) {
    flex-direction: column;
    align-items: center;
  }

  @media (width <= 800px) {
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

  @media (width <= 800px) {
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

const ProjectIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>project</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Combined-Shape"
          fill="#000000"
          transform="translate(64.000000, 34.346667)"
        >
          <path d="M192,7.10542736e-15 L384,110.851252 L384,332.553755 L192,443.405007 L1.42108547e-14,332.553755 L1.42108547e-14,110.851252 L192,7.10542736e-15 Z M42.666,157.654 L42.6666667,307.920144 L170.666,381.82 L170.666,231.555 L42.666,157.654 Z M341.333,157.655 L213.333,231.555 L213.333,381.82 L341.333333,307.920144 L341.333,157.655 Z M192,49.267223 L66.1333333,121.936377 L192,194.605531 L317.866667,121.936377 L192,49.267223 Z"></path>
        </g>
      </g>
    </svg>
  );
};

const cards = [
  {
    title: "Built with BOS",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt dui a penatibus laoreet dui lectus tempor sed integer.",
    icon: <ProjectIcon />,
    link: "/projects/built-with-bos",
  },
  {
    title: "BOS Native",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt dui a penatibus laoreet dui lectus tempor sed integer.",
    icon: <ProjectIcon />,
    link: "/projects/native-projects",
  },
  {
    title: "Integrated with BOS",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt dui a penatibus laoreet dui lectus tempor sed integer.",
    icon: <ProjectIcon />,
    link: "/projects/bos-integration",
  },
];

export default function Projects() {
  return (
    <Container className="container">
      <div>
        <SectionHeading>Explore Projects</SectionHeading>
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
