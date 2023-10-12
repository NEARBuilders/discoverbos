const data = props.data;
const { title, description, cta, ctaIcon, ctaLink, relatedLinks, background } =
  data;

const openState = data.open || false;
const mobileState = data.mobile || false;

State.init({
  open: openState,
});

const Switcher = props.switcher;
const MobileSwitcher = props.mobileSwitcher;

const SectionPill = ({ name }) => {
  const PillContainer = styled.div`
    display: flex;
    width: min-content;
    padding: 0.5rem 0.75rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    border-radius: 1rem;
    background: #d6feef;
  `;

  const SectionName = styled.p`
    color: #1b1b18;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 2px;
    padding: 0;
  `;

  return (
    <PillContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <circle cx="8" cy="8.11414" r="8" fill="url(#paint0_linear_205_1217)" />
        <defs>
          <linearGradient
            id="paint0_linear_205_1217"
            x1="8"
            y1="0.114136"
            x2="8"
            y2="16.1141"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#03B172" />
            <stop offset="1" stopColor="#05EB97" />
          </linearGradient>
        </defs>
      </svg>
      <SectionName>{name}</SectionName>
    </PillContainer>
  );
};

const SectionDetial = ({ text }) => {
  const Details = styled.p`
    color: #767676;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  `;

  return <Details>{text}</Details>;
};

const SectionHeading = ({ title }) => {
  const Heading = styled.h2`
    display: flex;
    color: #1b1b18;
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 103.5%; /* 49.68px */
  `;

  const Span = styled.span`
    color: #03b172;
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 103.5%;
  `;

  return (
    <Heading>
      {title}
      <Span>BOS</Span>
    </Heading>
  );
};

const SectionInfo = ({ info }) => {
  const Info = styled.p`
    max-width: 771px;
    color: #1b1b18;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120.5%; /* 19.28px */
  `;

  return <Info>{info}</Info>;
};

const Related = styled.p`
  color: #1b1b18;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 120.5%; /* 18.075px */
`;

const Links = styled.a`
  color: #306cfe;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 120.5%; /* 18.075px */
`;

const CTA = styled.a`
  width: max-content;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: white;
  font-weight: 500;
  border-radius: 3px;
  background: #03b172;
  border: none;
  outline: none;

  &:hover {
    text-decoration: none;
    color: white;
    background: #028656;
  }

  &:active {
    border: none;
    outline: none;
  }
`;

const RelatedLinks = ({ relatedLinks }) => {
  const Container = styled.div`
    @media screen and (max-width: 800px) {
      margin-bottom: 24px;
    }
  `;
  return (
    <Container
      style={{ marginTop: "40px" }}
      className="d-flex flex-column gap-2"
    >
      <Related className="m-0">Related</Related>
      {relatedLinks.map((link) => (
        <div style={{ fontSize: 15 }} key={`${link.name}-${Math.random()}`}>
          <Links href={link.href}>{link.name}</Links> {link.details}
        </div>
      ))}
    </Container>
  );
};

const HomeSection = () => {
  const SectionContainer = styled.div`
    padding: 100px 120px;
    display: flex;
    flex-direction: ${!background ? "row-reverse" : "row"};
    align-items: center;
    justify-content: center;
    gap: 120px;
    background: ${background === "colored" ? "#F4FDFA" : "white"};
    width: 100%;

    @media screen and (max-width: 800px) {
      padding: 0;
      display: block;
    }
  `;

  const Mobile = styled.div`
    &.selected-index {
      svg {
        filter: invert(42%) sepia(97%) saturate(649%) hue-rotate(117deg)
          brightness(97%) contrast(98%);
      }

      i {
        transform: rotate(180deg);
      }
    }
  `;

  return (
    <SectionContainer key={Math.random()}>
      <div style={{ flex: 1, width: "100%" }}>
        {MobileSwitcher && (
          <Mobile
            className={`${state.open && "selected-index"}`}
            style={{
              marginBottom: 24,
              border: `${state.open ? "1px solid #03b071" : ""}`,
              borderRadius: 8,
            }}
            key={Math.random()}
            onClick={() => State.update({ open: !state.open })}
          >
            <MobileSwitcher key={Math.random()} />
          </Mobile>
        )}
        <div
          className={`${state.open ? "d-flex" : "d-none"} flex-column`}
          style={{ gap: "20px" }}
        >
          <SectionPill name={title} />
          <SectionHeading title={title} />
          <SectionInfo info={description} />
          <CTA href={ctaLink}>
            {ctaIcon} {cta}
          </CTA>
        </div>
        {(!mobileState || state.open) && (
          <RelatedLinks relatedLinks={relatedLinks} />
        )}
      </div>
      {Switcher && (
        <div>
          <Switcher />
        </div>
      )}
    </SectionContainer>
  );
};

return <HomeSection />;
