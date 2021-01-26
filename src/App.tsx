import { GlobalStyled } from "./styles/GlobalStyled";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Main from "./components/Main/Main";
function App() {
  return (
    <Router>
      <GlobalStyled></GlobalStyled>
      <Route exact path="/" component={Main}></Route>
    </Router>
  );
}

export default App;
