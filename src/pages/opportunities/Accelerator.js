import React from "react";
import Links from "../../components/pages/links";
import Heading from "../../components/header/Heading";

const links = [
  {
    name: "HackBOX: Streamline and incubate your Hackathon and get funding",
    href: "https://near.org/hackbox.near/widget/home",
  },
  {
    name: "Near Horizon",
    href: "https://near.org/horizon",
  },
];

export default function OpportunitiesAccelerator() {
  return (
    <div>
      <Heading title="Accelerator Program" />
      <Links links={links} />
    </div>
  );
}
