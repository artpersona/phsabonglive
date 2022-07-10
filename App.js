import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.header__text}>Go Perya</Text>
      </View> */}

      <View style={styles.image__container}>
        <Image
          source={require('./assets/playstore.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://peryazone.com/r/C-6A9BDEE2')}
        style={{width: '80%'}}>
        <LinearGradient
          colors={['#40ff1f', '#4fd638', '#297a1b']}
          // start={[0, 1]}
          // end={[1, 0]}
          style={styles.button}>
          <Text style={styles.button__text}>PLAY</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dce5f2',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#212121',
    width: '100%',
    height: 65,
    justifyContent: 'center',
  },
  header__text: {
    color: 'white',
    fontSize: RFValue(19),
    marginLeft: '5%',
    fontWeight: 'bold',
  },

  image__container: {
    width: deviceWidth / 1.3,
    height: deviceWidth / 1.3,
    marginTop: '10%',
  },
  image: {
    width: '100%',
    height: '100%',
  },

  button: {
    height: 180,
    width: 180,
    backgroundColor: 'white',
    borderRadius: RFValue(500),
    marginTop: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    alignSelf: 'center',
  },

  button__text: {
    fontSize: RFValue(45),
    fontWeight: 'bold',
    color: 'white',
  },
});
