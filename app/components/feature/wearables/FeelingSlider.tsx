import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Row, Col } from 'react-native-easy-grid';
import { Slider, Button } from 'react-native-elements';
import { View, Text, Image } from 'react-native';

import { IFeelingSliderParams } from 'app/models/index';
import { Colors } from 'app/theme/index';
import { wearableStyle } from 'app/styles/index';

const FeelingSlider = ({
  feelingVal,
  setFeelingVal,
  activeEmoji,
  onSubmitFeeling,
}: IFeelingSliderParams) => {
  return (
    <View style={wearableStyle.feelingContainer}>
      <Text style={wearableStyle.greetings}>How are you feeling Melanie?</Text>
      <Row>
        <Col size={10}>
          <Slider
            value={feelingVal}
            onValueChange={setFeelingVal}
            maximumValue={10}
            minimumValue={0}
            step={1}
            trackStyle={wearableStyle.trackStyle}
            thumbStyle={wearableStyle.thumbStyle}
            thumbProps={{
              children: (
                <View style={wearableStyle.indicatorContainer}>
                  <Image
                    resizeMode={'contain'}
                    source={activeEmoji}
                    style={wearableStyle.indicatorImage}
                  />
                </View>
              ),
            }}
          />
        </Col>
        <Col size={2}>
          <Button
            onPress={onSubmitFeeling}
            style={wearableStyle.submitBtn}
            icon={
              <Ionicons
                name="chevron-forward"
                size={25}
                color={Colors.BACKGROUND.SKY_BLUE}
              />
            }
            type="clear"
          />
        </Col>
      </Row>
    </View>
  );
};

export default FeelingSlider;
