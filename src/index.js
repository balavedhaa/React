import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class StateManagement extends React.Component{
  constructor(){
    super()
    this.state=({os: "windows"})
  }
  windows = () =>this.setState = {os:"windows"}
  mac = () =>this.setState = {os:"mac"}
 linux = () =>this.setState = {os:"linux"}

  render(){
    return(
    
          <div>
            <h1>I am Using {this.state} machine</h1>
            <button>change to Mac</button>
            <button>change to linux</button>
            <button>change to windows</button>
            <br></br>
            <br></br>
            <App></App>
          </div>

    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateManagement />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
