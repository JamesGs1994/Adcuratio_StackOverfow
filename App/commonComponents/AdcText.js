import React from 'react';
import {Text} from 'react-native-elements';
import {intersection, keys, get, map} from 'lodash';
import CommonStyle from '../Styles/CommonStyle';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const AdcText = props => {
  const {onChange, style, alignSelf, margin, ...otherProps} = props;

  let classNames = [];

  for (const property in props) {
    if (props[property] === true) {
      classNames.push(property);
    }
  }
  const matchingStyles = intersection(classNames, keys(CommonStyle)).map(s =>
    get(CommonStyle, s),
  );
  let finalStyles = {};
  map(matchingStyles, ms => {
    finalStyles = {...finalStyles, ...ms};
  });

  return <Text {...otherProps} style={[finalStyles, style]} />;
};
export default AdcText;
