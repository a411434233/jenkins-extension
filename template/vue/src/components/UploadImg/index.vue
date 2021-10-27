<template>
  <div class="pro-upload-wrapper">
    <el-upload
      action="#"
      multiple
      :limit="limit"
      :http-request="httpRequest"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :before-upload="handleBeforeUpload"
      :file-list="fileList"
      :class="{ hide: hiddenUpload }"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>

    <el-dialog :visible.sync="dialogVisible">
      <img :src="dialogImageUrl" alt />
    </el-dialog>
  </div>
</template>

<script>
export default {
  $$route: {
    meta: {
      title: "标题名称",
      icon: "菜单图标",
    },
  },
  props: {
    value: {
      type: [Array, String],
      default: () => [],
    },
    fileUrls: {
      type: [Array, String],
      default: () => [],
    },
    limit: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      hiddenUpload: false,
      fileList: [],
   
    };
  },
  watch: {
    value: {
    
      handler(newVal) {
        if (typeof newVal === "string") {
          if (newVal) {
            this.fileList = [{ url: [newVal] }];
          } else {
            this.fileList = [];
          }
        } else if (newVal instanceof Array) {
          let list = [];
          newVal.forEach((item) => {
            list.push({ url: [item] });
          });
          this.fileList = list;
        }
      },
      immediate: true,
      deep: true,
    },
    fileList: {
      handler(newVal) {
        if (newVal.length == this.limit) {
          this.hiddenUpload = true;
        } else {
          this.hiddenUpload = false;
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
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
      if (fileList.length < this.limit) {
        this.hiddenUpload = false;
      }
      let fileValList = [];
      this.fileList.forEach((item) => {
        fileValList.push(item.url[0]);
      });
      this.$emit(
        "input",
        this.limit == 1 ? (fileValList[0] ? fileValList[0] : "") : fileValList
      );
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
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (res) {
          if (res.code === 0) {
            that.fileList.push({
              url: res.data,
            });
            if (that.fileList.length >= that.limit) {
              that.hiddenUpload = true;
            }
            let fileValList = [];
            that.fileList.forEach((item) => {
              fileValList.push(item.url[0]);
            });
            that.$emit("input", that.limit == 1 ? fileValList[0] : fileValList);
          }
        });
    },

    /**
     * 图片上传之前
     */
    handleBeforeUpload(file) {
      const isFormat = /^image\/(jpeg|png|jpg|ico|gif)$/.test(file.type);
      const isLt4M = file.size / 1024 / 1024 < 4;
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
    uploadSuccess() {},
  },
};
</script>
<style  scoped>
.el-upload--picture-card {
  transform: scale(0.8);
}
.pro-upload-wrapper >>> .hide .el-upload--picture-card {
  display: none;
}
</style>
