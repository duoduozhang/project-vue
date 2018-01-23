import axios from 'axios'
// 设置请求的基准路径
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// 登录拦截器
axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('mytoken')
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
// 登录功能
export const login = (params) => {
  return axios.post('login', params).then(res => {
    return res.data
  })
}
export const testData = (params) => {
  return axios.get('users', {params: params}).then(res => {
    return res.data
  })
}
