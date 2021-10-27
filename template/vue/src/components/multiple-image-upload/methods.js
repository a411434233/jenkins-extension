// TODO: 无效代码

export default {
  // ------------------------------------------------------------------
  // pragma mark - inti(初始化行为)
  // ------------------------------------------------------------------
  createdInit() {},
  mountedInit() {},
  handlePictureCardPreview(file) {
    this.dialogImageUrl = file.url;
    this.dialogVisible = true;
  },
  uploadRemove(val) {
    console.log(val, "temp"); // TODO: 无效代码
    var index = this.prodDetailsList.indexOf(val);
    if (index > -1) {
      this.prodDetailsList.splice(index, 1);
    }
    this.$emit("onSuccess", this.prodDetailsList);
  },
  handleBeforeUpload(file) {
    const isFormat = /^image\/(jpeg|png|jpg|ico|gif)$/.test(file.type);
    const isLt1M = file.size / 1024 / 1024 < 1;
    if (!isFormat) {
      this.$message.error("上传图片只能是 JPEG/PNG/JPG/ICO 格式!");
    }
    if (!isLt1M) {
      this.$message.error("上传图片大小不能超过 1MB!");
    }
    return isFormat && isLt1M;
  },
  uploadSuccess(res) {
    if (this.prodDetailsList === undefined) this.prodDetailsList = [];
    console.log(this.prodDetailsList, "prodDetailsList"); // TODO: 无效代码
    let temp = {
      url: res.data
    };
    console.log(temp, "temp"); // TODO: 无效代码
    this.prodDetailsList.push(temp);
    this.$emit("onSuccess", this.prodDetailsList);
  }
};
