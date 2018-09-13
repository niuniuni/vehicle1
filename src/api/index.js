const sendRequest = (url, method = 'GET', body = {}) => {
        // 处理url,添加时间戳，保证每次请求不会被缓存
        if (/\?/.test(url)) {
            url += '&_=' + (+new Date());
        } else {
            url += '?_=' + (+new Date());
        }
        let params = { method }
            //判断请求是否属于post请求
        if (method == 'POST') {
            params.body = JSON.stringify(body)
        }
        return fetch(url, params).then(res => res.json())
    }
    // 获取车辆列表
export let getBrandList = () => {
    return sendRequest('https://baojia.chelun.com/v2-car-getMasterBrandList.html');
}

//获取车系列表
export let getMakeList = (id) => {
    return sendRequest(`https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`)
}

//获取询价列表
export let getInfoAndList = (id) => {
    return sendRequest(`https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${id}`)
}

// /**
//  * 获取车系图片分类列表
//  * @param id   车系id
//  * @param colorId   颜色id(可选)
//  * @param carId     车型id(可选)
//  * @return promise 返回一个promise
//  */
export let getImgList = (id, colorId, carId) => {
        let search = `SerialID=${id}`;
        if (colorId) {
            search += `&ColorID=${colorId}`;
        }
        if (carId) {
            search += `&CarID=${carId}`;
        }
        return sendRequest(`https://baojia.chelun.com/v2-car-getImageList.html?${search}`)
    }
    //     /**
    //      * 获取车系具体类型图片列表
    //      * @param id   车系id
    //      * @param imgId 图片类型id
    //      * @param colorId   颜色id(可选)
    //      * @param carId     车型id(可选)
    //      * @param page  当前页码
    //      * @param pageSize 每页列表数量
    //      * @return promise 返回一个promise
    //      */
export let getImgDetailList = (id, imgId, colorId, carId, page = 1, pageSize = 30) => {
    let search = `SerialID=${id}&ImageID=${imgId}&Page=${page}&PageSize=${pageSize}`;
    if (colorId) {
        search += `&ColorID=${colorId}`;
    }
    if (carId) {
        search += `&CarID=${carId}`;
    }
    return sendRequest(`https://baojia.chelun.com/v2-car-getCategoryImageList.html?${search}`)
}

// /**
//  * 获取车系颜色分类
//  * @param id   车系id
//  * @return promise 返回一个promise
//  */
export let getColorList = (id) => {
    return sendRequest(`https://baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID=${id}`)
}

// /**
//  * 获取经销商列表
//  * @param carId     车型id
//  * @param cityId    城市id
//  * @return promise 返回一个promise
//  */
export let getDealerList = (carId, cityId) => {
    return sendRequest(`https://baojia.chelun.com/v2-dealer-alllist.html?carId=${carId}&cityId=${cityId}`)
}

/**
 * 获取城市列表(如果传省份id返回城市列表，如果不传返回省份列表)
 * @param provinceId   省份id
 * @return promise 返回一个promise
 */
export let getCityList = (provinceId) => {
    let search = ``;
    if (provinceId) {
        search += `provinceid=${provinceId}`;
    }
    return sendRequest(`https://baojia.chelun.com/v1-city-alllist.html?${search}`)
}

//https: //baojia.chelun.com/v2-car-getImageList.html?SerialID=2593&_1536652471624

// 获取车系目录图片
export const getCategoryImageList = (id, page) => {
    return sendRequest(`https://baojia.chelun.com/v2-car-getCategoryImageList.html?SerialID=2593&ImageID=${id}&Page=${page}&PageSize=30`)
}