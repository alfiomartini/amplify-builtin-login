import "./App.css";
import { Amplify } from "aws-amplify";
import awsConfig from "./aws-exports";
import { withAuthenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { Navbar } from "./components/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsConfig);

function App() {
  const { signOut } = useAuthenticator();
  return (
    <div>
      <Navbar user={{}} signOut={signOut} />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <h2>Testing Amplify API - Built-in UI</h2>
          </Route>
          <Route path="/signOut">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
