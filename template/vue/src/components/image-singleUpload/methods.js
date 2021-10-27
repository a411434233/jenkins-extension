export default {
  // ------------------------------------------------------------------
  // pragma mark - inti(初始化行为)
  // ------------------------------------------------------------------
  createdInit() {
  },
  mountedInit() {
  },
  handleSuccess(res, file) {
    if (res.code === 0) {
      this.singleUpload(res.data);
    } else {
      this.$message.error(res.message);
    }
  },
  handleBeforeUpload(file) {
    const isFormat = /^image\/(jpeg|png|jpg|ico|gif)$/.test(file.type);
    const isLt4M = file.size / 1024 / 1024 < 4;
    if (!isFormat) {
      this.$message.error('上传图片只能是 JPEG/PNG/JPG/ICO/gif 格式!');
    }
    if (!isLt4M) {
      this.$message.error('上传图片大小不能超过 4MB!');
    }
    return isFormat && isLt4M;
  },
  singleUpload(val) {
    this.imageUrl = val;
    this.$emit('singleUpload', val);
  }
}