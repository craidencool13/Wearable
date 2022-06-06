import React, { useState, useMemo, Fragment } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header, Slider, Icon, Button } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Text, View, Image, Alert, TouchableOpacity } from 'react-native';

import { ScrollContainer, Cards } from 'app/components/index';
import { Images, Colors, GStyle } from 'app/theme/index';
import { submitFeelingValue } from 'app/services/index';
import { WEARABLE_STATS } from 'app/values/index';
import { wearableStyle } from 'app/styles/index';

const Wearables = () => {
  const [feelingVal, setFeelingVal] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const activeEmoji = useMemo(() => {
    if (feelingVal <= 2) {
      return Images.ICONS.FEELING_1;
    } else if (feelingVal >= 3 && feelingVal <= 4) {
      return Images.ICONS.FEELING_2;
    } else if (feelingVal >= 5 && feelingVal <= 6) {
      return Images.ICONS.FEELING_3;
    } else if (feelingVal >= 7 && feelingVal <= 8) {
      return Images.ICONS.FEELING_4;
    } else {
      return Images.ICONS.FEELING_5;
    }
  }, [feelingVal]);

  const onSubmitFeeling = () => {
    submitFeelingValue({
      feelingValue: feelingVal,
    })
      .then(success => {
        console.log('Success', success);
        Alert.alert(JSON.stringify(success));
      })
      .catch(error => {
        console.log('Error', error);
        Alert.alert('Something went wrong. Please try again!');
      });
  };

  const onClickCard = () => {
    setIsActive(!isActive);
  };

  return (
    <ScrollContainer>
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
        }}
        centerComponent={{ text: 'Wearable', style: GStyle.headerTitle }}
      />

      <Grid>
        <Row>
          <Cards data={WEARABLE_STATS.STEPS} {...{ isActive, onClickCard }} />
          <Cards data={WEARABLE_STATS.FLOOR} {...{ isActive, onClickCard }} />
        </Row>
        <Row>
          <Cards data={WEARABLE_STATS.RUN} {...{ isActive, onClickCard }} />
          <Cards data={WEARABLE_STATS.ENERGY} {...{ isActive, onClickCard }} />
        </Row>
        <Row>
          <Cards data={WEARABLE_STATS.SLEEP} {...{ isActive, onClickCard }} />
          <Cards data={WEARABLE_STATS.HEART} {...{ isActive, onClickCard }} />
        </Row>
      </Grid>

      <View style={wearableStyle.feelingContainer}>
        <Text style={wearableStyle.greetings}>
          How are you feeling Melanie?
        </Text>
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
    </ScrollContainer>
  );
};

export default Wearables;
