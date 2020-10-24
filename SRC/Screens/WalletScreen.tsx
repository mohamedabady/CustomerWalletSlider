import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native'
import PricePerShare from '../Components/SharePriceComponent';
import CallToAction from '../Components/CallToActionComponent';
import WalletAmount from '../Custom/WalletAmount'
import SliderContainer from '../Components/SliderContainer';
import SharesNumberSlider from '../Components/SharesNumberSlider';
import InvalidStockNumberComponent from '../Components/InvalidStockNumberComponent';

interface IProps {

}

interface IState {
  walletBalance: number;
  stockPrice: number;
  numberOfShares: number;
  isFormValid: boolean;
}

const ScreenWidth = Dimensions.get('window').width;

class CustomerWallet extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      walletBalance: 164000,
      stockPrice: 70.5,
      numberOfShares: 0,
      isFormValid: true
    }
  }

  onTextValueChange = (textValue) => {
    this.setState({ numberOfShares: textValue ? parseInt(textValue) : 0 }, () => {
      if (this.state.numberOfShares > (this.state.walletBalance / this.state.stockPrice)) {
        this.setState({ isFormValid: false })
      } else {
        this.setState({ isFormValid: true })
      }
    })
  }

  returnToInitialState = () => {
    this.setState({
      numberOfShares: 0,
      isFormValid: true
    })
  }

  render() {
    const { numberOfShares, stockPrice, isFormValid, walletBalance } = this.state;
    return (
      <View>
        <WalletAmount walletAmount={walletBalance - (numberOfShares * stockPrice) >= 0 ? walletBalance - (numberOfShares * stockPrice) : 0} />

        <KeyboardAvoidingView behavior='position' style={{ paddingHorizontal: '3%', width: ScreenWidth }}>
          <SliderContainer
            returnToInitialState={() => this.returnToInitialState()}
            numberOfShares={numberOfShares.toString()}
            onTextValueChange={(value) => this.onTextValueChange(value)}
          >
            {isFormValid ?
              <SharesNumberSlider
                numberOfShares={numberOfShares}
                walletBalance={walletBalance}
                stockPrice={stockPrice}
                onSliderValueChange={(value) => this.setState({ numberOfShares: value })} /> :
              <InvalidStockNumberComponent
                walletBalance={walletBalance}
                stockPrice={stockPrice}
                resetNumberOfShares={() => this.setState({ numberOfShares: parseInt((walletBalance / stockPrice).toFixed(0)), isFormValid: true })} />}
          </SliderContainer>
          
          <PricePerShare stockPrice={stockPrice} />
        
        </KeyboardAvoidingView>

        <CallToAction
          investmentAmount={numberOfShares<= (walletBalance/stockPrice) ? numberOfShares * stockPrice : walletBalance}
          isFormValid={isFormValid && numberOfShares > 0} />

      </View>
    )
  }
}

export default CustomerWallet;

const Styles = StyleSheet.create({

})