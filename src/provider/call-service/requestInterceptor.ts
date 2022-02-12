import axios, { AxiosRequestConfig } from 'axios'
import { constant } from '@src/provider/config/constant'
import { AsyncStorage } from 'react-native'


const instance = axios.create({
    baseURL:  constant.BASE_URL  
})

instance.interceptors.request.use(
    async (config: AxiosRequestConfig<any>) => {
        const token = await AsyncStorage.getItem('token')
        
        if(token) {
            config.headers!.Authorization = `Bearer ${token}`
        }
        return config;
    },

    (err) => {
        return Promise.reject(err)
    }
)
console.log({instance})

export default instance