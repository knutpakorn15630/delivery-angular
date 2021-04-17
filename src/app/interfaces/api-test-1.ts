
export interface ReqTest {
    id: number
}

export interface Root {
    assName: AssName[]
    dataAll: DataAll[]
}

export interface AssName {
    id: number
    title: string
}

export interface DataAll {
    id: number
    firstName: string
    lastName: string
    isPoint: IsPoint[]
}

export interface IsPoint {
    id: number
    point: number
    text: string
    assessmentsOptions: AssessmentsOptions
}

export interface AssessmentsOptions {
    id: number
    title: string
    point: number
    assessments: Assessments
}

export interface Assessments {
    title: string
    assessmentsFormId: number
}
