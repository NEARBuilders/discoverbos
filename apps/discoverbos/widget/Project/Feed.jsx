const Flex = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  flex-wrap: wrap;
`;

const { Feed } = VM.require("efiz.near/widget/Module.Feed");
const { Card } = VM.require("discover.near/widget/project.module");

// TODO: Replace with discover.near
const hiddenProjects =
  JSON.parse(
    Social.get(`${context.accountId}/thing/project-registry/hidden`, "final") ||
      "null"
  ) || [];

if (!Feed || !Card) {
  return <div>Loading modules...</div>;
}

return (
  <>
    <Feed
      index={{
        action: "every",
        key: "group", // TODO: change to project
        options: {
          // nft:mrbrownnft.near
          limit: 10,
          order: "desc",
          accountId: undefined,
        },
      }}
      Item={(p) => {
        return (
          <a
            href={`/discover.near/widget/Project.Page?projectId=${p.value.id}&creatorId=${p.accountId}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Widget
              key={p}
              src={"discover.near/widget/Project.Card"}
              props={{ projectId: p.value.id, creatorId: p.accountId }}
            />
          </a>
        );
      }}
      Layout={Flex}
    />
  </>
);
