const projects = Social.keys("legacy-awesome.near/project/*");

if (!projects) {
  return "Loading...";
}

const featuredProjects = [
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
];

const projectsData = Object.keys(projects["legacy-awesome.near"].project).map(
  (it) => {
    return {
      key: it,
      data: Social.get(`legacy-awesome.near/project/${it}/**`).profile,
    };
  }
);

if (!projectsData) {
  return "Loading...";
}

const tempCategories = projectsData
  .map((el) => Object.keys(el.data.tags))
  .flat();

const categories = tempCategories.filter(
  (it, idx) => tempCategories.indexOf(it) === idx
);

const categoriesWithProjects = categories.map((it) => {
  return {
    category: it,
    projects: projectsData
      .map((project) => {
        return {
          projectKey: project.key,
          ...project.data,
          tags: Object.keys(project.data.tags),
        };
      })
      .filter((project) => project.tags.includes(it)),
  };
});

if (!categoriesWithProjects) {
  return "Loading...";
}

const AppTitle = styled.a`
  font-size: 12px;
  font-weight: 600;
`;

const AppImage = styled.img`
  width: 3.25rem;
  height: 3.25rem;

  object-fit: cover;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
`;

function toUrl(image) {
  const fallbackUrl =
    "https://ipfs.near.social/ipfs/bafkreifc4burlk35hxom3klq4mysmslfirj7slueenbj7ddwg7pc6ixomu";
  return (
    (image.ipfs_cid
      ? `https://ipfs.near.social/ipfs/${image.ipfs_cid}`
      : image.url) || fallbackUrl
  );
}

const [currentCategory, setCurrentCategory] = useState("");
const [searchKey, setSearchKey] = useState("");
let filteredApps = categoriesWithProjects;
if (currentCategory !== "") {
  filteredApps = categoriesWithProjects.filter(
    (it) => it.category === currentCategory
  );
}
if (searchKey !== "") {
  filteredApps = projectsData.filter((project) =>
    project.data.name.toLowerCase().includes(searchKey.toLowerCase())
  );
  filteredApps = [
    {
      category: `Searching for "${searchKey}"`,
      projects: filteredApps.map((it) => {
        return {
          projectKey: it.key,
          ...it.data,
          tags: Object.keys(it.data.tags),
        };
      }),
    },
  ];
}

const SidebarDiv = styled.div`
  grid-column: span 1 / span 1;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

const ResponsiveCategories = styled.div`
  @media screen and (max-width: 800px) {
    display: flex;
    gap: 1rem;
    overflow: auto;

    background-image: linear-gradient(to right, white, white),
      linear-gradient(to right, white, white),
      linear-gradient(to right, rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0)),
      linear-gradient(to left, rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0));
    background-position: left center, right center, left center, right center;
    background-repeat: no-repeat;
    background-color: white;
    background-size: 20px 100%, 20px 100%, 10px 100%, 10px 100%;
    background-attachment: local, local, scroll, scroll;
  }
`;

const CategoryItem = styled.div`
  cursor: pointer;
  margin: 0.5rem 0;

  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar = () => {
  return (
    <SidebarDiv>
      <h2>Categories</h2>
      <ResponsiveCategories>
        <CategoryItem onClick={() => setCurrentCategory("")}>All</CategoryItem>
        {categories.map((it) => (
          <CategoryItem onClick={() => setCurrentCategory(it)}>
            {it.charAt(0).toUpperCase() + it.slice(1).toLowerCase()}
          </CategoryItem>
        ))}
      </ResponsiveCategories>
    </SidebarDiv>
  );
};

const ScrollShadow = styled.div`
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

const AppCard = ({ project }) => {
  const { name, image, tags, projectKey } = project;
  return (
    <ScrollShadow className="d-flex gap-3 align-items-center overflow-auto mb-2">
      <AppImage src={toUrl(image)} />
      <div className="d-flex flex-column justify-content-center">
        <AppTitle
          href={`/discover.near/widget/Project.Page?path=legacy-awesome.near/project/${projectKey}`}
        >
          {name}
        </AppTitle>
        <div className="d-flex gap-1 align-items-center">
          {tags.map((it) => (
            <small
              onClick={() => setCurrentCategory(it)}
              className="border border-1 border-dark-subtle px-1 rounded-2"
              style={{ cursor: "pointer" }}
            >
              {it}
            </small>
          ))}
        </div>
      </div>
    </ScrollShadow>
  );
};

const ProjectBox = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 16px;

  position: relative;
`;

const ProjectImage = styled.img`
  position: absolute;
  width: 8rem;
  height: 8rem;
  border-radius: 16px;
  object-fit: cover;

  top: 0;
  left: 0;
`;
const ProjectTitle = styled.span`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding: 3.5rem 1.25rem 1.25rem;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 20%,
    rgba(0, 0, 0, 0)
  );
  text-shadow: rgba(0, 0, 0, 0.75) 0px 0px 2px;
  z-index: 2;
  color: white;
  border-radius: 16px;
  text-align: center;
`;

const FeaturedProject = ({ project, projectKey }) => {
  return (
    <a href={`${projectKey}`}>
      <ProjectBox>
        <ProjectTitle>{project.name}</ProjectTitle>
        <ProjectImage src={project.image} />
      </ProjectBox>
    </a>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const AppsContainer = styled.div`
  grid-column: span 3 / span 3;
`;

const ResponsiveAppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const CTA = styled.a`
  background: #00bf63;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 12px;
  font-weight: 600;
  border-radius: 50rem;
`;

return (
  <Container className="container pt-3">
    <Sidebar />
    <AppsContainer className="border-start ps-5">
      {currentCategory === "" && (
        <div className="mb-4 pb-4 border-bottom">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2>Featured Projects</h2>
            <CTA href="/projects-form">Submit your project</CTA>
          </div>
          <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center">
            {featuredProjects.slice(0, 10).map((it) => (
              <FeaturedProject project={it} projectKey={it.url} />
            ))}
          </div>
        </div>
      )}
      <div className="mb-5">
        <input
          type="text"
          placeholder="Search..."
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </div>
      {filteredApps.map((it) => (
        <div className="mb-5" style={{ maxWidth: "100%" }}>
          <h2>{it.category}</h2>
          <ResponsiveAppContainer>
            {it.projects.map((project) => (
              <AppCard project={project} />
            ))}
          </ResponsiveAppContainer>
        </div>
      ))}
    </AppsContainer>
  </Container>
);
