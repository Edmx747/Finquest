export interface People {
    id:string,
    firstname: string,
    lastname: string,
    birthdate?: string,
    skills?: Array<string>,
    department?: string,
    profileCompletion: number
    lastConnection?: string
}