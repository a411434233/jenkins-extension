const filterRules = ({ required, type, min, max }) => {
  let validate = [];
  if (required) {
    // 必填项
    validate.push({
      required: true,
      message: "该输入项为必填项",
      trigger: "change",
    });
  }
  if (type) {
    let message = "";
    switch (type) {
      case "price":
        message = "价格输入有误, 最多保留四位小数";
      case "mobile":
        message = "手机号码输入有误"
        validate.push({ validator: (rules, val, callback) => validateByType(type, val, message, callback, rules), trigger: "change" });
        break;
      default:
        break;
    }
  }
  return validate;
};

// 正则表达式
const validateList = {
  price: /^(([1-9][0-9]*)|(([0]\.\d{0,2}|[1-9][0-9]*\.\d{0,4})))$/, // 价格 不为 0 , 并且最多保留4位小数
  mobile: /^((\d{3}-\d{8}|\d{4}-\d{7,8})|(1[3|5|6|7|8|9][0-9]{9}))$/, // 手机号
};

const validateByType = (type, value, message, callback, rules) => {
  if (validateList[type] !== undefined) {
    if (!validateList[type].test(value)) {
      callback(new Error(message));
    } else {
      callback();
    }
  } else {
    console.error(type + " 未定义的校验类型");
  }
};

export default filterRules;
