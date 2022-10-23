import { Route, NavLink } from "react-router-dom";

import AddQuote from "./pages/AddQuote";

function App() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/add-quote">
            <AddQuote />
          </NavLink>
        </li>
      </ul>
      {/* <Route to="add-quote" /> */}
    </div>
  );
}

export default App;
