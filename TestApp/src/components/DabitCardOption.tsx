import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import {BLUE_TEXT, GRAY, LIGHT_GREEN} from '../styles';

const DabitCardOption = ({
  item = {
    image: '',
    title: '',
    detail: '',
    isSelected: false,
  },
  index = 0,
}) => {
  const navigation = useNavigation();
  const [switchStatus, setSwitchStatus] = useState<boolean>(false);

  const onPressItem = () => {
    if (index === 1) {
      navigation.navigate('Spendinglimit');
    }
  };

  return (
    <TouchableOpacity onPress={onPressItem} style={styles.container}>
      <View style={styles.imgView}>
        <Image style={styles.img} source={item?.image} />
      </View>
      <View style={styles.subView}>
        <Text style={styles.txtTitle}>{item?.title}</Text>
        <Text style={styles.txtDetails}>{item?.detail}</Text>
      </View>
      {item?.isSelected === true ||
        (item?.isSelected === false && (
          <View style={styles.switchMainView}>
            <Switch
              thumbColor={'white'}
              value={switchStatus}
              onValueChange={setSwitchStatus}
              trackColor={{
                false: GRAY,
                true: LIGHT_GREEN,
              }}
              style={{transform: [{scaleX: 0.5}, {scaleY: 0.5}]}}
            />
          </View>
        ))}
    </TouchableOpacity>
  );
};

export default DabitCardOption;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  imgView: {
    width: 30,
    aspectRatio: 1,
    marginRight: 5,
  },
  img: {width: '100%', height: '100%', resizeMode: 'contain'},
  subView: {flex: 1},
  txtTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: BLUE_TEXT,
    marginBottom: 2,
  },
  txtDetails: {fontSize: 12, color: 'rgba(0,0,0,0.6)'},
  switchMainView: {
    height: '100%',
    alignSelf: 'flex-end',
    backgroundColor: 'white',
  },
});
