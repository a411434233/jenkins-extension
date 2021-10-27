<template>
  <div ref="imageUrl">
    <el-upload
      :action="actionUrl"
      class="avatar-uploader"
      :headers="myHeaders"
      :show-file-list="false"
      :before-upload="handleBeforeUpload"
      :on-success="handleSuccess"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon" />
    </el-upload>
  </div>
</template>

<script>
import methods from './methods'
import { getConfig } from '@/utils/global-config'
import { getToken } from '@/utils/auth'

const tokenKey = `${getConfig('CLIENT_ID')}_token`

export default {
  components: {},
  mixins: [],
  props: {
    imageUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      myHeaders: {
        Authorization: 'Bearer ' + getToken(tokenKey),
        'Client-Id': getConfig('CLIENT_ID')
      },
      actionUrl: getConfig('UPLOAD_API')
    }
  },
  computed: {},
  watch: {},
  // ------------------------------------------------------------------
  // pragma mark - Life Cycle(生命周期)
  // ------------------------------------------------------------------
  created() {
    this.createdInit()
  },
  mounted() {
    this.mountedInit()
  },
  methods
}
</script>
<style lang="scss" src="./index.scss"></style>
