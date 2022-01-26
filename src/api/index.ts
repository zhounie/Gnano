import { http } from '@/utils/http'

export const login = (params: object) => http.post('/login', { params })