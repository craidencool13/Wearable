import React, { useState } from 'react';
import { Col } from 'react-native-easy-grid';
import { Text, Image, TouchableOpacity } from 'react-native';

import { ICardData, ICardParams } from 'app/models/index';
import { wearableStyle } from 'app/styles/index';
import { Colors } from 'app/theme/index';

const Cards = ({ data }: ICardParams) => {
  const [isActive, setIsActive] = useState(false);
  const {
    image,
    image_active,
    activeBgColor,
    activeTextColor,
    value,
    label,
    hasButton,
  } = data;
  return (
    <Col
      size={6}
      style={[
        wearableStyle.card,
        { backgroundColor: isActive ? activeBgColor : Colors.BACKGROUND.WHITE },
      ]}>
      <TouchableOpacity onPress={() => setIsActive(!isActive)}>
        <Image
          resizeMode={'contain'}
          source={isActive ? image_active : image}
          style={wearableStyle.cardImage}
        />
        <Text
          style={[
            [
              wearableStyle.value,
              { color: isActive ? activeTextColor : Colors.TEXT.DARK_BLUE },
            ],
          ]}>
          {value}
        </Text>
        <Text
          style={[
            wearableStyle.label,
            { color: isActive ? activeTextColor : Colors.TEXT.LIGHT_GRAY },
          ]}>
          {label}
        </Text>
      </TouchableOpacity>
    </Col>
  );
};

export default Cards;
