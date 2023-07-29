import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {navigate} from '../NavServices/NaviagtionService';
import AdcView from '../commonComponents/AdcView';

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate('BottomTabScreen', {
        screen: 'React',
      });
    }, 2000);
  }, []);
  return (
    <AdcView centerAlign flex1>
      <LottieView
        source={require('../Assets/SplashScreen.json')}
        autoPlay
        loop={true}
        style={styles.animation}
      />
    </AdcView>
  );
};
const styles = StyleSheet.create({
  animation: {
    width: '100%',
    height: '100%',
  },
});
export default SplashScreen;
