import React from 'react';
import AdcView from '../commonComponents/AdcView';
import AdcCallBackAPI from '../commonComponents/AdcCallBackAPI';

const NodeScreen = () => {
  return (
    <AdcView centerAlign flex1>
      <AdcCallBackAPI topic={'nodejs'} />
    </AdcView>
  );
};

export default NodeScreen;
