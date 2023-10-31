const Container = styled.div`
  padding: 100px 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    gap: 20px;

    padding: 40px 16px;
  }
`;

const BoldWord = styled.span`
  font-weight: 700;
`;

const Heading = styled.h2`
  max-width: 628px;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  font-style: normal;
  line-height: 103.5%; /* 49.68px */

  @media screen and (max-width: 800px) {
    font-size: 30px;
  }
`;

const MainDiv = styled.div`
  @media screen and (max-width: 800px) {
    min-width: auto !important;
    max-width: 100% !important;
    margin-right: 0 !important;
  }
`;

const MainImage = styled.img`
  @media screen and (max-width: 800px) {
    margin-right: auto;
  }
`;

const HeroSection = () => {
  return (
    <div style={{ background: "#03B172" }}>
      <Container>
        <MainDiv
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: "max-content",
            maxWidth: "65%",
            width: "100%",
            marginRight: "5%",
          }}
        >
          <Heading>
            <BoldWord>Discover</BoldWord> • <BoldWord>Explore</BoldWord> •{" "}
            <BoldWord>Connect</BoldWord> • <BoldWord>Learn</BoldWord> about the
            World of <BoldWord>BOS</BoldWord>
          </Heading>
        </MainDiv>
        <MainImage
          src="/images/hero-image.png"
          style={{ width: "30%", objectFit: "cover" }}
        />
      </Container>
    </div>
  );
};

return <HeroSection />;
