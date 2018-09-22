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

/**
 * 获取短信验证码
 * @param phone     用户的手机号
 * @return promise  返回一个promise
 */
export let getCapture = (phone) => {
    return sendRequest(`http://123.206.55.50:8080/getCapture`, 'POST', { phone });
}

/**
 * 登录接口
 * @param userName 用户的用户名
 *        password 密码
 *        identifyCode 验证码
 */
export let login = (userName, password, identifyCode) => {
    return sendRequest(`http://dsp.zybang.com.cn/dsp-admin/user/login`, 'POST', { userName, password, identifyCode })
}

/**
 * 用户信息接口
 * @param
 * method:get
 */
export let current = () => {
        return sendRequest(`http://dsp.zybang.com/dsp-admin/user/current`)
    }
    /**
     * 验证接口
     * @param timestamp
     * method:get
     */
export let captcha = (timestamp) => {
    return sendRequest(`http://dsp.zybang.com/dsp-admin/captcha.jpg`, { timestamp })
}

/**
 * 客户描述
 * @param queryType 查询类型
 *        content 查询内容
 *        typeList 代理商，代理子客户，直客
 *        pageSize 每页展示条数
 *        pageNum  页码，默认1
 */
export let getList = (queryType, content, pageSize, pageNum) => {
        return sendRequest(`http://dsp.zybang.com.cn/dsp-admin/customer/list`, 'POST', { queryType, content, typeList, pageSize, pageNum })
    }
    /**
     * 修改客户状态
     * @param idList  客户id
     *        status  1-开启 2-关闭
     */
export let getUpdate = (idList, status) => {
    return sendRequest(`http://dsp.zybang.com/dsp-admin/customer/status/update`, 'POST', { idList, status })
}

/**
 * 客户预算明细接口
 * @param customerId 客户id
 * @param pageNum 页码
 * @param pageSize 页面大小
 */
export let detail = (customerId, pageNum, pageSize) => {
        return sendRequest(`http://dsp.zybang.com/dsp-admin/customer/budget/detail`, 'POST', { customerId, pageNum, pageSize })
    }
    /**
     * 客户预算分配接口
     * @param customerId 客户id
     * @param budget 本次分配的预算，单位分
     */
export let update = (customerId, budget) => {
        return sendRequest(`http://dsp.zybang.com/dsp-admin/customer/budget/update`, 'POST', { customerId, budget })
    }
    /**
     * 创意列表接口
     * @param queryType  查询类型
              content 查询内容
              statusList 创意状态列表
              customerId 客户Id
              startTime  开始时间
              endTime  结束时间
              adunitId 单元Id
              pageNum 页码
              pageSize 每页大小
              campaignId 计划Id
     */
export let List = (queryType, content, statusList, customerId, startTime, endTime, adunitId, pageNum, pageSize, campaignId) => {
    return sendRequest(`http://dsp.zybang.com/dsp-creative/creative/list`, 'POST', { queryType, content, statusList, customerId, startTime, endTime, adunitId, pageNum, pageSize, campaignId })
}