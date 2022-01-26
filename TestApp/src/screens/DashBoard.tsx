import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DARK_BLUE,
  DARK_GREY,
  LIGHT_GREEN,
  WHITE,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../styles';
import {appImages} from '../styles/appImages';
import Header from '../components/Header';
import DollarSign from '../components/DollarSign';
import DabitCardOption from '../components/DabitCardOption';
import AtmCard from '../components/AtmCard';

function DashBoard() {
  const [isShowCardNumber, setIsShowCardNumber] = useState<boolean>(false);

  const Data = [
    {
      image: appImages.topUp,
      title: 'Top-up account',
      detail: 'Deposit money to your account to use with card',
    },
    {
      image: appImages.weeklyLimit,
      title: 'Weekly spending limit',
      detail: 'You haven’t set any spending limit on card',
      isSelected: false,
    },
    {
      image: appImages.FreezCard,
      title: 'Freeze card',
      detail: 'Your debit card is currently active',
      isSelected: false,
    },
    {
      image: appImages.card,
      title: 'Get a new card',
      detail: 'This deactivates your current debit card',
    },
    {
      image: appImages.deactivateCard,
      title: 'Deactivated cards',
      detail: 'Your previously deactivated cards',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 20}}>
        <Header />
        <Text style={styles.txtDebit}>Debit Card</Text>
        <Text style={styles.txtAvailable}>Available balance</Text>
        <View style={styles.mainViewAvailableBalance}>
          <DollarSign />
          <Text style={styles.txtAVailableBalance}>3,000</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.cardNumberView}>
          <TouchableOpacity
            onPress={() => {
              setIsShowCardNumber(!isShowCardNumber);
            }}
            style={styles.cardNumberTouch}>
            <View style={styles.imgViewCardShow}>
              <Image
                style={styles.imgCardShowHide}
                source={
                  isShowCardNumber ? appImages.disableEye : appImages.enableEye
                }
              />
            </View>
            <Text style={styles.txtCardShowHide}>
              {isShowCardNumber ? 'Hide' : 'Show'} card number
            </Text>
          </TouchableOpacity>
        </View>
        <AtmCard isHideCardNumber={!isShowCardNumber} />

        <View>
          <FlatList
            data={Data}
            style={{paddingTop: 10}}
            keyExtractor={(item, i) => `key-${i}`}
            renderItem={({item, index}) => (
              <DabitCardOption item={item} index={index} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_BLUE,
  },
  subView: {
    width: '100%',
    height: WINDOW_HEIGHT - 150,
    backgroundColor: DARK_GREY,
    borderTopStartRadius: WINDOW_WIDTH * 0.08,
    borderTopEndRadius: WINDOW_WIDTH * 0.08,
    flexDirection: 'column-reverse',
    overflow: 'hidden',
  },
  questionStyle: {
    color: WHITE,
    width: '95%',
    fontSize: 19,
    textAlign: 'center',
    marginTop: 40,
    lineHeight: 40,
  },
  missingWordStyle: {
    color: WHITE,
    width: '100%',
    textAlign: 'center',
    marginTop: 40,
  },
  popMainViewStyle: {flex: 1, alignItems: 'center'},
  popScrollViewStyle: {width: '100%'},
  popSubViewStyle: {flex: 1, alignItems: 'center'},
  textBlankStyle: {
    fontSize: 19,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  txtAnsBlankVIewSTyle: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    bottom: -5,
    borderRadius: 17,
    overflow: 'hidden',
    color: WHITE,
  },
  txtAnsView: {textDecorationLine: 'underline', color: WHITE},
  creditCardMainView: {
    width: WINDOW_WIDTH - 40,
    aspectRatio: 1.55,
    backgroundColor: LIGHT_GREEN,
    borderRadius: 10,
    marginTop: -10,
  },
  creditCardView: {
    aspectRatio: 1.75,
  },
  creditCardImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  },
  creditCardNumberText: {
    color: 'white',
    marginTop: '8%',
    marginLeft: '10%',
    width: '80%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  txtDebit: {
    fontSize: 25,
    color: WHITE,
    fontWeight: 'bold',
    marginTop: -20,
  },
  txtAvailable: {
    fontSize: 13,
    color: WHITE,
    marginTop: 20,
  },
  mainViewAvailableBalance: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  txtAVailableBalance: {
    fontSize: 22,
    color: WHITE,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  cardContainer: {
    width: WINDOW_WIDTH,
    flex: 1,
    backgroundColor: 'white',
    marginTop: 150,
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  cardNumberView: {
    height: 40,
    width: 160,
    marginTop: -150,
    right: 0,
    backgroundColor: WHITE,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  cardNumberTouch: {
    flexDirection: 'row',
    marginTop: -10,
  },
  imgViewCardShow: {
    width: 16,
    aspectRatio: 1,
    marginRight: 5,
  },
  imgCardShowHide: {width: '100%', height: '100%', resizeMode: 'contain'},
  txtCardShowHide: {fontSize: 12, fontWeight: '600', color: LIGHT_GREEN},
});

export default DashBoard;
