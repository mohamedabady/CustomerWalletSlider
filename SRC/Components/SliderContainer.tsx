import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Switch, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { Button } from 'react-native-elements';
import TitleComponent from '../Custom/TitleComponent';
import { Colors, Fonts } from '../Utils/Constants';

interface SliderContainerProps { 
    returnToInitialState : ()=>void;
    numberOfShares: string;
    onTextValueChange: (textValue:string)=>void;
    children : React.ReactChild;
}

const SliderContainer = (props: SliderContainerProps) => {
    const [isCollapsed, setisCollapsed] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const toggleSwitch = () => {
        if (isActive) {
            setisCollapsed(true)
        }
        setIsActive(previousState => !previousState);
        props.returnToInitialState()
    };

    return (
        <View>
            <TitleComponent titleText={'Buy Shares'} />

            <View style={{ flexDirection: 'row', marginVertical: '3%', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Text style={{ marginEnd: 12, fontFamily: Fonts.Montessart_Light }}>{isActive ? 'Activated' : 'Deactivated'}</Text>
                <Switch
                    trackColor={{ false: "#767577", true: '#A9FEEE' }}
                    thumbColor={isActive ? Colors.Primary : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isActive}
                />
            </View>

            <TouchableOpacity
                style={{ alignSelf: 'flex-end', marginEnd: 2, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10, backgroundColor: isCollapsed ? Colors.Inactive : Colors.Primary }}
                disabled={isCollapsed}
                onPress={() => {
                    Keyboard.dismiss();
                    setisCollapsed(true);
                }}>
                <Text style={{ fontFamily: Fonts.Montessart_Regular, color: 'white' }}>Collapse</Text>
            </TouchableOpacity>

            <TouchableWithoutFeedback disabled={!isActive} onPress={() => isActive && setisCollapsed(false)}>
                <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: Colors.Inactive, marginBottom: 12 }}>
                    <Text style={{ width: '75%', fontFamily: Fonts.Montessart_Regular }}>number of shares</Text>
                    <TextInput
                        selectTextOnFocus={true}
                        value={props.numberOfShares}
                        editable={isActive}
                        keyboardType='number-pad'
                        style={{ fontFamily: Fonts.Montessart_Medium, fontSize: 16, width: '25%', borderBottomWidth: 1, borderBottomColor: isActive ? Colors.Primary : 'black', textAlign: 'right' }}
                        onFocus={() => isActive && setisCollapsed(false)}
                        onChangeText={(textValue)=>props.onTextValueChange(textValue)} />
                </View>
            </TouchableWithoutFeedback>


            <Collapsible style={{ justifyContent: 'center', alignItems: 'center', paddingTop:30 }} collapsed={isCollapsed}>
                {props.children}
            </Collapsible>
        </View>
    );
};

export default SliderContainer;

const styles = StyleSheet.create({
    container: {}
});
