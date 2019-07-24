export interface ICourse {
id: number, 
name: string, 
description: string,
code: string, 
credit: number, 
department_code: string, 
semester_offered: string,
registered_students: [number]
}