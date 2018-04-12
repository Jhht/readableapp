/**
 * Create an object from given array
 */
export function objectFromArray(arr, key = 'id') {
  if (arr && arr.length) {
    return arr.reduce((v, i) => {
      v[i[key]] = i;
      return v;
    }, {});
  } else {
    return {};
  }

}

/**
 * Create an array from given object
 */
export function arrayFromObject(obj, key = 'id') {
  return Object.keys(obj).map(key => (obj[key]));
}

/**
 * Format date
 */
export function formatDate(timestamp) {
	const date = new Date( timestamp*1000);
 	const hours = date.getHours();
  	const minutes = "0" + date.getMinutes();
	const seconds = "0" + date.getSeconds();

    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}