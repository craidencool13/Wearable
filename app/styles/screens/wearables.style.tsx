import { StyleSheet } from 'react-native';

import { Colors, calculateWidth } from 'app/theme/index';

export const wearableStyle = StyleSheet.create({
  card: {
    height: calculateWidth(45),
    width: '100%',
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,

    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  active: {
    // backgroundColor: Colors.BACKGROUND.WHITE,
  },
  cardImage: {
    height: calculateWidth(20),
    width: calculateWidth(20),
    alignSelf: 'center',
  },
  value: {
    fontSize: 32,
    fontWeight: 'bold',
    // color: Colors.TEXT.DARK_BLUE,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    // color: Colors.TEXT.LIGHT_GRAY,
  },
  feelingContainer: {
    margin: 16,
    padding: 16,
    paddingRight: 0,
    borderRadius: 10,
    backgroundColor: Colors.BACKGROUND.WHITE,
    borderColor: Colors.BACKGROUND.SKY_BLUE,
    borderWidth: 1,
  },
  greetings: {
    fontSize: 20,
    color: Colors.TEXT.DARK_BLUE,
    textAlign: 'center',
    marginBottom: 10,
  },
  trackStyle: {
    height: 20,
    backgroundColor: 'rgba(58 58 58, 0.25)',
    borderRadius: 25,
  },
  thumbStyle: {
    height: 30,
    width: 30,
    backgroundColor: 'transparent',
  },
  indicatorContainer: {
    height: 32,
    width: 32,
    borderRadius: 25,
    backgroundColor: Colors.BACKGROUND.WHITE,
    borderColor: Colors.BACKGROUND.SKY_BLUE,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorImage: {
    height: 23,
    width: 23,
  },
  submitBtn: {
    padding: 0,
    margin: 0,
  },
});
