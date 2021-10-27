
// 订单手工处理
export function manualBatchBtn(enumSource, source, remarkName = 'manualPostMsg') {
  const actionData = {}
  for (var ele in enumSource) {
    for (var ele2 in enumSource[ele]) {
      actionData[ele2] = enumSource[ele][ele2]
    }
  }

  const tempArray = []
  for (const key in actionData) {
    tempArray.push({
      id: `batch_${key}`,
      actionText: actionData[key],
      actionType: 2,
      remark: remarkName,
      actionValue: key
    })
  }

  const newArry = source.menuOper.concat(tempArray)
  source.menuOper = newArry
}
// 产品批量修改状态
export function statusBatchBtn(enumSource, source, remarkName = 'statusPostMsg') {
  const actionData = {}
  for (var ele in enumSource) {
    actionData[enumSource[ele]['Id']] = enumSource[ele]['Text']
  }

  const tempArray = []
  for (const key in actionData) {
    tempArray.push({
      id: `batch_${key}`,
      actionText: actionData[key],
      actionType: 2,
      remark: remarkName,
      actionValue: key
    })
  }

  const newArry = source.menuOper.concat(tempArray)
  source.menuOper = newArry
}

export function enumStatusBatch(statusSource, groupName) {
  const tempArray = []
  for (var idx in statusSource) {
    let item= statusSource[idx]

    var btn = {
      id: `batch_${item.Id}`,
      actionText: item.Text,
      actionType: 2,
      remark: groupName,
      actionValue: item.Id
    }
    tempArray.push(btn)
  }

  return tempArray

  // <div v-for="item in $orgEnum['ZR.Charge.Entity.TaskPubs.ZoneUserStatus'].slice(0,-1)" :key="item.Id">
  // <el-radio :label="item.Id">{{item.Text}}</el-radio>
  // </div>
}

// 状态表 操作表
export function statusActBtns(statusActionMaps, groupName) {
  const tempArray = []

  for (var statusMaps in statusActionMaps) {
    var actMap = statusActionMaps[statusMaps]
    for (var key in actMap) {
      var btn = {
        id: `batch_${key}`,
        actionText: actMap[key],
        actionType: 2,
        remark: groupName,
        actionValue: key
      }
      tempArray.push(btn)
    }
  }

  return tempArray
}
