import './App.css';
import React, {Component} from 'react';

import Main from './components/main'
class App extends Component {
  state = {
  }

  render(){
    return (
      <div style={{height:"100%"}}>
          <div className="page-content" style={{marginTop: '56px'}}>
            <Main/>
          </div>
      </div>
    );
  }
}

export default App;
