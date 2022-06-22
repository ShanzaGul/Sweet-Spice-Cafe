import React from 'react'
import './App.css';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import Menu from './components/Menu'
import Location from './components/Location'
import About from './components/About'
import Footer from './components/Footer';
import Breakfast from './components/Breakfast'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import OrderOnline from './components/OrderOnline';
import Specials from './components/Specials';
import Lunch from './components/Lunch';



function App() {
  
  return (
    <Router>
        <div className="App">
            <Header />
              <Switch>
              
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/locations" component={Location} />
              <Route path="/about" component={About} />
              <Route exact path="/menu" component={Menu}/>
              <Route path="/order" component={OrderOnline}/>
              <Route  path="/menu/breakfast" children={  <Breakfast />}></Route>
              <Route path="/menu/lunch" component={Lunch}/>
              <Route path="/menu/specials" component={Specials}/>

              </Switch>
          

            <Footer />

          </div>
     </Router>
  );
}

export default App;
