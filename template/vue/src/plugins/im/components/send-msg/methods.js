
const RongEmoji = require("../../lib/RongIMEmoji-2.2.6.js");
const utils = require('../../utils/utils.js');
let Message = null;
let File = null;
const imgBase64 = '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';
// import '../../im-plug-in/RongIMLib-4.1.0.js'
import '../../lib/RongIMLib-3.0.7.2-dev.js'
import '../../im-plug-in/send-data.js'
import '../../im-plug-in/upload.js'
import '../../im-plug-in/init.js'

const plugInInit = require('../../im-plug-in/init.js')
export default {

    initEvent() {
        Message = this.$Service.Message
        File = this.$Service.File
    },
    // input的弹起 关闭
    handleIcon(type) {
        if (this.inputOpen === type) {
            this.inputOpen = "";
            return;
        }
        this.inputOpen = type;
    },
    // 选中emoji
    handleEmoji(data) {
        this.inputVal += data.emoji;
    },
    // 发送消息
    sendText() {
        if (!this.inputVal) {
            return;
        }
        let { userName, targetName, avatarUrl } = this.chatObj.latestMessage.content.userInfo
        Message.sendText({
            type: this.type,
            targetId: this.targetId,
            content: this.inputVal,
            userInfo: {
                userName,
                targetName,
                avatarUrl,
            }
        }).then(message => {
            this.$emit('sendMsgEvent', message)
            this.inputVal = ""
            this.inputOpen = "";
        });
    },
    // emoji 排列轮播
    formatEmojis() {
        RongEmoji.init();
        let list = RongEmoji.list;
        return utils.sliceArray(list, { size: 24 });
    },

    // 上传图片发送
    uploadEvent(e) {
        const fileType = this.getFileType(e.target.files[0].name);
        let { config, uploadCallbacks } = this.genUploadConfig(fileType);
        var _file = e.target.files[0]; // 上传的file对象

        plugInInit.initFile(config, function (uploadFile) {
            uploadFile.upload(_file, uploadCallbacks);
        });
    },
    getFileType(filename) {
        var imageType = {
            'jpg': 1,
            'png': 2
        };
        var index = filename.lastIndexOf('.') + 1,
            type = filename.substring(index);
        return type in imageType ? 'img' : 'file';
    },
    genUploadConfig(type) {
        let _this = this;
        let fileType;
        if (type === 'img') {
            fileType = 1; // 图片
        }
        var config = {
            domain: "https://upload.qiniup.com",
            fileType: fileType,
            getToken: function (callback) {
                File.FileToken(fileType).then(data => {
                    callback(data.token, data);
                })
            }
        }
        var uploadCallbacks = {
            onProgress: function (loaded, total) {
                // 上传进度 percent
                var percent = Math.floor(loaded / total * 100);
            },
            onCompleted: (data) => {
                File.getFileUrl(fileType, data).then(res => {
                    this.inputOpen = "";
                    Message.sendImage({
                        type: _this.type,
                        targetId: _this.targetId,
                        imageUri: res.downloadUrl,
                        extra: { width: 100 },
                        content: imgBase64,
                        userInfo: {
                            userName: _this.userName,
                            avatarUrl: _this.avatarUrl,
                            targetName: _this.targetName
                        }
                    }).then(message => {
                        _this.$emit('sendMsgEvent', message)
                    });
                })
            },
            onError: function (error) {
                console.error('上传失败', error);
            }
        };
        return {
            config,
            uploadCallbacks
        }
    },
}
