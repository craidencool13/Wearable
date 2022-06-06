import { Dimensions } from 'react-native';

export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;

/**
 * Calculate percentage value of screen height.
 * @param {number} percentage
 * @returns {number} calculated height
 */

export const calculateHeight = (percentage: number): number => {
  if (percentage > 1) {
    percentage = percentage / 100;
  }
  return Number(screenHeight * percentage);
};

/**
 * Calculate percentage value of screen width.
 * @param {number} percentage
 * @returns {number} calculated width
 */

export const calculateWidth = (percentage: number): number => {
  if (percentage > 1) {
    percentage = percentage / 100;
  }
  return Number(screenWidth * percentage);
};
