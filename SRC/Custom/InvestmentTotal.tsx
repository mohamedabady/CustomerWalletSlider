import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Fonts } from '../Utils/Constants';

interface InvestmentTotalProps {
    investmentAmount: number
}

const InvestmentTotal = (props: InvestmentTotalProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.labelText}>Expected Investment</Text>
            <Text style={styles.amountText}>EGP  {props.investmentAmount}</Text>
        </View>
    );
};

export default InvestmentTotal;

const styles = StyleSheet.create({
    container: {
        marginVertical: '8%',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    labelText:{
        fontFamily:Fonts.Montessart_Medium,
        fontSize:18,
        color:'black'
    },
    amountText:{
        fontFamily:Fonts.Montessart_Bold,
        fontSize:18,
        color:'black'
    }
});
