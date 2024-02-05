import React from "react";
import { Widget } from "near-social-vm";
import { useBosLoaderStore } from "../../stores/bos-loader";

export default function Projects() {
  const redirectMapStore = useBosLoaderStore(); // We need this in order to run Widgets from local

  return (
    <div className="container">
      <Widget
       src="nearcatalog.near/widget/NearCatalog.App"
        //src="nearcatalog.near/widget/NearCatalog.App"
        config={{
          redirectMap: redirectMapStore.redirectMap,
        }}
      />
    </div>
  );
}
