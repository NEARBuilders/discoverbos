const NavUnderline = styled.ul`
  border-bottom: 1px #eceef0 solid;

  a {
    color: #687076;
    text-decoration: none;
  }

  a.active {
    font-weight: bold;
    color: #0c7283;
    border-bottom: 4px solid #0c7283;
  }
`;

const Button = styled.button`
  height: 40px;
  font-size: 14px;
  border-color: #e3e3e0;
  background-color: #ffffff;
`;

const Banner = styled.div`
  max-width: 100%;
  min-height: 240px;
  height: 240px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TabItem = styled.div`
  border-radius: 8px;

  &.active {
    background: #f0f0f0;
  }

  &:hover {
    background: lightgray;
  }
`;

const { Feed } = VM.require("efiz.near/widget/Module.Feed");
Feed = Feed || (() => <></>);

const { path } = props;

const data = Social.getr(path, "final");

if (!data) {
  return <div>Project not found</div>;
}

const projectData = data.profile;
console.log(projectData);

const tabs = [
  {
    defaultActive: true,
    title: "Activity",
    iconClass: "bi bi-house-door",
    module: () => (
      <>
        <Widget
          src="devs.near/widget/Compose"
          props={{
            index: {
              post: JSON.stringify({
                key: {
                  id: projectId,
                  type: "thing",
                },
                value: {
                  type: "md",
                },
              }),
            },
          }}
        />
        <Feed
          index={[
            {
              action: "post",
              key: {
                type: "thing",
                path: `${creatorId}/thing/${projectId}`,
              },
              options: {
                limit: 10,
                order: "desc",
                accountId: props.accounts,
              },
              cacheOptions: {
                ignoreCache: true,
              },
            },
            {
              action: "repost",
              key: JSON.stringify({
                type: "thing",
                path: `${creatorId}/thing/${projectId}`,
              }),
              options: {
                limit: 10,
                order: "desc",
                accountId: props.accounts,
              },
              cacheOptions: {
                ignoreCache: true,
              },
            },
          ]}
          Item={(p) => (
            <Widget
              loading={<div className="w-100" style={{ height: "200px" }} />}
              src="mob.near/widget/MainPage.N.Post"
              props={{ accountId: p.accountId, blockHeight: p.blockHeight }}
            />
          )}
        />
      </>
    ),
  },
  {
    iconClass: "bi bi-gear",
    title: "Settings",
    module: () => (
      <Widget
        src="discover.near/widget/Project.Settings"
        props={{ thingId: projectId, data }}
      />
    ),
  },
  // ...(projectData.tabs || []),
];

State.init({
  selectedTab: tabs[0],
});

const { name: projectName, tagline, image, backgroundImage } = projectData;

function Module({ module }) {
  if (typeof module === "function") {
    return module();
  } else {
    return <Widget src={module.src} />;
  }
}

return (
  <div className="d-flex flex-column gap-3 bg-white container">
    <Banner
      className="object-fit-cover rounded-bottom-3"
      style={{
        background: `center / cover no-repeat url(https://ipfs.near.social/ipfs/${backgroundImage.ipfs_cid})`,
      }}
    />

    <div className="d-md-flex d-block justify-content-between container">
      <div className="d-md-flex d-block align-items-start mb-5">
        <div className="position-relative">
          <div style={{ width: 150, height: 100 }}>
            <Widget
              src="mob.near/widget/Image"
              props={{
                image: image,
                alt: `loading logo`,
                className:
                  "border border-3 border-white rounded-circle shadow position-absolute",
                style: {
                  width: 150,
                  height: 150,
                  objectFit: "cover",
                },
                fallbackUrl:
                  "https://www.ivins.com/wp-content/uploads/2020/09/placeholder-1.png",
              }}
            />
          </div>
        </div>

        <div className="d-flex flex-column ps-3 pt-3 pb-2">
          <span className="h1 text-nowrap">{projectName}</span>
          <span className="text-secondary">{tagline}</span>
        </div>
      </div>

      <div className="d-flex align-items-end gap-3">
        <Button
          className="btn btn-outline-primary"
          onClick={() => State.update({ selectedTab: tabs[1] })}
        >
          Configure Project
        </Button>
        <Button className="btn btn-outline-primary">Join</Button>
      </div>
    </div>

    <NavUnderline className="nav">
      {tabs &&
        tabs.map(({ iconClass, title }, index) =>
          title ? (
            <li className="nav-item" key={title}>
              <TabItem
                className={[
                  "d-inline-flex gap-2",
                  state.selectedTab.title === title
                    ? "nav-link active"
                    : "nav-link",
                ].join(" ")}
                style={{ cursor: "pointer" }}
                onClick={() => State.update({ selectedTab: tabs[index] })}
              >
                <i className={iconClass} />
                <span>{title}</span>
              </TabItem>
            </li>
          ) : null
        )}
    </NavUnderline>
    <Content>
      <Module module={state.selectedTab.module} />
    </Content>
  </div>
);
