import React, { Component } from 'react';
import { HashRouter} from "react-router-dom";
import './App.css';
import OscarTime from './companents/OscarTime';



class App extends Component {
  render() {
    return (
      <HashRouter>      
           <div className = 'app-wrapper' >  
           <div className = 'app-wrapper-content'>            
     
           < OscarTime/>
          
           </div>
    </div>
      </HashRouter>
    );
  }
}
export default App;

