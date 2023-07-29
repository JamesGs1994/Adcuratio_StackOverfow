import React from 'react';
import {View} from 'react-native';
import {intersection, keys, get, pickBy, map} from 'lodash';
import CommonStyle from '../Styles/CommonStyle';

const AdcView = props => {
  const classNames = keys(pickBy(props, Boolean));
  const matchingStyles = map(
    intersection(classNames, keys(CommonStyle)),
    style => get(CommonStyle, style),
  );
  return (
    <View
      {...props}
      style={[CommonStyle.defaultView, ...matchingStyles]}></View>
  );
};
export default AdcView;
