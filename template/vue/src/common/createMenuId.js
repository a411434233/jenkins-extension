import md5 from 'js-md5'
import { getConfig } from '@/utils/global-config'

export function createMenuId(_fullPath) {
    return md5(getConfig("CLIENT_ID") + ":" + _fullPath);
}


