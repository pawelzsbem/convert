import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Convert extends React.Component{
  constructor(props){

    super(props);
    this.state = {
      cel : 0,
      far : 0
    }
  }

  changeCel(event, kind){
    const tmp = parseFloat(event.target.value);
    switch(kind){
      case("c"):
        
        this.setState({ cel: tmp, far: tmp * 9 / 5 + 32  });
        return;
      case("f"):

      this.setState({ cel: ((tmp - 32) * 5 )/9, far: tmp });
      return;
  
    }
  }


  render(){


    return <>
    <label for="celsin">Celsius</label>
    <input type="number" id="celsin" onChange = {(event) => this.changeCel(event, "c") } value = {this.state.cel} />
    <label for="farin" value = {this.state.far}>Farenheit</label>
    <input type="number" id="farin" value={this.state.far} onChange = {(event) => this.changeCel(event, "f") } />
    </>
  }



}


ReactDOM.render(
  <Convert></Convert>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

