<template>
    <xs-upload-img
      action='ask.erpmng.api.erp.ImageUpload.UploadImg.post'
      v-model="imgUrl"
    >
    </xs-upload-img>
</template>
<script>
    export default {
        data () {
            return {
                imgUrl:''
            }
        }
    }
</script>