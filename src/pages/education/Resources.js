import React from "react";

import EducationTutorials from "./tutorials";
import EducationWorkshops from "./Workshops";

export default function Resources() {
  return (
    <div className="mb-3">
      <EducationTutorials className="mb-3" />
      <EducationWorkshops className="mb-3" />
    </div>
  );
}
