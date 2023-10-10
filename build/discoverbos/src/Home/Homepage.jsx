const accountId = context.accountId;
const ownerId = "discover.near";

const homepage = Social.get(`${accountId}/settings/discover.near/homepage`);
const defaultHomepage = `${ownerId}/widget/Home.Index`;

if (homepage === null) {
  return "loading...";
}

State.init({
  homepage: homepage ?? defaultHomepage,
});

return <Widget src={state.homepage} />;
