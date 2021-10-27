export function qcDateRange(_fieldName = '', _defaultValue = '', options) {
    return Object.assign({}, {
      fieldName: 'datepic',
      defaultValue: _defaultValue,
      conditionType: 4,
      url: '',
      dataSource: '',
      displayNam: '',
      dataSourceType: 1,
      sort: 0,
      isIndex: true
    }, options)
  }
  
  export function qcInput(_fieldName = '', _defaultValue, options) {
    return Object.assign({}, {
      displayName: "",
      fieldName: _fieldName,
      defaultValue: _defaultValue,
      conditionType: 0,
      url: "",
      dataSource: "",
      dataSourceType: 0,
      sort: 0,
      isIndex: true,
    }, options)
  }
  
  
  export default {
    qcDateRange,
    qcInput
  }
  