const projects = Social.keys("legacy-awesome.near/project/*");

if (!projects) {
  return "Loading...";
}

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
    <a
      href={`/discover.near/widget/Project.Page?path=legacy-awesome.near/project/${projectKey}`}
    >
      <ProjectBox>
        <ProjectTitle>{project.name}</ProjectTitle>
        <ProjectImage src={toUrl(project.image)} />
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
    <AppsContainer>
      {currentCategory === "" && (
        <div className="mb-5">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2>Featured Projects</h2>
            <CTA href="/projects-form">Submit your project</CTA>
          </div>
          <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center">
            {projectsData.slice(0, 10).map((it) => (
              <FeaturedProject project={it.data} projectKey={it.key} />
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
