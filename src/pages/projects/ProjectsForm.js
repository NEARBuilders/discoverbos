import React from "react";
import { useBosLoaderStore } from "../../stores/bos-loader";
import { Widget } from "near-social-vm";

export default function ProjectsForm() {
  const redirectMapStore = useBosLoaderStore(); // We need this in order to run Widgets from local

  return (
    <div className="container mb-3 my-5">
      <Widget
        src="discover.near/widget/ProjectForm" // this references a local widget in apps/discoverbos/widget/project/feed
        config={{
          redirectMap: redirectMapStore.redirectMap,
        }}
      />
    </div>
  );
}
