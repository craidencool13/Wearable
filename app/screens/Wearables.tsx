import React, { useState, useMemo } from 'react';
import { Header } from 'react-native-elements';
import { Row, Grid } from 'react-native-easy-grid';
import { Alert } from 'react-native';

import { ScrollContainer, Cards, FeelingSlider } from 'app/components/index';
import { Images, Colors, GStyle } from 'app/theme/index';
import { submitFeelingValue } from 'app/services/index';
import { WEARABLE_STATS } from 'app/values/index';

const Wearables = () => {
  const [feelingVal, setFeelingVal] = useState(0);

  /**
   * Memoized emoji based on the
   * current feeling value
   */

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

  /**
   * This method will submit the feeling
   * value to postman api
   */
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

  return (
    <ScrollContainer>
      <Header
        leftComponent={{
          icon: 'menu',
          color: Colors.TEXT.DARK_BLUE,
        }}
        centerComponent={{ text: 'Wearable', style: GStyle.headerTitle }}
        backgroundColor={Colors.BACKGROUND.WHITE}
      />

      <Grid>
        <Row>
          <Cards data={WEARABLE_STATS.STEPS} />
          <Cards data={WEARABLE_STATS.FLOOR} />
        </Row>
        <Row>
          <Cards data={WEARABLE_STATS.RUN} />
          <Cards data={WEARABLE_STATS.ENERGY} />
        </Row>
        <Row>
          <Cards data={WEARABLE_STATS.SLEEP} />
          <Cards data={WEARABLE_STATS.HEART} />
        </Row>
      </Grid>

      <FeelingSlider
        {...{
          feelingVal,
          setFeelingVal,
          activeEmoji,
          onSubmitFeeling,
        }}
      />
    </ScrollContainer>
  );
};

export default Wearables;
