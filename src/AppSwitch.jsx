import { Route, Switch } from "react-router-dom";
import CodePage from "./pages/CodePage";
import NotFoundPage from "./pages/NotFoundPage";
import RandomPage from "./pages/RandomPage";
import TutorialPage from "./pages/TutorialPage";

const AppSwitch = () => (
  <Switch>
    <Route exact path="/" component={CodePage} />
    <Route exact path="/random" component={RandomPage} />
    <Route exact path="/tutorials" component={TutorialPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default AppSwitch