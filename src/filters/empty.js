//如果为空显示为‘-’
export default {
  name: 'empty',
  function: (value) => {
    if (value === '' || value == void 0) {
      return '-';
    }
    return value;
  }
}
