export class TableService{
    getCols(){
        return [
                {headerName: 'Id', field: 'id' , width: 50, sortable: true, filter: true},
                {headerName: 'Name', field: 'name' , width: 370, sortable: true, filter: true},
                {headerName: 'Code', field: 'code', width: 140, filter: true},
                {headerName: 'Credit', field: 'credit', width: 100, filter: true},
                {headerName: 'Department Code', field: 'department_code', width: 150, filter: true},
                {headerName: 'Semester Offered', field: 'semester_offered', width: 150, filter: true}
            ];
    };
    getRows(){
      return [
        {id: 1 , name: 'Social Networking and Cybersecurity Best Practices', code: 'CMIS 100', credit: 2, department_code: 'CS', semester_offered: 'Fall'},
        {id: 2 , name: 'Introductory Programming', code: 'CMIS 200', credit: 2, department_code: 'CS', semester_offered: 'Summer'},
        {id: 3 , name: 'Fundamentals of Computer Troubleshooting', code: 'CMIT 111', credit: 2, department_code: 'CS', semester_offered: 'Fall'},
        {id: 4 , name: 'Fundamentals of Networking', code: 'CMIT 112', credit: 2, department_code: 'CS', semester_offered: 'Fall'},
        {id: 5 , name: 'Network Security ', code: 'CMIT 113', credit: 2, department_code: 'CS', semester_offered: 'Spring'},
        {id: 6 , name: 'Linux System Administration', code: 'CMIT 114', credit: 2, department_code: 'CS', semester_offered: 'Summer'},
        {id: 7 , name: 'Digital Forensics Analysis and Application', code: 'CMIT 115', credit: 2, department_code: 'CS', semester_offered: 'Spring'},
        {id: 8 , name: 'Advanced Information Systems Security', code: 'CMIT 116', credit: 4, department_code: 'CS', semester_offered: 'Fall'},
        {id: 9 , name: 'Mobile Forensics', code: 'CMIT 117', credit: 2, department_code: 'CS', semester_offered: 'Spring'},
        {id: 10 , name: 'Secure Programming in the Cloud', code: 'CMIS 300', credit: 3, department_code: 'SDEV', semester_offered: 'Fall'},
        {id: 11 , name: 'Mitigating Software Vulnerabilities', code: 'CMIS 400', credit: 4, department_code: 'SDEV', semester_offered: 'Summer'},
        {id: 12 , name: 'Software Security Testing', code: 'CMIS 500', credit: 2, department_code: 'SDEV', semester_offered: 'Fall'}
            ];
    };
}