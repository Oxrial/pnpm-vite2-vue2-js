//获取用户信息
import axiosReq from './axios-req'
export const userInfoReq = () => {
  return new Promise((resolve) => {
    const reqConfig = {
      url: '/basis-func/user/getUserInfo',
      params: { plateFormId: 2 },
      method: 'post'
    }
    axiosReq(reqConfig).then(({ data }) => {
      resolve(data)
    })
  })
}

//登录
export const loginReq = (subForm) => {
  return axiosReq({
    url: '/basis-func/user/loginValid',
    params: subForm,
    method: 'post'
  })
}

//退出登录
export const loginOutReq = () => {
  return axiosReq({
    url: '/basis-func/user/loginValid',
    method: 'post'
  })
}