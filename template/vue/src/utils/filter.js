import { checkedBoxRes, dateFormat, diff } from '@/utils/index'
import Vue from 'vue'

Vue.filter('dateFormat', dateFormat)
Vue.filter('diff', diff)
Vue.filter('checkedBoxRe', checkedBoxRes)
