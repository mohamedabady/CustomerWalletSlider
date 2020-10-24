import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TitleComponent from '../Custom/TitleComponent';
import { Colors, Fonts } from '../Utils/Constants';

interface PricePerShareProps {
    stockPrice: number
}

const PricePerShare = (props: PricePerShareProps) => {
    return (
        <View>
            <TitleComponent titleText={'At Market Price'} />
            <View style={styles.containerStyle}>
                <Text style={styles.labelText}>Price per share around</Text>
                <Text style={styles.priceText}>{props.stockPrice}</Text>
            </View>
        </View>
    );
};

export default PricePerShare;

const styles = StyleSheet.create({
    containerStyle: {
        paddingVertical: '3%', 
        marginTop: '3%', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        borderBottomWidth: 0.5, 
        borderBottomColor: Colors.Inactive
    },
    labelText: {
        fontFamily: Fonts.Montessart_Regular,
        fontSize: 14
    },
    priceText: {
        fontFamily: Fonts.Montessart_Regular,
        fontSize: 18
    }
});
