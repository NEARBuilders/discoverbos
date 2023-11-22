State.init({
  projectsIndex: 0,
  mobileIndex: 0,
});

const projectsData = [
  {
    key: 1,
    name: "NEAR Social",
    url: "https://near.social",
    image:
      "https://ipfs.near.social/ipfs/bafybeiewpf55q4ubml3cnbqdu62kamwyph2z4qqaiupz5md7ydlh4ghwwq",
    description:
      "Social Data Protocol On NEAR. The first gateway. Built in social features like custom domains, reports, link previews + more!",
    category: ["NEAR", "EVM", "Social"],
    deploy:
      "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnearsocial%2Fviewer&build-command=npm%20run%20build&install-command=npm%20--force%20install&output-directory=dist",
    github: "https://github.com/NEARSocial/viewer",
  },
  {
    key: 2,
    name: "NEAR",
    url: "https://near.org",
    image:
      "https://ipfs.near.social/ipfs/bafkreifv5wmqng43g3la2mgwenyhcuzp6g5grnp4ucrwqaciz2ibpqfdgi",
    description:
      "A new category that enables visionaries, builders, and believers to deliver on the promise of the Open Web. Built in EVM, FastAuth w/ Metatransactions",
    category: ["NEAR", "EVM", "Social"],
    deploy: null,
    github: "https://github.com/near/near-discovery",
  },
  {
    key: 2,
    name: "Mantle Gateway",
    url: "https://bos.fusionx.finance/",
    image:
      "https://ipfs.near.social/ipfs/bafybeiczyp75wbo73m45jwgntr6bkma2rhe6vjem3vac74vurlzu4533u4",
    description: "A Mantle gateway featuring top DeFi Apps on Mantle network",
    category: ["DeFi", "EVM", "Mantle"],
    deploy:
      "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fneardefi%mantle-bos-gateway&build-command=pnpm%20run%20build&env=NEXT_PUBLIC_NETWORK_ID,NEXT_PUBLIC_HOSTNAME&envDescription=mainnet-near.org&envLink=https%3A%2F%2Fgithub.com%2FNearDeFi%2Fmantle-bos-gateway%2Fblob%2Fmain%2F.env.example",
    github: "https://github.com/NearDeFi/mantle-bos-gateway",
  },
  {
    key: 2,
    name: "zkEVM Gateway",
    url: "https://bos.quickswap.exchange",
    image:
      "https://ipfs.near.social/ipfs/bafkreifihbw7snvqkkhmicbr7x7jevtnw6mtvln4wlgmuq6jnhy4netyke",
    description:
      "A zkEVM by Quickswap featuring PancakeSwap, Quickswap, Gamma, and Balancer. ",
    category: ["DeFi", "EVM", "zkEVM"],
    deploy:
      "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fneardefi%2Fpolygon-bos-gateway&build-command=pnpm%20run%20build&env=NEXT_PUBLIC_NETWORK_ID,NEXT_PUBLIC_HOSTNAME&envDescription=mainnet-near.org&envLink=https%3A%2F%2Fgithub.com%2FNearDeFi%2Fpolygon-bos-gateway%2Fblob%2Fmain%2F.env.example",
    github: "https://github.com/NearDeFi/polygon-bos-gateway",
  },
  {
    key: 5,
    name: "DiscoverBOS",
    url: "https://discoverBOS.org/",
    image:
      "https://ipfs.near.social/ipfs/bafkreibvkbftan5qp7z3bfhhug4wyylv4jqusagxghaay23ur6h55pxr6a",
    description: "Discover • Explore • Connect • Learn about the World of BOS",
    category: ["NEAR", "Ecosystem"],
    deploy: null,
    github: "https://github.com/NEARBuilders/discoverbos",
  },
  {
    key: 5,
    name: "Calimero Chat",
    url: "https://portal.calimero.network/",
    image:
      "https://ipfs.near.social/ipfs/bafkreid3dxlktgfofh5quqozhpjodbcwz35tr7mmfym324qckssaizqkgy",
    description: "Decentralized slack on Calimero's community shard",
    category: ["Chat", "Social", "NEAR"],
    deploy: null,
    github: null,
  },
  {
    key: 5,
    name: "Coin98 dApp Store",
    url: "https://dapps.coin98.com/menu/bos",
    image:
      "https://ipfs.near.social/ipfs/bafkreif2drapmwrnkuesydwvs33oalc5znw3zfhhmccicrsh5fz3ndumg4",
    description:
      "r dapp store offers hassle-free interaction with the most exciting L2s in the market.",
    category: ["DeFi", "EVM"],
    deploy: null,
    github: null,
  },
  {
    key: 5,
    name: "DapDap",
    url: "https://alpha.dapdap.net/",
    image:
      "https://ipfs.near.social/ipfs/bafkreienulavlellluopn6eq7432xjeczfajvdjkdvnsvvsdz52ekodkdm",
    description: "Your universal entry point to L2s. All of DeFi in one stop.",
    category: ["DeFi", "EVM"],
    deploy: null,
    github: null,
  },
  {
    key: 5,
    name: "Jutsu.ai",
    url: "https://jutsu.ai/",
    image:
      "https://ipfs.near.social/ipfs/bafkreibihmmux4uch7tmbf3k5zgbkapacronaamhmsyqb6g6nmem2tgnwy",
    description:
      "A gateway dedicated to developers. Switch between testnet, built in tutorials, easily estimate storage costs, and collaborate live",
    category: ["Dev", "EVM"],
    deploy: null,
    github: null,
  },
  {
    key: 5,
    name: "Flipside Crypto",
    url: "https://bos.flipsidecrypto.xyz/",
    image:
      "https://ipfs.near.social/ipfs/bafkreiefoqklm6c6wl4gvzwdyrlu5sulatidglz5le2gjwdrfr3hjtiyay",
    description: "Data analytics gateways",
    category: ["Data", "NEAR"],
    deploy: null,
    github: "https://github.com/FlipsideCrypto/near-bos-gateway",
  },
  {
    key: 5,
    name: "NDC",
    url: "https://app.neardc.org/",
    image:
      "https://ipfs.near.social/ipfs/bafkreifjozsyr2bmgth3holokwxv5uwzlhm5fggqozwznwyze46lexe4xy",
    description:
      "The NDC is a Grassroots Movement, led by the NEAR Community to create Decentralized Web 3.0 Governance on NEAR.",
    category: ["Social", "NEAR"],
    deploy:
      "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcodingshot%2Fneardc-gateway&build-command=npm%20run%20build&install-command=npm%20--force%20install&output-directory=dist",
    github: "https://github.com/codingshot/neardc-gateway",
  },
  {
    key: 5,
    name: "BuildDAO",
    url: "https://nearbuilders.org/",
    image:
      "https://ipfs.near.social/ipfs/bafybeiesuksvxvmsuv4cjqe4xb42zufidgarw6otdvpc7xxn6pd7kc4f6u",
    description: "Empowering builders for a multichain ecosystem",
    category: ["Social", "NEAR"],
    deploy: null,
    github: null,
  },
  {
    key: 4,
    name: "NEAR Atlas",
    url: "https://nearatlas.com/",
    image:
      "https://ipfs.near.social/ipfs/bafkreid4rcvq5gqjwydwsxkpgp3mpwddwsyoqrezzjd7kizfb3naonkx44",
    description:
      "A viewer for NEAR Analytics powered by the Flipside Crypto API built by the NEAR Foundation",
    category: ["NEAR", "Data"],
    deploy: null,
    github: null,
  },
  {
    key: 10,
    name: "ShardDog Social",
    url: "https://sharddog.social/",
    image:
      "https://ipfs.near.social/ipfs/bafkreibjlc2hyxfve55gp2fg6lojf6eliptgiiawprhbg4dyc2wbpzy7tm",
    description: "Token gated rich media supported social feeds",
    category: ["NEAR", "Social", "NFT"],
    deploy:
      "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjoe-rlo%2FNearSocial-viewer&build-command=npm%20run%20build&install-command=npm%20--force%20install&output-directory=dist",
    github: "https://github.com/joe-rlo/NearSocial-viewer",
  },
  {
    key: 3,
    name: "Cantopia",
    url: "https://bos-viewer.pages.dev/",
    image:
      "https://ipfs.near.social/ipfs/bafkreifqzppapwceuwvecotf4uczonrc7gtvjqlmlxpy2hdo4hau3m6svm",
    description:
      "An example viewer of the Canto's blockchain, CantoSwap viewer",
    category: ["DeFi", "EVM", "Canto"],
    deploy: null,
    github: null,
  },
  {
    key: 3,
    name: "CPlanet",
    url: "https://cplanet.org/",
    image:
      "https://ipfs.near.social/ipfs/bafybeia3q6ea377j5zuvtzedjjbm6kin4dtecmwkbbpkujh7srhpsy2b2q",
    description: "The portal for creatives in the NEAR Ecosystem",
    category: ["Art", "NEAR", "NFT"],
    deploy: null,
    github: "https://github.com/Jikugodwill/bos-cplanet",
  },
  {
    key: 6,
    name: "Genadrop Gateway",
    url: "https://bos.genadrop.io/",
    image:
      "https://ipfs.near.social/ipfs/bafkreidx4rvihxc5ycpvlyaod7dscotlb6bmoffimjl7s2zvarhmxtymma",
    description: "A gateway dedicated to NFTs across different chains",
    category: ["NEAR", "EVM", "NFT"],
    deploy:
      "https://vercel.com/new/clone/hidden?repository-url=https%3A%2F%2Fgithub.com%2Fcodingshot%2Fgenadrop-bos&build-command=npm+run+build&install-command=npm+--force+install&output-directory=dist",
    github: "https://github.com/codingshot/genadrop-bos",
  },
  {
    key: 8,
    name: "Everything",
    url: "https://everything.dev/#/",
    image:
      "https://ipfs.near.social/ipfs/bafybeibfjlibj5bubf4sbwcis3wpmbmwhnpicsncniuzhe4ywpwp5muxqy",
    description: "Everything +  Data Visualizations for social.near",
    category: ["NEAR", "Data", "Dev"],
    deploy:
      "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnear-everything%2Fviewer%2Ftree%2Fmaster%2Fsrc",
    github: "https://github.com/near-everything/viewer/",
  },
  {
    key: 9,
    name: "Proof Of Vibes",
    url: "https://app.ProofOfVibes.com/",
    image:
      "https://ipfs.near.social/ipfs/bafkreievzivskwxnjqetpr2yc2yaxjzvpdn5w3fvmp67vknjvz5eotpfjq",
    description:
      "A feed of vibe checks and DAO dashboard for global network of tastemakers w/ SBT + NFT integration",
    category: ["NFT", "NEAR", "Social"],
    deploy:
      "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnearbos%2Fvibes-bos&build-command=npm%20run%20build&install-command=npm%20--force%20install&output-directory=dist",
    github: "https://github.com/nearbos/vibes-bos",
  },
  {
    key: 10,
    name: "BOS HACKS",
    url: "https://boshacks.com/",
    image:
      "https://ipfs.io/ipfs/bafkreifx6figu3o7xurc3coshzfewhcujczl62emuf3g4gof4ftjbqkvhi",
    description: "BOS HACKS gateway and hackathon platform",
    category: ["Hackathon", "NEAR", "Social"],
    deploy:
      "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcodingshot%2Fboshacks&build-command=npm%20run%20build&install-command=npm%20--force%20install&output-directory=dist",
    github: "https://github.com/codingshot/boshacks/",
  },
  {
    key: 9,
    name: "Harmonic Guild",
    url: "https://gateway.harmonicguild.io/",
    image:
      "https://ipfs.near.social/ipfs/bafkreigdysucr6zujjhgl6et3ba6sdops3hyjjwwlw7upb2byd22eht53u",
    description: "Music distribution platform on NEAR",
    category: ["NFT", "NEAR", "Music"],
    deploy:
      "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fharmonic-guild%2Fviewer%2Ftree%2Ffathom",
    github: "https://github.com/Harmonic-Guild/viewer",
  },
  {
    key: 7,
    name: "Welldone Gateway",
    url: "https://welldone-gateway.vercel.app/",
    image:
      "https://ipfs.near.social/ipfs/bafkreiayw3qfvtg7sspgs3vquvrkqa467ju7vwkudyxlkkvu7nv5r6p2ka",
    description:
      "Welldone Gateway uses the Welldone Wallet to Swap on Sui, Aptos, NEAR and ETH (currently on testnet)",
    category: ["NEAR", "Sui", "Aptos"],
    deploy: null,
    github: null,
  },
].splice(0, 6);

const ProjectCard = ({ project }) => {
  if (project.type === "add") {
    const Container = styled.div`
      max-width: 400px;
      width: 100%;
      border-radius: 16px;
      background: #f6f6f6;

      display: flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
    `;

    const Button = styled.a`
      display: inline-flex;
      padding: 16px 32px;
      justify-content: center;
      align-items: center;
      gap: 10px;

      border-radius: 30px;
      background: var(--Eerie-Black, #1b1b18);

      color: #fcfcfb;
      font-family: "Mona Sans", sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    `;
    return (
      <Container>
        <Button href="/projects">View All Projects</Button>
      </Container>
    );
  }

  const ProjectImage = styled.img`
    height: 232px;
    width: 100%;
    border-radius: 16px;
    box-shadow: 0px 6px 20px -4px rgba(55, 74, 89, 0.36);
    object-fit: cover;
  `;

  const Card = styled.div`
    border-radius: 24px;
    border: 1px solid #cfcfcf;
    background: #fff;
    box-shadow: 0px 12px 18px 0px rgba(0, 0, 0, 0.07);
    background: transparent;
    min-width: 24rem;
  `;

  const Tag = styled.div`
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 2px;
    border: 1px solid #6792ff;
    padding: 2px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const HashTag = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M13.3334 6.11409C13.3334 5.74743 13.0334 5.44743 12.6667 5.44743H10.6667V3.44743C10.6667 3.08076 10.3667 2.78076 10 2.78076C9.63335 2.78076 9.33335 3.08076 9.33335 3.44743V5.44743H6.66669V3.44743C6.66669 3.08076 6.36669 2.78076 6.00002 2.78076C5.63335 2.78076 5.33335 3.08076 5.33335 3.44743V5.44743H3.33335C2.96669 5.44743 2.66669 5.74743 2.66669 6.11409C2.66669 6.48076 2.96669 6.78076 3.33335 6.78076H5.33335V9.44743H3.33335C2.96669 9.44743 2.66669 9.74743 2.66669 10.1141C2.66669 10.4808 2.96669 10.7808 3.33335 10.7808H5.33335V12.7808C5.33335 13.1474 5.63335 13.4474 6.00002 13.4474C6.36669 13.4474 6.66669 13.1474 6.66669 12.7808V10.7808H9.33335V12.7808C9.33335 13.1474 9.63335 13.4474 10 13.4474C10.3667 13.4474 10.6667 13.1474 10.6667 12.7808V10.7808H12.6667C13.0334 10.7808 13.3334 10.4808 13.3334 10.1141C13.3334 9.74743 13.0334 9.44743 12.6667 9.44743H10.6667V6.78076H12.6667C13.0334 6.78076 13.3334 6.48076 13.3334 6.11409ZM9.33335 9.44743H6.66669V6.78076H9.33335V9.44743Z"
        fill="#6792FF"
      />
    </svg>
  );

  const ProjectTitle = styled.p`
    color: #081f32;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
  `;

  const ProjectDetails = styled.p`
    color: #374a59;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 16.8px */
    margin: 0;
  `;

  const TagsContainer = styled.div`
    background-image: linear-gradient(to right, white, white),
      linear-gradient(to right, white, white),
      linear-gradient(to right, rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0)),
      linear-gradient(to left, rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0));
    background-position: left center, right center, left center, right center;
    background-repeat: no-repeat;
    background-color: white;
    background-size: 20px 100%, 20px 100%, 10px 100%, 10px 100%;
    background-attachment: local, local, scroll, scroll;
  `;

  return (
    <Card className="p-4 d-flex flex-column gap-4" key={Math.random()}>
      <ProjectImage src={project.image} />
      <div className="d-flex flex-column gap-3">
        <TagsContainer className="d-flex align-items-center gap-2 overflow-auto">
          {project.category.map((it) => (
            <Tag key={Math.random()}>
              {HashTag} {it}
            </Tag>
          ))}
        </TagsContainer>
        <ProjectTitle>{project.name}</ProjectTitle>

        <ProjectDetails>
          <Widget
            src="efiz.near/widget/every.markdown.view"
            props={{
              data: {
                content: project.description.slice(0, 200) + "...",
              },
            }}
          />
        </ProjectDetails>
      </div>
    </Card>
  );
};

const FeaturedProjects = () => {
  const SectionContainer = styled.div`
    padding: 154px 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;

    @media screen and (max-width: 800px) {
      display: none;
    }
  `;

  const SectionHeading = styled.h2`
    color: #1b1b18;
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 103.5%; /* 49.68px */
  `;

  const SectionDescription = styled.p`
    max-width: 1042px;
    color: #1b1b18;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120.5%; /* 19.28px */
  `;

  const NavigationButton = styled.button`
    border: none;
    outline: none;
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    background: #03b172;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50rem;

    i {
      padding: 25px;
    }

    &:hover {
      border: none;
      outline: none;
    }

    &:active {
      border: none;
      outline: none;
    }

    &.inactive {
      color: #58525b;
      background: #c0c0c0;
      cursor: not-allowed;
    }
  `;

  const nextProjects = () => {
    State.update({ projectsIndex: state.projectsIndex + 3 });
  };
  const previousProjects = () =>
    State.update({ projectsIndex: state.projectsIndex - 3 });

  const endIndex = state.projectsIndex + 3;

  const ResponsiveCards = styled.div`
    background-image: linear-gradient(to right, white, white),
      linear-gradient(to right, white, white),
      linear-gradient(to right, rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0)),
      linear-gradient(to left, rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0));
    background-position: left center, right center, left center, right center;
    background-repeat: no-repeat;
    background-color: white;
    background-size: 20px 100%, 20px 100%, 10px 100%, 10px 100%;
    background-attachment: local, local, scroll, scroll;
  `;

  return (
    <SectionContainer>
      <div className="d-flex justify-content-between w-100">
        <div>
          <SectionHeading>Featured Projects</SectionHeading>
          <SectionDescription>
            We highlight these outstanding projects for you to benefit from our
            curated pool of innovations that have made a substantial impact in
            other members' lives.
          </SectionDescription>
        </div>
        <div className="ms-auto d-none gap-3 mt-auto">
          <NavigationButton
            disabled={state.projectsIndex === 0}
            className={state.projectsIndex === 0 && "inactive"}
          >
            <i className="bi bi-chevron-left" onClick={previousProjects}></i>
          </NavigationButton>
          <NavigationButton
            disabled={endIndex >= projects.length}
            className={endIndex >= projects.length && "inactive"}
          >
            <i className="bi bi-chevron-right" onClick={nextProjects}></i>
          </NavigationButton>
        </div>
      </div>
      <ResponsiveCards className="d-flex w-100 overflow-auto align-items-stretch mx-auto gap-3">
        {projectsData.map((project) => (
          <ProjectCard key={`project-${Math.random()}`} project={project} />
        ))}
        <ProjectCard
          key={`project-${Math.random()}`}
          project={{ type: "add" }}
        />
      </ResponsiveCards>
    </SectionContainer>
  );
};

const MobileProjects = () => {
  const Container = styled.div`
    display: none;

    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
      padding: 60px 16px;
    }
  `;

  const Heading = styled.h2`
    color: #1b1b18;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 103.5%; /* 33.12px */
    margin-bottom: 32px;
  `;

  const Description = styled.p`
    color: #1b1b18;
    font-family: "Mona Sans", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120.5%; /* 19.28px */

    margin-bottom: 40px;
  `;

  const MobileProjectCard = ({ project }) => {
    const Card = styled.div`
      border-radius: 24px;
      box-shadow: 0px 12px 18px 0px rgba(0, 0, 0, 0.07);

      display: flex;
      flex-direction: column;

      margin-bottom: 24px;
    `;

    const Button = styled.a`
      display: inline-flex;
      padding: 16px 32px;
      justify-content: center;
      align-items: center;
      gap: 10px;

      border-radius: 30px;
      background: var(--Eerie-Black, #1b1b18);

      color: #fcfcfb;
      font-family: "Mona Sans", sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    `;

    if (project.type === "add") {
      return (
        <Card
          style={{ height: "425px", marginBottom: 24 }}
          className="justify-content-center  align-items-center"
        >
          <Button href="/projects">View All Projects</Button>
        </Card>
      );
    }

    const CardImage = styled.img`
      width: 100%;
      height: 12.5rem;

      object-fit: cover;

      border-radius: 16px 16px 0px 0px;
      box-shadow: 0px 6px 20px -4px rgba(55, 74, 89, 0.36);
    `;

    const LikeButton = styled.div`
      position: absolute;

      bottom: 10px;
      right: 10px;

      border-radius: 8px;
      background: #dbdbdb;

      display: inline-flex;
      height: 47px;
      padding: 12px 16px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
    `;

    const HeartIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <path
          d="M13.9062 2.30957C12.3367 2.30957 10.9438 2.9291 10 3.99395C9.05625 2.9291 7.66328 2.30957 6.09375 2.30957C4.72674 2.31122 3.41618 2.855 2.44956 3.82163C1.48293 4.78825 0.939154 6.09881 0.9375 7.46582C0.9375 13.1174 9.20391 17.633 9.55547 17.8229C9.69209 17.8964 9.84483 17.9349 10 17.9349C10.1552 17.9349 10.3079 17.8964 10.4445 17.8229C10.7961 17.633 19.0625 13.1174 19.0625 7.46582C19.0608 6.09881 18.5171 4.78825 17.5504 3.82163C16.5838 2.855 15.2733 2.31122 13.9062 2.30957ZM13.4773 13.4314C12.3893 14.3548 11.2261 15.1858 10 15.9158C8.77387 15.1858 7.61073 14.3548 6.52266 13.4314C4.82969 11.9791 2.8125 9.76426 2.8125 7.46582C2.8125 6.59558 3.1582 5.76098 3.77356 5.14563C4.38891 4.53027 5.22351 4.18457 6.09375 4.18457C7.48438 4.18457 8.64844 4.91895 9.13203 6.10176C9.20242 6.27419 9.32257 6.42174 9.47715 6.52561C9.63174 6.62948 9.81376 6.68495 10 6.68495C10.1862 6.68495 10.3683 6.62948 10.5228 6.52561C10.6774 6.42174 10.7976 6.27419 10.868 6.10176C11.3516 4.91895 12.5156 4.18457 13.9062 4.18457C14.7765 4.18457 15.6111 4.53027 16.2264 5.14563C16.8418 5.76098 17.1875 6.59558 17.1875 7.46582C17.1875 9.76426 15.1703 11.9791 13.4773 13.4314Z"
          fill="#767676"
        />
      </svg>
    );

    const Tag = styled.div`
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      border-radius: 2px;
      border: 1px solid #6792ff;
      padding: 2px 4px;
      display: flex;
      align-items: center;
      justify-content: center;

      width: max-content;
    `;

    const HashTag = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M13.3334 6.11409C13.3334 5.74743 13.0334 5.44743 12.6667 5.44743H10.6667V3.44743C10.6667 3.08076 10.3667 2.78076 10 2.78076C9.63335 2.78076 9.33335 3.08076 9.33335 3.44743V5.44743H6.66669V3.44743C6.66669 3.08076 6.36669 2.78076 6.00002 2.78076C5.63335 2.78076 5.33335 3.08076 5.33335 3.44743V5.44743H3.33335C2.96669 5.44743 2.66669 5.74743 2.66669 6.11409C2.66669 6.48076 2.96669 6.78076 3.33335 6.78076H5.33335V9.44743H3.33335C2.96669 9.44743 2.66669 9.74743 2.66669 10.1141C2.66669 10.4808 2.96669 10.7808 3.33335 10.7808H5.33335V12.7808C5.33335 13.1474 5.63335 13.4474 6.00002 13.4474C6.36669 13.4474 6.66669 13.1474 6.66669 12.7808V10.7808H9.33335V12.7808C9.33335 13.1474 9.63335 13.4474 10 13.4474C10.3667 13.4474 10.6667 13.1474 10.6667 12.7808V10.7808H12.6667C13.0334 10.7808 13.3334 10.4808 13.3334 10.1141C13.3334 9.74743 13.0334 9.44743 12.6667 9.44743H10.6667V6.78076H12.6667C13.0334 6.78076 13.3334 6.48076 13.3334 6.11409ZM9.33335 9.44743H6.66669V6.78076H9.33335V9.44743Z"
          fill="#6792FF"
        />
      </svg>
    );

    const CardTitle = styled.h3`
      color: #081f32;
      font-family: "Mona Sans", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      margin: 0;
    `;

    const CardDetails = styled.p`
      color: #374a59;
      font-family: "Mona Sans", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%; /* 16.8px */

      margin: 0;
    `;

    return (
      <Card>
        <div className="position-relative">
          <CardImage src={project.image} />
        </div>
        <div style={{ padding: 24 }} className="d-flex flex-column gap-3">
          <div className="d-flex align-items-center gap-2 overflow-auto">
            {project.category.map((it) => (
              <Tag>
                {HashTag} {it}
              </Tag>
            ))}
          </div>
          <CardTitle>{project.name}</CardTitle>
          <CardDetails>
            <Widget
              src="efiz.near/widget/every.markdown.view"
              props={{
                data: {
                  content: project.description.slice(0, 200) + "...",
                },
              }}
            />
          </CardDetails>
        </div>
      </Card>
    );
  };

  const NavigationButton = styled.button`
    border: none;
    outline: none;
    width: 35px;
    height: 35px;
    flex-shrink: 0;
    background: #03b172;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50rem;

    i {
      padding: 15px;
    }

    &:hover {
      border: none;
      outline: none;
    }

    &:active {
      border: none;
      outline: none;
    }

    &.inactive {
      color: #58525b;
      background: #c0c0c0;
      cursor: not-allowed;
    }
  `;

  // TODO: Projects should be shown here
  const projects =
    JSON.parse(
      Social.get(
        `${context.accountId}/thing/project-registry/featured`,
        "final"
      ) || "null"
    ) || [];

  const nextProjects = () => {
    State.update({ mobileIndex: state.mobileIndex + 1 });
  };
  const previousProjects = () =>
    State.update({ mobileIndex: state.mobileIndex - 1 });

  const endIndex = state.mobileIndex + 1;

  return (
    <>
      <Container>
        <div>
          <Heading>Featured Projects</Heading>
          <Description>
            Lorem ipsum dolor sit amet consectetur. Tortor risus ipsum amet
            tincidunt facilisis massa. Rutrum ultrices tellus porttitor diam.
            Purus mauris amet nulla hendrerit neque sed eros quam. Sed odio
            vitae.
          </Description>
        </div>
        <div>
          {projectsData.slice(state.mobileIndex, endIndex).map((project) => (
            <MobileProjectCard
              key={`project-${Math.random()}`}
              project={project}
            />
          ))}
        </div>

        <div className="mx-auto d-flex gap-3">
          <NavigationButton
            disabled={state.mobileIndex === 0}
            className={state.mobileIndex === 0 && "inactive"}
          >
            <i className="bi bi-chevron-left" onClick={previousProjects}></i>
          </NavigationButton>
          <NavigationButton
            disabled={endIndex >= projectsData.length}
            className={endIndex >= projectsData.length && "inactive"}
          >
            <i className="bi bi-chevron-right" onClick={nextProjects}></i>
          </NavigationButton>
        </div>
      </Container>
    </>
  );
};

return (
  <>
    <FeaturedProjects />
    <MobileProjects />
  </>
);
