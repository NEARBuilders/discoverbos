import React from "react";
import { Widget } from "near-social-vm";
import { useBosLoaderStore } from "../../stores/bos-loader";

export default function ComponentsPage() {
  const redirectMapStore = useBosLoaderStore(); // We need this in order to run Widgets from local

  return (
    <div className="mb-5 w-100 container">
      <Widget
        src="discover.near/widget/Components.Library"
        config={{
          redirectMap: redirectMapStore.redirectMap,
        }}
      />
    </div>
  );
}
