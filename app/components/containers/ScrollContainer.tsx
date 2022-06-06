import React from 'react';
import { ScrollView } from 'react-native';

import { GStyle } from 'app/theme/index';

const ScrollContainer = ({ children, styles = {}, ...rest }) => {
  return (
    <ScrollView style={[GStyle.mainContainer, styles]} {...rest}>
      {children}
    </ScrollView>
  );
};

export default ScrollContainer;
