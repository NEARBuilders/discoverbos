const FontDiv = styled.div`
  font-family: "Mona Sans", sans-serif;
`;

const sections = [
  "Hero",
  "WhatIsBOS",
  "SectionSwitcher",
  "Projects",
  "Builders",
  "UpcomingEvents",
  "Explore",
];

return (
  <FontDiv>
    {sections.map((sec) => (
      <div id={sec.toLowerCase()} key={Math.random()}>
        <Widget src={`/*__@creatorAccount__*//widget/Home.${sec}`} />
      </div>
    ))}
  </FontDiv>
);
