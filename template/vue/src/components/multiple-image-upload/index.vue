<template>
  <div class="image-upload-wrapper">
    <el-upload
      class="avatar-uploader"
      :action="uploadAction"
      list-type="picture-card"
      :headers="myHeaders"
      :file-list="prodDetailsList"
      :on-success="uploadSuccess"
      :on-remove="uploadRemove"
      :before-upload="handleBeforeUpload"
      :on-preview="handlePictureCardPreview"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" append-to-body>
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>
  </div>
</template>

<script>
import data from './data'
import methods from './methods'
import { MIX_Upload } from '@/mixin/upload'

export default {
  name: "multipleImage",
  props: {
    prodDetailsList: {
      type: [Object, Array]
    }
  },
  data,
  methods,
  mixins: [MIX_Upload],
  components: {},
  watch: {
    value: {
      handler(newValue) {
        this.inputValue = newValue;
      },
      deep: true
    },
    inputValue: {
      handler(newValue) {
        this.$emit(EVENT_INPUT, newValue);
      },
      deep: true
    }
  },
  computed: {},
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
<style lang="scss" src="./index.scss" scope></style>
