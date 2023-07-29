import React from 'react';
import AdcView from '../commonComponents/AdcView';
import AdcCallBackAPI from '../commonComponents/AdcCallBackAPI';

const ReactNativeScreen = () => {
  return (
    <AdcView centerAlign flex1>
      <AdcCallBackAPI topic={'react'} />
    </AdcView>
  );
};

export default ReactNativeScreen;
