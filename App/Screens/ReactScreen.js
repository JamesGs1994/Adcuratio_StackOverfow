import React from 'react';
import AdcView from '../commonComponents/AdcView';
import AdcCallBackAPI from '../commonComponents/AdcCallBackAPI';
import AdcText from '../commonComponents/AdcText';

const ReactScreen = () => {
  return (
    <AdcView centerAlign flex1>
      <AdcView row sPaddingBottom paddingTop borderLine>
        <AdcText topQuestion>{`Top Questions`}</AdcText>
      </AdcView>
      <AdcCallBackAPI topic={'react'} />
    </AdcView>
  );
};

export default ReactScreen;
