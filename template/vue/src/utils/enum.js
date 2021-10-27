const globalCfg = require("@/modules/module.config.js");
const modulesContext = require.context('../modules/', true, /..\enum\/[A-Za-z_-]*.js$/)

let API = {
  "Entity.conditionType": [{
    "Id": 0,
    "Name": "input",
    "Text": "输入框"
  }, {
    "Id": 3,
    "Name": "select",
    "Text": "下拉框"
  }, {
    "Id": 4,
    "Name": "datePicker",
    "Text": "时间选择框"
  }, {
    "Id": 5,
    "Name": "mixedSelect",
    "Text": "混合选择框"
  }, {
    "Id": 6,
    "Name": "cascader",
    "Text": "联级选择器"
  }, {
    "Id": 7,
    "Name": "radioCascader",
    "Text": "单选联级选择器"
  },
  {
    "Id": 8,
    "Name": "reportSet",
    "Text": "报表配置"
  }, {
    "Id": 10,
    "Name": "hkqudao",
    "Text": "联级多选（二级）"
  }, {
    "Id": 11,
    "Name": "hkarea",
    "Text": "联级多选（地区）"
  }],
  "ZR.PovitReport.ShowTotal": [
    {
      "Id": 0,
      "Name": "不显示",
      "Text": "不显示"
    },
    {
      "Id": 1,
      "Name": "头部",
      "Text": "头部"
    },
    {
      "Id": 2,
      "Name": "底部",
      "Text": "底部"
    },
    {
    }
  ]
}

const chunks = modulesContext.keys().reduce((modules, key) => {
  // 获取环境依赖模块名称,只整合依赖的模块映射的 api
  globalCfg.IMPORT_MODULES.forEach(moduleName => {
    // 正则判断整合的映射api 是不是依赖模块下的
    let res = key.indexOf(`/${moduleName}/`) > -1
    if (res) {
      API = {
        ...API,
        ...modulesContext(key).default
      }
    }
    return API
  });
  return API
}, {})


let data = {
  ...chunks
}

function rename(_model) {
  let _enum = {};

  // 对象深拷贝
  let _obj = JSON.stringify(_model);
  const model = JSON.parse(_obj);

  for (const modelKey in model) {
    var lastIndex = modelKey.lastIndexOf('.');
    var key = modelKey.substr(lastIndex + 1)
    var tempEnum = model[modelKey];
    tempEnum.pop();
    _enum[key] = tempEnum;
  }
  return _enum
}

function convert(model) {
  let _enum = {};
  for (const modelKey in model) {
    const curObj = model[modelKey];
    let enumType = {};
    curObj.forEach(el => {
      let item = el;
      Object.defineProperty(enumType, el.Name, {
        configurable: true, //当且仅当该属性描述符的类型可以被改变并且该属性可以从对应对象中删除
        enumerable: true, //当且仅当在枚举相应对象上的属性时该属性显现
        get: function () {
          return item.Id;
        }
      });

      Object.defineProperty(enumType, el.Id, {
        configurable: true,
        enumerable: true,
        get: function () {
          return item.Text;
        }
      });
      Object.defineProperty(enumType, 'm' + el.Id, {
        configurable: true,
        enumerable: true,
        get: function () {
          return item.Name;
        }
      });
    })

    var lastIndex = modelKey.lastIndexOf('.');
    var key = modelKey.substr(lastIndex + 1)
    _enum[key] = enumType;
  }
  return _enum;
}

let Enum = convert(data);
let OrgEnum = data;
let EnumList = rename(data);

export {
  Enum,
  OrgEnum,
  EnumList
}


