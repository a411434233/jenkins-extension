import { uploadImgToBase64 } from '@/common/uploadImgToBase64'

export default {
  // ------------------------------------------------------------------
  // pragma mark - inti(初始化行为)
  // ------------------------------------------------------------------
  createdInit() {

  },
  mountedInit() {},

  // ------------------------------------------------------------------
  // 基于 element-ui 上传组件的内置事件集合
  // ------------------------------------------------------------------

  /**
   *
   * @param {当前上传文件的信息} file
   * @param {已选中上传文件的列表信息} fileList
   * file = {
   *    status: "ready"
   *    name: "hl12-@2x.png"
   *    size: 9891
   *    percentage: 0
   *    uid: 1584674864088
   *    raw:{
   *        name: "hl12-@2x.png"
   *        lastModified: 1569395230070
   *        lastModifiedDate: Wed Sep 25 2019 15:07:10 GMT+0800 (中国标准时间) {}
   *        webkitRelativePath: ""
   *        size: 9891
   *        type: "image/png"
   *        uid: 1584674864088
   *    }
   * }
   */
  uploadImageStatusChange(file, fileList) {
    this.upData(fileList);
  },

  // 点击已上传图片的列表
  handlePictureCardPreview(file) {
    this.dialogImageUrl = file.url;
    this.dialogVisible = true;
  },

  handleRemove(file, fileList) {
    this.upData(fileList);
  },

  upData(fileList) {
    this.uploadFileList = fileList;
    this.submitDialogData(fileList);
  },

  async submitDialogData() {
    const imgBroadcastListBase64 = []
    // 图片转base64开始...
    const filePromises = this.uploadFileList.map(async file => {
      const response = await uploadImgToBase64(file.raw)
      return response.result;
    })
    // 按次序输出 base64图片
    for (const textPromise of filePromises) {
      imgBroadcastListBase64.push(await textPromise)
    }
    this.$emit('selectedImageList', imgBroadcastListBase64)
  },

  // TODO: 无效代码
  // ------------------------------------------------------------------
  // pragma mark - Private Methods(私有方法: )
  // 命名规范: 前缀 __ + name
  // ------------------------------------------------------------------
  __demoFunction() {

  }
}
