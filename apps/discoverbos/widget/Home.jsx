const ownerId = "discover.near";

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
      <Widget src={`${ownerId}/widget/Home${sec}`} />
    ))}
  </FontDiv>
);
