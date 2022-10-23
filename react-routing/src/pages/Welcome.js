import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h1>The welcome page</h1>
      <Route path="/welcome/new-user">
        <h2>Hello new user</h2>
      </Route>
    </>
  );
};

export default Welcome;
