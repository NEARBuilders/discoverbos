import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";
import { setupMeteorWallet } from "@near-wallet-selector/meteor-wallet";
import { setupModal } from "@near-wallet-selector/modal-ui";
import "@near-wallet-selector/modal-ui/styles.css";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { setupNeth } from "@near-wallet-selector/neth";
import { setupSender } from "@near-wallet-selector/sender";
import "App.scss";
import Big from "big.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "error-polyfill";
import { useAccount, useInitNear, useNear, utils } from "near-social-vm";
import React, { useCallback, useEffect, useState } from "react";
import "react-bootstrap-typeahead/css/Typeahead.bs5.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { BosLoaderBanner } from "./components/BosLoaderBanner";
import { NavigationWrapper } from "./components/navigation/NavigationWrapper";
import { NetworkId, Widgets } from "./data/widgets";
import { useBosLoaderInitializer } from "./hooks/useBosLoaderInitializer";
import Flags from "./pages/Flags";
import ViewPage from "./pages/ViewPage";

import RootLayout from "./components/layouts/root";

// Page imports
import { EventCalendar, LibraryEvents } from "./pages/events";

import {
  DeveloperCommunity,
  GeneralCommunity,
  ProjectCommunity,
  RegionalCommunity,
} from "./pages/communities";

import { ComponentsPage } from "./pages/components";

import {
  EducationCodeReviews,
  EducationOfficeHours,
  EducationTutorials,
  EducationWorkshops,
} from "./pages/education";

import {
  OpportunitiesAccelerator,
  OpportunitiesAmplification,
  OpportunitiesFunding,
  OpportunitiesIncubation,
} from "./pages/opportunities";

import {
  ProjectsBOSIntegration,
  ProjectsBuiltWithBOS,
  ProjectsNativeProjects,
} from "./pages/projects";

import About from "./pages/About";
import Home from "./pages/Home";
import Community from "./pages/communities/Community";
import Resources from "./pages/education/Resources";
import HomeSelector from "./pages/home/HomeSelector";
import { Gateways, Infrastructure, Integrations } from "./pages/more";
import Projects from "./pages/projects/Projects";
// import ProjectsForm from "./pages/projects/ProjectsForm";
import { isValidAttribute } from "dompurify";
import ProjectsForm from "./pages/projects/Form";
import { setupNightly } from "@near-wallet-selector/nightly";

export const refreshAllowanceObj = {};
const documentationHref = "https://social.near-docs.io/";

function App() {
  const [connected, setConnected] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [signedAccountId, setSignedAccountId] = useState(null);
  const [availableStorage, setAvailableStorage] = useState(null);
  const [walletModal, setWalletModal] = useState(null);
  const [widgetSrc, setWidgetSrc] = useState(null);

  useBosLoaderInitializer();

  const { initNear } = useInitNear();
  const near = useNear();
  const account = useAccount();
  const accountId = account.accountId;

  useEffect(() => {
    initNear &&
      initNear({
        networkId: NetworkId,
        selector: setupWalletSelector({
          network: NetworkId,
          modules: [
            setupNearWallet(),
            setupMyNearWallet(),
            setupSender(),
            setupHereWallet(),
            setupMeteorWallet(),
            setupNightly(),
            setupNeth({
              gas: "300000000000000",
              bundle: false,
            }),
          ],
        }),
        customElements: {
          Link: (props) => {
            if (!props.to && props.href) {
              props.to = props.href;
              delete props.href;
            }
            if (props.to) {
              props.to = isValidAttribute("a", "href", props.to)
                ? props.to
                : "about:blank";
            }
            return <Link {...props} />;
          },
        },
        config: {
          defaultFinality: undefined,
        },
      });
  }, [initNear]);

  useEffect(() => {
    if (!near) {
      return;
    }
    near.selector.then((selector) => {
      setWalletModal(
        setupModal(selector, { contractId: near.config.contractName })
      );
    });
  }, [near]);

  const requestSignIn = useCallback(
    (e) => {
      e && e.preventDefault();
      walletModal.show();
      return false;
    },
    [walletModal]
  );

  const logOut = useCallback(async () => {
    if (!near) {
      return;
    }
    const wallet = await (await near.selector).wallet();
    wallet.signOut();
    near.accountId = null;
    setSignedIn(false);
    setSignedAccountId(null);
  }, [near]);

  const refreshAllowance = useCallback(async () => {
    alert(
      "You're out of access key allowance. Need sign in again to refresh it"
    );
    await logOut();
    requestSignIn();
  }, [logOut, requestSignIn]);
  refreshAllowanceObj.refreshAllowance = refreshAllowance;

  useEffect(() => {
    if (!near) {
      return;
    }
    setSignedIn(!!accountId);
    setSignedAccountId(accountId);
    setConnected(true);
  }, [near, accountId]);

  useEffect(() => {
    setAvailableStorage(
      account.storageBalance
        ? Big(account.storageBalance.available).div(utils.StorageCostPerByte)
        : Big(0)
    );
  }, [account]);

  const passProps = {
    refreshAllowance: () => refreshAllowance(),
    setWidgetSrc,
    signedAccountId,
    signedIn,
    connected,
    availableStorage,
    widgetSrc,
    logOut,
    requestSignIn,
    widgets: Widgets,
    documentationHref,
  };

  const eventRoutes = [
    {
      path: "/events/calendar",
      component: <EventCalendar />,
    },
    {
      path: "/events/library",
      component: <LibraryEvents />,
    },
  ];

  const communitiesRoutes = [
    { path: "/community", component: <Community /> },
    {
      path: "/communities/developer",
      component: <DeveloperCommunity />,
    },
    {
      path: "/communities/project",
      component: <ProjectCommunity />,
    },
    {
      path: "/communities/regional",
      component: <RegionalCommunity />,
    },
    {
      path: "/communities/general-bos",
      component: <GeneralCommunity />,
    },
  ];

  const educationRoutes = [
    { path: "/resources", component: <Resources /> },
    {
      path: "/education/tutorials",
      component: <EducationTutorials />,
    },
    {
      path: "/education/code-reviews",
      component: <EducationCodeReviews />,
    },
    {
      path: "/education/workshops",
      component: <EducationWorkshops />,
    },
    {
      path: "/education/office-hours",
      component: <EducationOfficeHours />,
    },
  ];

  const componentsRoutes = [
    {
      path: "/components",
      component: <ComponentsPage />,
    },
  ];

  const projectsRoutes = [
    {
      path: "/projects/built-with-bos",
      component: <ProjectsBuiltWithBOS />,
    },
    {
      path: "/projects/native-projects",
      component: <ProjectsNativeProjects />,
    },
    {
      path: "/projects/bos-integration",
      component: <ProjectsBOSIntegration />,
    },
  ];

  const opportunitiesRoutes = [
    {
      path: "/opportunities/funding",
      component: <OpportunitiesFunding />,
    },
    {
      path: "/opportunities/accelerator",
      component: <OpportunitiesAccelerator />,
    },
    {
      path: "/opportunities/incubation",
      component: <OpportunitiesIncubation />,
    },
    {
      path: "/opportunities/amplification",
      component: <OpportunitiesAmplification />,
    },
  ];

  const routes = [
    ...eventRoutes,
    ...communitiesRoutes,
    ...educationRoutes,
    ...componentsRoutes,
    ...projectsRoutes,
    ...opportunitiesRoutes,
    {
      path: "/integrations",
      component: <Integrations />,
    },
    {
      path: "/infrastructure",
      component: <Infrastructure />,
    },
    {
      path: "/gateways",
      component: <Gateways />,
    },
    {
      path: "/homepage-selector",
      component: <HomeSelector />,
    },
    {
      path: "/about",
      component: <About />,
    },
  ];

  return (
    <RootLayout {...passProps}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path={"/flags"}>
            <Flags {...passProps} />
          </Route>
          <Route path={"/scanner"}>
            <NavigationWrapper {...passProps} />
          </Route>
          <Route path={"/create"}>
            <ViewPage overrideSrc={passProps.widgets.create} {...passProps} />
          </Route>
          {routes.map((route) => (
            <Route key={`${route.path}`} path={route.path}>
              <div className="container">{route.component}</div>
            </Route>
          ))}
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/projects"}>
            <Projects />
          </Route>
          <Route exact path={"/projects-form"}>
            <ProjectsForm />
          </Route>
          <Route path={"/:widgetSrc*"}>
            <BosLoaderBanner />
            <ViewPage {...passProps} />
          </Route>
        </Switch>
      </Router>
    </RootLayout>
  );
}

export default App;
