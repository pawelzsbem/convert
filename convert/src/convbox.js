import React from 'react';
//import ReactDOM from 'react-dom';
//import Convert from './conv.js';

class ConvertBox extends React.Component{

    constructor(props){

        super(props)
    }

    render(){

        return <>
            <fieldset>
                <legend>insert temperature</legend>

                    <label for="inpt">{ this.props.tmprName === "c"? "Celsius" : "Farenheit"}</label> <br/>
                    <input type="number" id="inpt" onChange = {(event) => this.props.changeTmpr(event, this.props.tmprName) } value = {this.props.tmprVal} />
            
            </fieldset>
            </>

    }

    

}


export default ConvertBox;