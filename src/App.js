import React ,{Component} from 'react';
import './App.css';
import Main from './components/main/main';
class App extends Component {
  state = { 
    hours: 0,
    minutes: 0,
    seconds:0
  }
  
  render() { 
    return (
      <div>
        <Main />
        </div>
    );
  }
}
 
export default App;