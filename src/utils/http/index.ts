import Axios, { AxiosInstance ,AxiosRequestConfig, AxiosResponse } from 'axios'

import {
    RequestMethods
} from './types.d'

import { getToken } from '@/utils/auth'

const defaultConfig: AxiosRequestConfig = {
    baseURL: '',
    timeout: 10000,
    headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    }
}


class Http {
    constructor() {
        this.httpInterceptorsRequest()
        this.httpInterceptorsResponse()
    }

    private static axiosInstance: AxiosInstance = Axios.create()

    private httpInterceptorsRequest(): void {
        Http.axiosInstance.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                const token = getToken()
                if (token && config.headers) {
                    config.headers['token'] = `${token}`
                    return config
                } else {
                    return config
                }
            },
            (error) => {
                return Promise.reject(error)
            }
        )
    }

    private httpInterceptorsResponse(): void {
        Http.axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => {
                return response.data;
            },
            (error) => {
                return Promise.reject(error)
            }
        )
    }

    public request<T> (
        method: RequestMethods,
        url: string,
        param?: AxiosRequestConfig,
        axiosConfig?: AxiosRequestConfig
    ): Promise<T> {
        const config = {
            method,
            url,
            ...param,
            ...axiosConfig
        }
        return new Promise((resolve, reject) => {
            Http.axiosInstance
                .request(config)
                .then((res: undefined) => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    public post<T>(url: string, params?: T, config?: AxiosRequestConfig): Promise<T> {
        return this.request<T>('post', url, params, config)
    }

}

export const http = new Http()