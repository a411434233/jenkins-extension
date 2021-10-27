<template>
  <div class="image-upload-wrapper">
    <el-upload
      class="avatar-uploader"
      action
      list-type="picture-card"
      :auto-upload="false"
      :file-list="uploadFileList"
      :on-change="uploadImageStatusChange"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>
  </div>
</template>

<script>
import data from './data'
import methods from './methods'

export default {
  props: {},
  data,
  methods,
  mixins: [],
  components: {},
  watch: {},
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
