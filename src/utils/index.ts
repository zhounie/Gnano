import { imageDataBaseUrl } from '@/config'
import { getToken } from './auth'
interface genCoverImageUrl {
    projectId: string;
    coverImagePath: string;
    coverImageName: string;
}
interface genImageUrl {
    projectId: string;
    imagePath: string;
    imageName: string;
}
type Size = 'L' | 'M' | 'S'
export function generateCoverImageUrl({ projectId, coverImagePath, coverImageName }: genCoverImageUrl) {
    return `${imageDataBaseUrl}/${projectId}${coverImagePath}/S-${coverImageName}.jpg?token=${getToken()}`
}
export function generateImageUrl({ projectId, imagePath, imageName }: genImageUrl, size: Size) {
    return `${imageDataBaseUrl}/${projectId}${imagePath}/${size}-${imageName}.jpg?token=${getToken()}`
}