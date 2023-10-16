const Flex = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  flex-wrap: wrap;
`;

const { Feed } = VM.require("efiz.near/widget/Module.Feed");
const { Card } = VM.require("discover.near/widget/Project.Module");
Feed = Feed || (() => <></>);

return (
  <>
    <Feed
      index={{
        action: "every",
        key: "group", // TODO: replace with "project"
        options: {
          limit: 10,
          order: "desc",
          accountId: undefined,
        },
      }}
      Item={(p) => {
        const projectPath = `${p.accountId}/thing/${p.value.id}`;
        // if (!hiddenProjects.includes(projectPath)) {
        console.log(projectPath);
        return (
          <div key={p}>
            <Widget
              src="discover.near/widget/Project.Provider"
              props={{
                View: Card,
                path: projectPath,
              }}
            />
          </div>
        );
      }}
      // }
      Layout={Flex}
    />
  </>
);
