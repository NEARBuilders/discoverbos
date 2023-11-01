import React from "react";

import Heading from "../../components/header/Heading";
import Links from "../../components/pages/links";

const links = [
  {
    name: "#",
    href: "#",
  },
];

export default function EducationOfficeHours() {
  return (
    <div>
      <Heading title="Office Hours" />
      <Links links={links} />
    </div>
  );
}
