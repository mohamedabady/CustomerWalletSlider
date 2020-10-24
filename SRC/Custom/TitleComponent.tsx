import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts } from '../Utils/Constants';

interface TitleComponentProps {
    titleText: string
}

const SCREENWIDTH = Dimensions.get('window').width;

const TitleComponent = (props: TitleComponentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.titleText}</Text>
      <View style={{ flexDirection:'row'}}>
          <View style={{width:'50%', height:2, backgroundColor:Colors.Primary}}/>
          <View style={{width:'50%', height:2, backgroundColor:Colors.Gray}}/>
      </View>
    </View>
  );
};

export default TitleComponent;

const styles = StyleSheet.create({
    container:{
        paddingTop:'5%'
    },
    titleText:{
        color:Colors.Primary,
        fontSize: 16, 
        fontFamily: Fonts.Montessart_Medium,
        marginBottom:'3%'
    }
});
