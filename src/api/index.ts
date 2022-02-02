import { http } from '@/utils/http'
import { menuData } from '@/mock/index'

export const login = (params: object) => http.post('/login', { params })

export const GetMenData = (params: object) => menuData