import { initApi } from '../api.service';
import { BASE_API, ENDPOINTS } from 'app/values/index';

const apiInstance = initApi(BASE_API.POSTMAN);

/**
 * This method will submit the
 * inputted feeling value
 * @param params Data to be submitted
 * @returns Api response
 */

export const submitFeelingValue = params => {
  return new Promise((resolve, reject) => {
    console.log('Parameter', params);
    apiInstance
      .postRequest(ENDPOINTS.POST, params)
      .then(success => {
        console.log('submitFeelingValue Success', success);
        if (success) {
          resolve(success);
        } else {
          reject(success);
        }
      })
      .catch(error => {
        console.log('submitFeelingValue Error', error);
        reject(error);
      });
  });
};
