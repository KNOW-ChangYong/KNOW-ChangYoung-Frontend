import { GlobalStyled } from "./styles/GlobalStyled";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Main from "./components/Main/Main";
import Modal from "./components/Modals/Modal";
import Login from "./components/Login/Login";
import kakao from "./components/Kakao/Kakao";
function App() {
  return (
    <Router>
      <GlobalStyled></GlobalStyled>
      <Modal></Modal>
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/kakao" component={kakao}></Route>
    </Router>
  );
}

export default App;
