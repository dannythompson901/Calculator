import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CalcKeys extends Component{
  render(){
    return(
        <View style={styles.calcKey}>
            <Text style = {styles.textDisplay} >{this.props.displayKey}</Text>
        </View>        
    );
  }
}

const styles = StyleSheet.create({
  calcKey:{   
    backgroundColor:"grey",
    flex:.25
  },
    
  textDisplay:{
    color:"goldenrod",
    textAlign:"center",
    fontSize:36,         
  }
    
});