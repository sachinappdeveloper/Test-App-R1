import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import {LIGHT_GREEN, WINDOW_WIDTH} from '../styles';
import {appImages} from '../styles/appImages';

const AtmCard = ({isHideCardNumber = false}) => {
  return (
    <View style={styles.creditCardMainView}>
      <View style={styles.aspireMainView}>
        <Image style={styles.imgAspire} source={appImages.aspireLogo} />
      </View>

      <Text style={styles.creditCardNumberText}>Mark Henry</Text>
      <Text style={styles.txtCardNumber}>
        {isHideCardNumber
          ? '* * * *   * * * *   * * * *   4 5 1 2'
          : '2 5 3 2   5 6 4 5   4 1 2 5   4 5 1 2'}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.txtExpireDate}>{'Thru: 12/20'}</Text>
        <Text style={styles.txtCVV}>{`CVV: ${
          isHideCardNumber ? '***' : '456'
        }`}</Text>
      </View>
      <View style={styles.visaView}>
        <Image style={styles.imgVisa} source={appImages.visaLogo} />
      </View>
    </View>
  );
};

export default AtmCard;

const styles = StyleSheet.create({
  creditCardMainView: {
    width: WINDOW_WIDTH - 40,
    aspectRatio: 1.55,
    backgroundColor: LIGHT_GREEN,
    borderRadius: 10,
    marginTop: -10,
  },
  creditCardNumberText: {
    color: 'white',
    marginTop: '8%',
    marginLeft: '10%',
    width: '80%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  aspireMainView: {
    width: '35%',
    height: '12%',
    marginLeft: '60%',
    marginTop: '5%',
  },
  imgAspire: {width: '100%', height: '100%', resizeMode: 'contain'},
  txtCardNumber: {
    color: 'white',
    marginTop: '7%',
    marginLeft: '10%',
    width: '80%',
    fontSize: 16,
  },
  txtExpireDate: {
    color: 'white',
    marginTop: '4%',
    marginLeft: '10%',
    fontSize: 12,
  },
  txtCVV: {
    color: 'white',
    marginTop: '4%',
    width: '80%',
    marginLeft: '10%',
    fontSize: 12,
  },
  visaView: {
    width: '35%',
    height: '10%',
    marginLeft: '65%',
    marginTop: '5%',
  },
  imgVisa: {width: '100%', height: '100%', resizeMode: 'contain'},
});
