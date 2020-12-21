import React from "react";
import './App.css'
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage"
import RecommendedVideos from "./RecommendedVideos"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./Header";

function App() {
  return (
    <div className="app">
        <Router>
          <Header/>
          <Switch>
            <Router path="/search/:searchTerm">
              <div className="app__page">
                     <Sidebar/>
                     <SearchPage />
                </div>

            </Router>
            <Router path="/">
                <div className="app__page">
                     <Sidebar/>
                     <RecommendedVideos />
                </div>
            </Router>
            
          </Switch>
        </Router>
     
    </div>
  );
}

export default App;
