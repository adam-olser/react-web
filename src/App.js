import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import {Switch, Route} from "react-router-dom"
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Switch>
        <Route path='/' exact component={AboutUs}/>
        <Route path='/work/:id' component={MovieDetail} exact/>
        <Route path='/work' component={OurWork}/>
        <Route path='/contact' component={ContactUs}/>
      </Switch>
    </div>
  );
}

export default App;
