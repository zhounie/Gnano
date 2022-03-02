import { http } from '@/utils/http'


export const GetProjectList = (data: object) => http.post('/api/project/list', { data })
export const GetProjectDetail = (data: object) => http.post('/api/image/list', { data })

