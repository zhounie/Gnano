import { http } from '@/utils/http'
import { menuData } from '@/mock/index'

export const login = (data: object) => http.post('/api/user/login', { data })

export const GetUserList = (data: object) => http.post('/api/user/list', { data })

export const GetMenData = (params: object) => menuData