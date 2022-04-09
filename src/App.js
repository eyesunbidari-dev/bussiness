import Topbar from "./components/topbar/Topbar";

import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import News from "./components/news/News";
import Coop from "./components/cooperation/Coop";
import Contact from "./components/contact/Contact";
import Employ from "./components/employment/Employ";
import Intro from "./components/intro/Intro";

import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Honors from "./components/Honors/Honors";
function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Switch>
        <Route path="/" exact component={Intro}/>
        <Route path="/about" component={About}/>
        <Route path="/products" component={Portfolio}/>
        <Route path="/news" component={News}/>
        <Route path="/honors" component={Honors}/>
        <Route path="/coop" component={Coop}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/employ" component={Employ}/>
       
      

       </Switch>

       

     </div>
    </div>
  );
}

export default App;
