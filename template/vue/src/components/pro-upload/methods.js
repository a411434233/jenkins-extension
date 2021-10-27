export default {
  // ------------------------------------------------------------------
  // pragma mark - inti(初始化行为)
  // ------------------------------------------------------------------
  createdInit() {},
  mountedInit() {},

  /**
   * 图片预览
   * @param {*} file
   */
  handlePictureCardPreview(file) {
    this.dialogImageUrl = file.url;
    this.dialogVisible = true;
  },

  /**
   * 删除图片
   * @param {*} file
   * @param {*} fileList
   */
  handleRemove(file, fileList) {
    this.fileList = fileList;
  },

  /**
   * 覆盖默认的上传行为，自定义上传的实现
   * @param {*} data
   */
  httpRequest(data) {
    const that = this;
    let fd = new FormData();
    fd.append("files", data.file); //传文件
    this.$http
      .post("api.img.upload", fd, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(function(res) {
        if (res.code === 0) {
          that.fileList.push({
            url: res.data
          });
          that.$emit("input", that.fileList);
        }
      });
  },

  /**
   * 图片上传之前
   */
  handleBeforeUpload(file) {
    console.log(this.limit)
    const isFormat = /^image\/(jpeg|png|jpg|ico|gif)$/.test(file.type);
    const isLt4M = file.size / 1024 / 1024 < 4;
    console.log("file.size", file.size);
    console.log("isLt4M", isLt4M);
    if (!isFormat) {
      this.$message.error("上传图片只能是 JPEG/PNG/JPG/ICO/gif 格式!");
    }
    if (!isLt4M) {
      this.$message.error("上传图片大小不能超过 4MB!");
    }
    return isFormat && isLt4M;
  },

  handleDownload(file) {
    // console.log(file);
  },

  uploadSuccess() {}
};

// 说明

// file 结构
// file: {
//   lastModified: 1595401711625,
//   lastModifiedDate:'',//返回当前文件的最后修改日期,
//   name: "WechatIMG71.png",
//   size: 6164,
//   type: "image/png",
//   uid: 1604643922901,
//   webkitRelativePath: ""
// }
