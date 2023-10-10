import React from "react";
import { Widget } from "near-social-vm";
import { useBosLoaderStore } from "../stores/bos-loader";

export default function Home() {
  const redirectMapStore = useBosLoaderStore();

  // set page title
  document.title = "DiscoverBOS | Home";
  return (
    <div>
      <Widget
        src="discover.near/widget/Home.Index"
        config={{
          redirectMap: redirectMapStore.redirectMap,
        }}
      />
    </div>
  );
}
