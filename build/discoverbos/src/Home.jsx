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
    {/* <Widget src={`${ownerId}/widget/HomeHero`} />
    <Widget src={`${ownerId}/widget/HomeWhatIsBOS`} />
    <Widget src={`${ownerId}/widget/HomeSectionSwitcher`} />
    <Widget src={`${ownerId}/widget/HomeProjects`} />
    <Widget src={`${ownerId}/widget/HomeBuilders`} />
    <Widget src={`${ownerId}/widget/HomeUpcomingEvents`} />
    <Widget src={`${ownerId}/widget/HomeExplore`} /> */}
    {sections.map((sec) => (
      <Widget src={`${ownerId}/widget/Home${sec}`} />
    ))}
  </FontDiv>
);
