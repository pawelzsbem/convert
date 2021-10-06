import React from 'react';
//import ReactDOM from 'react-dom';
import ConvertBox from './convbox.js';

class Convert extends React.Component{
    constructor(props){
  
      super(props);
      this.state = {
        cel : 0,
        far : 0
      };
      this.changeCel = this.changeCel.bind(this);
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

        default:
            return;
    
      }
    }
  
  
    render(){
        
  
  
      return <>
      
      <ConvertBox tmprVal={this.state.cel} tmprName="c" changeTmpr={this.changeCel}></ConvertBox>
      <ConvertBox tmprVal={this.state.far} tmprName="f" changeTmpr={this.changeCel}></ConvertBox>
      </>
    }
  
  
  
  }

  export default Convert;