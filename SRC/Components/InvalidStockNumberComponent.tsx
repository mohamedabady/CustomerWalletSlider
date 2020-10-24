import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Colors, Fonts } from '../Utils/Constants';

interface InvalidStockNumberComponentProps {
    walletBalance : number;
    stockPrice : number;
    resetNumberOfShares : ()=>void;
 }

const InvalidStockNumberComponent = (props: InvalidStockNumberComponentProps) => {
    return (
        <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontFamily: Fonts.Montessart_Light, color: Colors.WarningRed, fontSize: 14, marginBottom: 20 }}>You don't have enough funds to buy this many stocks</Text>
            <Button
                onPress={() => props.resetNumberOfShares()}
                title={'Reset to maximum value ' + (props.walletBalance / props.stockPrice).toFixed(0).toString()}
                buttonStyle={{
                    backgroundColor: Colors.Primary,
                    borderRadius: 5,
                    height: 50,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                titleStyle={{
                    fontFamily: Fonts.Montessart_Medium,
                    fontSize: 16,
                    color: 'white'
                }} />
        </View>
    );
};

export default InvalidStockNumberComponent;

const styles = StyleSheet.create({
    container: {}
});
