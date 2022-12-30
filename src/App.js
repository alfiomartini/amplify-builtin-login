import "./App.css";
import { Amplify } from "aws-amplify";
import awsConfig from "./aws-exports";
import { withAuthenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsConfig);

function App() {
  const { signOut } = useAuthenticator();
  return (
    <div className="App">
      <h2>Hello Amplify</h2>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}

export default withAuthenticator(App);
