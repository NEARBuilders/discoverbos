import React from "react";
import Links from "../../components/pages/links";
import Heading from "../../components/header/Heading";

const links = [
  {
    name: "HackBOX: Streamline and incubate your Hackathon and get funding",
    href: "https://near.org/hackbox.near/widget/Home.",
  },
  {
    name: "Grassroots DAO Onboarding + Funding via NDC",
    href: "https://gov.near.org/t/grassroots-daos-onboarding-procedure-v1-onboarding-round-is-open/36828",
  },
  {
    name: "NEAR MDAO Funding",
    href: "https://gov.near.org/t/marketing-eco-dao-announcement-novembers-funding-round/36806",
  },
  {
    name: "NEAR CDAO Funding",
    href: "https://gov.near.org/t/announcement-creatives-dao-november-funding-round/36813",
  },
  {
    name: "DeFi Protocols funding via Proximity",
    href: "https://form.jotform.com/212877151135050",
  },
  {
    name: "NEAR Horizon - Accelerator + Funding opportunity",
    href: "https://app.hzn.xyz/",
  },
];

export default function OpportunitiesFunding() {
  return (
    <div>
      <Heading title="Funding Opportunities" />
      <Links links={links} />
    </div>
  );
}
