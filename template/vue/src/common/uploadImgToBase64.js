export function uploadImgToBase64(file) {
    return new Promise((resolve, reject) => {
        if (!window.FileReader) {
            console.error('抱歉，您的浏览器不支持 FileReader API!')
        }
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () { // 图片转base64完成后返回reader对象
            resolve(reader)
        }
        reader.onerror = reject
    })
}