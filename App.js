import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CalcKeys from "./components/CalcKeys.js";
import OperatorKeys from "./components/OperatorKeys.js";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display:"1",
      numerator:"",
      denominator:"",
      operator:"",
      switchFractionSection:false
      }
  }

  clear(){
    this.setState((state, props) => ({ display:""}));
console.log("working");    
  }

  evalutate(x,y,operator){
    if(operator == "+" ){
      this.setState((state, props) => ({ display: parseInt(x) + parseInt(y) }))
      this.setState((state, props) => ({ switchFractionSection: false }))
    }
  }

  addNumber(x){
    this.setState((state, props) => ({ display: state.display + x }))    
    if(this.state.switchFractionSection ==true){
      this.setState((prevState) =>({denominator:x}))
    }else{
      this.setState((prevState) => ({numerator:x}))
    }
  }

  operatorSymbol(x){
    this.setState((state, props)=>({display:state.display + x}))
    this.setState((state, props) => ({ operator: x }))
    this.setState((state, props) => ({switchFractionSection:true }))
  }    
  render() {
    return (
      <View style={styles.container}>
        <View >
            <Text style={styles.title}>Calculator</Text>
        </View>
        <View style={styles.display}>
            <Text style={styles.title}>{this.state.display}</Text>
        </View>
        <View style={styles.calcKeyRow}>
            <CalcKeys displayKey="1" onClick={()=> this.addNumber("1")} />
            <CalcKeys displayKey="2" />
            <CalcKeys displayKey="3" />
        </View>
        <View style={styles.calcKeyRow}>
            <CalcKeys displayKey="4" />
            <CalcKeys displayKey="5" />
            <CalcKeys displayKey="6" />
        </View>
        <View style={styles.calcKeyRow}>
            <CalcKeys displayKey="7" />
            <CalcKeys displayKey="8" />
            <CalcKeys displayKey="9" />
        </View>
        <View style={styles.calcKeyRow}>
            <CalcKeys displayKey="0" />
            <CalcKeys onClick={()=> this.clear()} displayKey="Clear" />
            <CalcKeys displayKey="Go" />
        </View>
        <View style={styles.calcKeyRow}>
            <OperatorKeys displayKey="+" />
            <OperatorKeys displayKey="-" />
            <OperatorKeys displayKey="*" />
            <OperatorKeys displayKey="/" />
        </View>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent:"space-around",
  },
    
  display:{
    display:"flex",
    justifyContent:"center",
    alignContent:"center",
    backgroundColor:"white",
    width:"70%",
    height:"10%",
    //textAlign:"center",
  },
    
  title: {    
    color:"goldenrod",
    textAlign:"center",
    fontSize:36,
  },
    
  calcKeyRow:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    width:"100%",
  },
    
  calcKey:{
    backgroundColor:"grey",
    flex:.3,
  },
    
  operatorCalcKey:{
    backgroundColor:"grey",
    flex:.2,
  }
});
