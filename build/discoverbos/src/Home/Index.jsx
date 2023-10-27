const ownerId = "discover.near";

const FontDiv = styled.div`
  font-family: "Mona Sans", sans-serif;
`;

const sections = ["Hero", "SectionSwitcher", "Projects", "Explore"];

return (
  <FontDiv>
    {sections.map((sec) => (
      <div id={sec.toLowerCase()} key={Math.random()}>
        <Widget src={`${ownerId}/widget/Home.${sec}`} />
      </div>
    ))}
  </FontDiv>
);
