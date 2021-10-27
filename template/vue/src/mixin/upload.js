import { getConfig } from '@/utils/global-config'
import { getToken } from '@/utils/auth'

const tokenKey=`${getConfig('CLIENT_ID')}_token`
const token = getToken(tokenKey)
    ? "Bearer " + getToken(tokenKey)
    : "Bearer";
export const MIX_Upload = {
    data: function () {

        return {
            imageUrl: '',
            uploadAction: getConfig("UPLOAD_API"),
            myHeaders: {
                Authorization: token,
                "Client-Id": getConfig("CLIENT_ID")
            }
        }
    },
    components: {},
    created() { },
    methods: {},
}
