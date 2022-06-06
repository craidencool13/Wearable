import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Col } from 'react-native-easy-grid';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { ICardParams } from 'app/models/index';
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
    displayArrow,
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
        <View style={wearableStyle.labelContainer}>
          <Text
            style={[
              wearableStyle.label,
              { color: isActive ? activeTextColor : Colors.TEXT.LIGHT_GRAY },
            ]}>
            {label}
          </Text>
          {displayArrow && (
            <Ionicons
              name="chevron-forward"
              size={18}
              color={Colors.TEXT.LIGHT_GRAY}
            />
          )}
        </View>
      </TouchableOpacity>
    </Col>
  );
};

export default Cards;
