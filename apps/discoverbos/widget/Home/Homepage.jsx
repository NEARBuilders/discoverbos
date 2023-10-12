const accountId = context.accountId;

const homepage = Social.get(`${accountId}/settings//*__@creatorAccount__*//homepage`);
const defaultHomepage = "/*__@creatorAccount__*//widget/Home.Index";

if (homepage === null) {
  return "loading...";
}

State.init({
  homepage: homepage ?? defaultHomepage,
});

return <Widget src={state.homepage} />;
