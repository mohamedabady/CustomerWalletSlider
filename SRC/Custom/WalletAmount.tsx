import * as React from 'react';
import { Text, View, StyleSheet, StyleSheetProperties, ViewStyle, Dimensions } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { Colors, Fonts } from '../Utils/Constants';
import { ShortcutMoneyAmount } from '../Utils/Helpers'

interface WalletAmountProps {
  walletAmount: number
}

const WalletAmount = (props: WalletAmountProps) => {
  return (
    <View style={styles.headerStyle}>
      <View style={styles.container}>
        <SimpleLineIcons name="wallet" size={22} color={Colors.Primary} style={styles.icon} />
        <Text style={styles.moneyAmountText}>{ShortcutMoneyAmount(props.walletAmount)}</Text>
      </View>
    </View>
  );
};

export default WalletAmount;

const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerStyle:{
    backgroundColor:'white',
    width:'100%',
    height: HEIGHT*0.12,
    paddingHorizontal:20,
    alignItems:'flex-end',
    justifyContent:'center'
  },
  container: {
    borderWidth: 1,
    borderColor: Colors.Primary,
    borderRadius: 5,
    paddingHorizontal: 24,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  icon: {
    marginEnd: 12
  },
  moneyAmountText: {
    color: 'black',
    fontFamily: Fonts.Montessart_Bold,
    fontSize: 14
  }
});