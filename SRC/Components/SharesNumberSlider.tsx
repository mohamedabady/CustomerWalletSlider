import MultiSlider from '@ptomasroos/react-native-multi-slider';
import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts } from '../Utils/Constants';

interface SharesNumberSliderProps { 
    numberOfShares: number;
    walletBalance: number;
    stockPrice: number;
    onSliderValueChange: (value: number)=>void;
}

const SharesNumberSlider = (props: SharesNumberSliderProps) => {
    return (
        <View>
            <MultiSlider
                isMarkersSeparated={false}
                values={[props.numberOfShares]}
                min={0}
                max={props.walletBalance / props.stockPrice}
                step={5}
                selectedStyle={{ backgroundColor: Colors.Primary, height: 4 }}
                sliderLength={Dimensions.get('window').width * 0.85}
                //touchDimensions={{ height: 80, width: 80, slipDisplacement: 500, borderRadius: 5 }}
                onValuesChangeFinish = {(values)=>props.onSliderValueChange(values[0])}
                // onValuesChangeFinish={(values) => {
                //     this.setState({ numberOfShares: values[0] })
                // }}
                customMarker={(e) =>
                    <View>
                        <View style={{ marginTop: -30, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: Fonts.Montessart_Light, fontSize: 12, color: Colors.Inactive }}>{e.currentValue}</Text>
                            <View style={{ width: 1, height: 12, backgroundColor: Colors.Inactive, marginBottom: 4 }} />
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: 'white', width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: Colors.Inactive, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: 1, height: 12, backgroundColor: Colors.Inactive, marginHorizontal: 2 }} />
                            <View style={{ width: 1, height: 12, backgroundColor: Colors.Inactive, marginHorizontal: 2 }} />
                            <View style={{ width: 1, height: 12, backgroundColor: Colors.Inactive, marginHorizontal: 2 }} />
                        </View>
                    </View>
                }
            />
            <View style={{ alignSelf: 'flex-end' }}>
                <Text style={{ fontFamily: Fonts.Montessart_Light, fontSize: 12, color: 'black' }}>max shares you can buy</Text>
                <Text style={{ fontFamily: Fonts.Montessart_Light, fontSize: 12, color: Colors.Inactive, alignSelf: 'flex-end' }}>{(props.walletBalance / props.stockPrice).toFixed(0)}</Text>
            </View>
        </View>
    );
};

export default SharesNumberSlider;

const styles = StyleSheet.create({
    container: {}
});
