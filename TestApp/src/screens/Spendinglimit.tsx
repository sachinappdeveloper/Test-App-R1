import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';
import ButtonWithStatus from '../components/SaveButton';
import {
  DARK_BLUE,
  DARK_GREY,
  GRAY,
  GRAY_TEXT,
  LIGHT_GREEN,
  WHITE,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../styles';
import {appImages} from '../styles/appImages';
import Header from '../components/Header';
import DollarSign from '../components/DollarSign';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

function Spendinglimit() {
  const navigation = useNavigation();
  const onPressContinueButton = () => {};
  const [limitValue, setLimitValue] = useState<number>(0);

  const Data = [{amount: '5,000'}, {amount: '10,000'}, {amount: '20,000'}];

  const Amount = ({item = {amount: 0}}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setLimitValue(item?.amount);
        }}
        style={styles.amountView}>
        <View>
          <Text style={{color: '#01D167'}}>S$ {item?.amount}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 20}}>
        <Header
          isShowBack={true}
          onBackPress={() => {
            navigation.goBack();
          }}
        />
        <Text
          style={{
            fontSize: 25,
            color: WHITE,
            fontWeight: 'bold',
          }}>
          Spending limit
        </Text>
      </View>

      <View style={styles.spendingLimitView}>
        <View style={styles.limitHeaderView}>
          <View style={styles.meterView}>
            <Image style={styles.imageMeter} source={appImages.meterIcon} />
          </View>
          <View style={{justifyContent: 'center', marginLeft: 10}}>
            <Text style={{fontSize: 14}}>
              Set a weekly debit card spending limit
            </Text>
          </View>
        </View>
        <View style={styles.txtFieldMainView}>
          <DollarSign />
          <View style={styles.textInputView}>
            <TextInput
              style={styles.txtFieldAmount}
              value={limitValue}
              keyboardType="numeric"
              onChange={setLimitValue}
            />
          </View>
        </View>

        <View style={styles.weeklyView}>
          <Text style={styles.txtWeekly}>
            Here weekly means the last 7 days - not the calendar week
          </Text>
        </View>

        <View style={{width: '100%'}}>
          <FlatList
            data={Data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, i) => `key-${i}`}
            renderItem={({item, index}) => <Amount item={item} />}
          />
        </View>
        <View style={{flex: 1}}></View>

        <ButtonWithStatus />
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
  textInputView: {paddingLeft: 10, flex: 1},
  amountView: {
    width: WINDOW_WIDTH / 3,
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: 'rgba(32, 209, 103, 0.07)',
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  weeklyView: {width: '100%', alignItems: 'center', marginTop: 10},
  spendingLimitView: {
    width: WINDOW_WIDTH,
    flex: 1,
    backgroundColor: 'white',
    marginTop: 50,
    paddingHorizontal: 20,
    paddingTop: 20,
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  limitHeaderView: {width: '100%', flexDirection: 'row'},
  meterView: {
    width: 20,
    aspectRatio: 1,
    marginRight: 5,
  },
  imageMeter: {width: '100%', height: '100%', resizeMode: 'contain'},
  txtFieldMainView: {
    marginTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: GRAY,
    flexDirection: 'row',
  },
  txtFieldAmount: {flex: 1, fontSize: 18, fontWeight: '600'},
  txtWeekly: {fontSize: 13, color: GRAY_TEXT},
});

export default Spendinglimit;
