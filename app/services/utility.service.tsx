export const serializeParams = obj => {
  var str = '';
  for (var key in obj) {
    if (str !== '') {
      str += '&';
    }
    str += key + '=' + encodeURIComponent(obj[key]);
  }
  return `?${str}`;
};
