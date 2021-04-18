export interface ReqCreateUser {
    firstName: string
    lastName: string
    userName: string
    password: string
}

export interface ResCreateUser {
    id: number
    firstName: string
    lastName: string
    userName: string
    password: string
    updatedAt: string
    createdAt: string
}
