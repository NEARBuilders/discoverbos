State.init({
  searchTerm: "",
});

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

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1.5px solid #1d8e65;
  background: white;
  overflow: hidden;
`;

const Input = styled.input`
  flex: 1;
  padding: 13px;
  border: none;
  outline: none;
  border-radius: 0;

  &::placeholder {
    color: #9ba1a5;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 1; /* Firefox */
  }

  &::-ms-input-placeholder {
    /* Edge 12 -18 */
    color: #9ba1a5;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const Button = styled.a`
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  color: white;
  background: #1b1b18;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #000000;
    color: white;
    text-decoration: none;
  }

  &:active {
    outline: none;
    border: none;
  }
`;

const CategoryItem = ({ name }) => {
  const Pill = styled.span`
    border-radius: 50rem;
    font-size: 1rem;
    font-weight: 400;
    padding: 2px 1rem;
    border: 1px solid #dcdcdc;
    cursor: pointer;
    background: #fff;
    color: #03b172;

    transition: all 300ms;

    &:hover {
      color: #fff;
      background: #03b172;
    }
  `;
  return <Pill>{name}</Pill>;
};

const InfoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      style={{ cursor: "pointer" }}
    >
      <path
        d="M9.99999 1.78708C14.6033 1.78708 18.335 5.51875 18.335 10.1221C18.335 14.7246 14.6033 18.4554 9.99999 18.4554C5.39666 18.4562 1.66666 14.7246 1.66666 10.1221C1.66582 5.51875 5.39666 1.78708 9.99999 1.78708ZM9.99666 8.66208C9.79243 8.66236 9.59542 8.73762 9.44303 8.87357C9.29064 9.00953 9.19348 9.19671 9.16999 9.39958L9.16416 9.49625L9.16749 14.0812L9.17249 14.1779C9.19578 14.3812 9.29302 14.5688 9.4457 14.7049C9.59838 14.8411 9.79582 14.9164 10.0004 14.9164C10.205 14.9164 10.4024 14.8411 10.5551 14.7049C10.7078 14.5688 10.805 14.3812 10.8283 14.1779L10.8333 14.0804L10.83 9.49541L10.8242 9.39791C10.8001 9.19521 10.7024 9.0084 10.5497 8.87292C10.3971 8.73744 10.2 8.66271 9.99582 8.66291L9.99666 8.66208ZM10.0008 5.53791C9.72423 5.53791 9.45895 5.64779 9.26337 5.84338C9.06778 6.03896 8.95791 6.30423 8.95791 6.58083C8.95791 6.85743 9.06778 7.1227 9.26337 7.31828C9.45895 7.51387 9.72423 7.62375 10.0008 7.62375C10.1377 7.62369 10.2733 7.59667 10.3997 7.54423C10.5262 7.49179 10.6411 7.41495 10.7379 7.31811C10.8346 7.22127 10.9114 7.10631 10.9637 6.97981C11.0161 6.8533 11.043 6.71773 11.0429 6.58083C11.0429 6.44393 11.0158 6.30837 10.9634 6.18191C10.911 6.05545 10.8341 5.94056 10.7373 5.84379C10.6404 5.74703 10.5255 5.67028 10.399 5.61794C10.2725 5.5656 10.1369 5.53869 9.99999 5.53875L10.0008 5.53791Z"
        fill="white"
      />
    </svg>
  );
};

const CategoriesContainer = styled.div`
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 1rem;
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
            <BoldWord>Discover</BoldWord>, your future on the{" "}
            <BoldWord>BOS</BoldWord>
          </Heading>
          <div style={{ marginTop: "40px" }}>
            <InputContainer className="input-group">
              <Input
                className="form-control"
                type="text"
                value={state.searchTerm}
                onChange={(e) => State.update({ searchTerm: e.target.value })}
                onSubmit={() => (window.location.href = searchTerm)}
                placeholder="Discover"
              />
              <Button
                href={`/discover.near/widget/Search?term=${state.searchTerm}`}
              >
                <i className="bi bi-search"></i>
              </Button>
            </InputContainer>
            <CategoriesContainer
              className="d-flex align-items-center"
              style={{
                color: "white",
                fontWeight: 500,
                fontSize: "1rem",
                marginTop: "24px",
              }}
            >
              <p className="m-0 me-2">Categories: </p>
              <div className="d-flex gap-2 align-items-center flex-wrap">
                <CategoryItem name="Thing" />
                <CategoryItem name="Type" />
                <CategoryItem name="Widget" />
                <CategoryItem name="Components" />
                <CategoryItem name="Projects" />

                <OverlayTrigger
                  key={"bottom"}
                  placement={"bottom"}
                  overlay={
                    <Tooltip id={"tooltip-bottom"}>
                      <div
                        className="d-flex flex-column gap-1"
                        style={{ textAlign: "left" }}
                      >
                        <p className="m-0">
                          <strong>Categories</strong>
                          <br />
                          Description about categories. <br />
                          Description categories.
                        </p>{" "}
                        <a href="#">Learn More</a>
                      </div>
                    </Tooltip>
                  }
                >
                  <InfoIcon />
                </OverlayTrigger>
              </div>
            </CategoriesContainer>
          </div>
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
