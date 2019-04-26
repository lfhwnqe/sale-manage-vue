function padNumber(num, digists) {
  num = '' + num;
  while (num.length < digists) {
    num = '0' + num;
  }
  return num;
}

function isDate(date) {
  return date instanceof Date && !isNaN(date.valueOf())
}

function dateGetter(name, size, index = 0) {
  return function (date) {
    let value = date[`get${name}`]();
    if (index) {
      value = 1 + parseInt(value, 10);
    }
    return padNumber(value, size);
  }
}
const DATE_FORMATS = {
  'YYYY': dateGetter('FullYear', 4),
  'yyyy': dateGetter('FullYear', 4),
  'MM': dateGetter('Month', 2, 1),
  'dd': dateGetter('Date', 2),
  'HH': dateGetter('Hours', 2),
  'hh': dateGetter('Hours', 2),
  'mm': dateGetter('Minutes', 2),
  'ss': dateGetter('Seconds', 2)
}
const rDateReg = /YYYY|yyyy|MM|dd|HH|hh|mm|ss/g;
export default {
  name: 'date',
  function(date, formatter = 'YYYY-MM-dd') {
    if (!date) return '';
    const nDate = new Date(date);
    if (isDate(nDate)) {
      return formatter.replace(rDateReg, function (match) {
        const f = DATE_FORMATS[match];
        return f ? f(nDate) : match;
      })
    } else {
      return date;
    }
  }
}
