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

console.log(projectsData[0]);

const LinkTree = ({ linktree }) => {
  return (
    <div className="d-flex">
      {linktree.twitter && (
        <a
          href={`${linktree.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          className="me-2"
        >
          <i className="bi bi-twitter"></i>
        </a>
      )}

      {linktree.github && (
        <a
          href={`${linktree.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="me-2"
        >
          <i className="bi bi-github"></i>
        </a>
      )}

      {linktree.telegram && (
        <a
          href={`${linktree.telegram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="me-2"
        >
          <i className="bi bi-telegram"></i>
        </a>
      )}

      {linktree.discord && (
        <a
          href={`${linktree.discord}`}
          target="_blank"
          rel="noopener noreferrer"
          className="me-2"
        >
          <i className="bi bi-discord"></i>
        </a>
      )}

      {linktree.medium && (
        <a
          href={`${linktree.medium}`}
          target="_blank"
          rel="noopener noreferrer"
          className="me-2"
        >
          <i className="bi bi-medium"></i>
        </a>
      )}

      {linktree.website && (
        <a
          href={`${linktree.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-box-arrow-up-right"></i>
        </a>
      )}
    </div>
  );
};

const ProjectCard = ({ project, projectKey }) => {
  const { name: projectName, tagline, image, linktree, tags } = project;
  const tagKeys = Object.keys(tags);
  return (
    <a
      href={`/discover.near/widget/Project.Page?path=legacy-awesome.near/project/${projectKey}`}
      key={Math.random()}
      style={{ all: "unset", cursor: "pointer" }}
    >
      <div
        className="border shadow-sm rounded-2 d-flex flex-column p-3 gap-2"
        style={{ width: "20rem", minHeight: "15rem" }}
      >
        <div className="d-flex align-items-center gap-2">
          <div>
            <Widget
              src="mob.near/widget/Image"
              props={{
                image: image,
                alt: `${projectName}-image`,
                className: "rounded-circle",
                style: {
                  width: 32,
                  height: 32,
                  objectFit: "cover",
                },
                fallbackUrl:
                  "https://www.ivins.com/wp-content/uploads/2020/09/placeholder-1.png",
              }}
            />
          </div>
          <div style={{ fontWeight: "bold" }}>{projectName}</div>
        </div>
        {tagline && <p>{tagline}</p>}
        {linktree && <LinkTree linktree={linktree} />}

        {tagKeys && (
          <div className="d-flex gap-1 align-items-center flex-wrap">
            {tagKeys.map((tag) => (
              <small
                key={Math.random()}
                className="border border-info rounded-2 px-1"
              >
                #{tag.toLowerCase()}
              </small>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

return (
  <div className="py-3 container">
    <h2 className="mb-4 text-center">Projects</h2>
    <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center">
      {projectsData.map((it) => (
        <ProjectCard project={it.data} projectKey={it.key} />
      ))}
    </div>
  </div>
);
