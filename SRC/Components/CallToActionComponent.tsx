import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import InvestmentTotal from '../Custom/InvestmentTotal';
import { Colors, Fonts } from '../Utils/Constants';

const ScreenWidth = Dimensions.get('window').width;

interface SubmitActionProps {
    investmentAmount: number,
    isFormValid: boolean
}

const SubmitAction = (props: SubmitActionProps) => {
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return (
        <View style={{ width: ScreenWidth, padding: '3%' }}>
            <InvestmentTotal investmentAmount={numberWithCommas(props.investmentAmount)} />
            <Button
                title={props.isFormValid ? 'Submit' : 'Review Order'}
                disabled={!props.isFormValid}
                titleStyle={Styles.buttonTitle}
                buttonStyle={Styles.buttonContainer}
                type='solid' />
        </View>
    );
};

export default SubmitAction;

const Styles = StyleSheet.create({
    container: {},
    buttonTitle: {
        fontFamily: Fonts.Montessart_Medium,
        fontSize: 16,
        color: 'white'
    },
    buttonContainer: {
        backgroundColor: Colors.Primary,
        borderRadius: 5,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
