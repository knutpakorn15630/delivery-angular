
export interface ResShowUser {
    data: Daum[]
}

export interface Daum {
    id: number
    firstName: string
    lastName: string
    userName: string
    password: string
    createdAt: string
    updatedAt: string
}
