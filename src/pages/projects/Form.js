import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import CreatableSelect from "react-select/creatable";
import { Widget } from "near-social-vm";
import { useBosLoaderStore } from "../../stores/bos-loader";

const verticalOptions = [
  { value: "DeSci", label: "DeSci" },
  { value: "DeFi", label: "DeFi" },
  { value: "Gaming", label: "Gaming" },
  { value: "Metaverse", label: "Metaverse" },
  { value: "Commercial", label: "Commercial" },
  { value: "Sports and Entertainment", label: "Sports and Entertainment" },
  { value: "Infrastructure", label: "Infrastructure" },
  { value: "Social", label: "Social" },
  { value: "Social Impact", label: "Social Impact" },
  { value: "Creative", label: "Creative" },
  { value: "Education", label: "Education" },
];

const productTypeOptions = [
  { value: "DAO", label: "DAO" },
  { value: "NFT", label: "NFT" },
  { value: "AI", label: "AI" },
  { value: "Tooling", label: "Tooling" },
];

const integrationWithNearOptions = [
  { value: "Native", label: "Native" },
  { value: "Multichain", label: "Multichain" },
  { value: "Not yet but interested", label: "Not yet but interested" },
  { value: "No", label: "No" },
];

const developmentPhaseOptions = [
  { value: "Idea Stage", label: "Idea Stage" },
  { value: "Testnet Launched", label: "Testnet Launched" },
  { value: "Mainnet Launched", label: "Mainnet Launched" },
  { value: "Scaling Startup", label: "Scaling Startup" },
  { value: "Established Business", label: "Established Business" },
];

const distributionModelOptions = [
  { value: "Open Source", label: "Open Source" },
  { value: "Partial", label: "Partial" },
  { value: "Proprietry", label: "Proprietry" },
];

export default function ProjectsForm() {

  const redirectMapStore = useBosLoaderStore(); // We need this in order to run Widgets from local

  const [validated, setValidated] = useState(false);

  // form state values
  const [projectName, setProjectName] = useState("");
  const [projectAccount, setProjectAccount] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [teamSize, setTeamSize] = useState();
  const [location, setLocation] = useState("");

  // form validation
  const [nameValidation, setNameValidation] = useState(false);
  const [accountValidation, setAccountValidation] = useState(false);

  useEffect(() => {
    setNameValidation(projectName.length >= 2);
  }, [projectName]);

  useEffect(() => {
    setAccountValidation(projectAccount.endsWith(".near"));
  }, [projectAccount]);

  // select values
  const [selectedVerticals, setSelectedVerticals] = useState([]);
  const [selectedProductType, setSelectedProductType] = useState(null);
  const [selectedNearIntegration, setSelectedNearIntegration] = useState(null);
  const [selectedDevelopmentPhase, setSelectedDevelopmentPhase] =
    useState(null);
  const [selectedDistrubutionModal, setSelectedDistrubutionModal] =
    useState(null);

  // select validations
  const [verticalsValidation, setVerticalsValidation] = useState(false);
  const [productTypeValidation, setProductTypeValidation] = useState(false);
  const [nearIntegrationValidation, setNearIntegrationValidation] =
    useState(false);
  const [developmentPhaseValidation, setDevelopmentPhaseValidation] =
    useState(false);
  const [distributionModelValidation, setDistributionModelValidation] =
    useState(false);

  // validate select
  useEffect(() => {
    setVerticalsValidation(selectedVerticals.length === 0 ? false : true);
  }, [selectedVerticals]);

  useEffect(() => {
    setProductTypeValidation(selectedProductType === null ? false : true);
  }, [selectedProductType]);

  useEffect(() => {
    setNearIntegrationValidation(
      selectedNearIntegration === null ? false : true
    );
  }, [selectedNearIntegration]);

  useEffect(() => {
    setDevelopmentPhaseValidation(
      selectedDevelopmentPhase === null ? false : true
    );
  }, [selectedDevelopmentPhase]);

  useEffect(() => {
    setDistributionModelValidation(
      selectedDistrubutionModal === null ? false : true
    );
  }, [selectedDistrubutionModal]);


  
const validateForm = () => {
  setValidated(true);
  return (
    nameValidation &&
    accountValidation &&
    verticalsValidation &&
    productTypeValidation &&
    nearIntegrationValidation &&
    developmentPhaseValidation &&
    distributionModelValidation
  );
};

  return (
    <main className="container pt-3">
      <h2 style={{ textAlign: "center" }} className="mb-3">
        Submit New Project
      </h2>
      <div>
        <Form noValidate validated={validated}>
          <Form.Group className="mb-3" controlId="projectName">
            <Form.Label>Project Name *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter project name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
            {!nameValidation && (
              <Form.Text>
                Project Name should be greater than 2 characters
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="projectAccount">
            <Form.Label>Your project&apos; NEAR Account *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter NEAR Account ID of your project (like discover.near)"
              value={projectAccount}
              onChange={(e) => setProjectAccount(e.target.value)}
            />
            {!accountValidation && (
              <Form.Text>Account ID must end with &apos;.near&apos;</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="verticals">
            <Form.Label>Verticals *</Form.Label>
            <CreatableSelect
              className="mb-3"
              isMulti
              options={verticalOptions}
              value={selectedVerticals}
              onChange={setSelectedVerticals}
              required={true}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="productType">
            <Form.Label>Product Type *</Form.Label>
            <CreatableSelect
              className="mb-3"
              options={productTypeOptions}
              value={selectedProductType}
              onChange={setSelectedProductType}
              required={true}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="nearIntegration">
            <Form.Label>Integration with NEAR *</Form.Label>
            <CreatableSelect
              className="mb-3"
              options={integrationWithNearOptions}
              value={selectedNearIntegration}
              onChange={setSelectedNearIntegration}
              required={true}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="developmentPhase">
            <Form.Label>Development Phase *</Form.Label>
            <CreatableSelect
              className="mb-3"
              options={developmentPhaseOptions}
              value={selectedDevelopmentPhase}
              onChange={setSelectedDevelopmentPhase}
              required={true}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="tagline">
            <Form.Label>Tagline</Form.Label>
            <Form.Control
              type="text"
              placeholder="Write one liner about your project"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Give a short description of your project"
              value={description}
              as={"textarea"}
              rows={5}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="distrubutionModal">
            <Form.Label>
              What is your project&apos;s distrubution modal? *
            </Form.Label>
            <CreatableSelect
              className="mb-3"
              options={distributionModelOptions}
              value={selectedDistrubutionModal}
              onChange={setSelectedDistrubutionModal}
              required={true}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="website">
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="text"
              placeholder="Website URL (like discoverbos.org)"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="teamSize">
            <Form.Label>Team Size</Form.Label>
            <Form.Control
              type="number"
              placeholder="10"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="San Francisco, CA"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>
          <Widget
              src="discover.near/widget/Project.SubmitButton"
              config={{
                redirectMap: redirectMapStore.redirectMap,
              }}
              props={{
                data: {
                  name: projectName,
                  accountId: projectAccount,
                  verticals: selectedVerticals,
                  productType: selectedProductType,
                  nearIntegration: selectedNearIntegration,
                  developmentPhase: selectedDevelopmentPhase,
                  tagline: tagline,
                  description: description,
                  distributionModal: selectedDistrubutionModal,
                  website: website,
                  teamSize: teamSize,
                  location: location,
                },
                validateForm,
              }}
            />
        </Form>
      </div>
    </main>
  );
}
