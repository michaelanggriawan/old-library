/* eslint-disable import/prefer-default-export */
import moment from 'moment';
import 'moment/locale/id';
import * as v from 'voca';

export const dateFormat = (date, format) => {
  let dateformat;
  // const newDate = !v.isEmpty(date) ? date : new Date();
  const newDate = date;

  switch (format) {
    case 'jp':
      dateformat = moment(newDate).format('YYYY-MM-DD');
      break;
    case 'custom-thw':
      dateformat = moment(newDate).format('D MMM YYYY');
      break;
    case 'YYYY-MM-DD':
      dateformat = moment(newDate).format('YYYY-MM-DD');
      break;
    case 'DD-MMM-YYYY':
      dateformat = moment(newDate).format('DD MMM YYYY');
      break;
    case 'MMMM-YYYY-id':
      dateformat = moment(newDate).locale('id').format('MMMM YYYY');
      break;
    case 'MMMM-YYYY-en':
      dateformat = moment(newDate).locale('en').format('MMMM YYYY');
      break;
    case 'DD-MMMM-YYYY':
      dateformat = moment(newDate).format('DD MMMM YYYY');
      break;
    default:
      if (!v.isEmpty(format)) {
        dateformat = moment(newDate).format(format);
      } else {
        dateformat = moment(newDate).format('DD MMM YYYY');
      }
      break;
  }
  return dateformat;
};
