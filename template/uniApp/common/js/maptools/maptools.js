import amap from './amap-wx.js'
import projectCfg from 'projectCfg.js'

let AmapPlugin = new amap.AMapWX({
    key: projectCfg.mapKey
});

// 获取当前位置信息
export function getLocation() {
    return new Promise((resolve, reject) => {
        AmapPlugin.getRegeo({
            success: (data) => {
                resolve(data[0]);
            },
            fail: (fail) => {
                reject(fail);
            }
        });
    })
}

// 查找您当前位置或指定位置周边 “餐饮服务”、“商务住宅”、“生活服务”类型的POI，解决您的吃穿住行问题
// SDK 返回 marker 数组，可以直接用来在微信的地图组件上标记，同时，也返回了POI数组用于您的自定义的界面页面展示。
export function getPoiAround() {
    return new Promise((resolve, reject) => {
        AmapPlugin.getPoiAround({
            success: (data) => {
                resolve(data);
            },
            fail: (fail) => {
                reject(fail);
            }
        });
    })
}

//输入提示是指根据用户输入的关键词，给出相应的提示信息，将最有可能的搜索词呈现给用户，以减少用户输入信息，提升用户体验。如：输入“方恒”，提示“方恒国际中心A座”，“方恒购物中心”等。
export function getInputtips(keywords, city, location) {
    return new Promise((resolve, reject) => {
        AmapPlugin.getInputtips({
            keywords,
            city,
            citylimit: true,
            location,
            success: (data) => {
                if (data && data.tips) {
                    resolve(data.tips);
                }
            },
            fail: (fail) => {
                reject(fail);
            }
        });
    })
}
