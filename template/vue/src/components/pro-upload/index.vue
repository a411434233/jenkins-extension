
<!--
    action="#"
    :http-request="httpRequest" 覆盖默认的上传行为，自定义上传的实现
    list-type="picture-card"
    :headers="myHeaders"
    :file-list="prodDetailsList" ， 上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]
    :on-success="uploadSuccess"
    :on-remove="uploadRemove"
    :before-upload="handleBeforeUpload"
    :on-preview="handlePictureCardPreview"

    图片上传组件属性说明
    on-success : 文件上传成功时的钩子
    on-remove :文件列表移除文件时的钩子
    before-upload : 上传文件之前的钩子
    on-preview : 点击文件列表中已上传的文件时的钩子
    :on-change="uploadChange" 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
-->
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
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>

    <el-dialog :visible.sync="dialogVisible" append-to-body>
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>
  </div>
</template>

<script>
import methods from './methods'

export default {
  props: {
    value: {
      type: [Array],
      default: function() {
        return [];
      }
    },
    limit: {
      type: Number
    }
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false
      // fileList: []
    };
  },
  computed: {
    fileList: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  methods,
  mixins: [],
  components: {},
  watch: {},

  // ------------------------------------------------------------------
  // pragma mark - Life Cycle(生命周期)
  // ------------------------------------------------------------------
  created() {
    this.createdInit();
  },
  mounted() {
    this.mountedInit();
  }
};
</script>
<style lang="scss" src="./index.scss" ></style>
