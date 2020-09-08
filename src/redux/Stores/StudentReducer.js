let counterToActiviateLoadDataOnce = 0 ;



export const addData = (payload) => ({
     type: 'ADD_STUDENT_DATA', 
     payload
});
  
export const loadData = (payload) => ({
    type: 'LOAD_STUDENT_DATA', 
    payload
});
export const deleteData = (payload) => ({
    type: 'DELETE_STUDENT_DATA', 
    payload
});

export const modifyData = (payload) => ({
  type: 'MODIFY_STUDENT_DATA', 
  payload 
});
  
export const filterByValue = (payload) => ({
      type: 'FILTER_BY_VALUE', 
      payload 
});
  

          
  
  const StudentReducer = (state = [], action) => {
    switch (action.type) {
      case 'FILTER_BY_VALUE':
        
        let namevalue = action.payload.name;
        let sectionvalue = action.payload.section;
        let classvalue = action.payload.class;
        state.filteredStudents = state.students.filter(student => {
            return (
              student.name.toLowerCase().includes(namevalue) &&
              student.section.toLowerCase().includes(sectionvalue) &&
              student.class.toLowerCase().includes(classvalue)) 
        });
        
  
        if ((namevalue || sectionvalue|| classvalue)) {} else state.filteredStudents = state.students;
  
        
        return (Object.assign({},state));

      case 'MODIFY_STUDENT_DATA':
        let key=action.payload.value.key;
        
        state.filteredStudents.map(student=>{

          if (student.key===key) return Object.assign(student,action.payload.value)
          
          return student;
        })
        
        return (Object.assign({},state));
      case 'ADD_STUDENT_DATA':
          
          return (Object.assign({},state,{filteredStudents:[...state.filteredStudents,action.payload.value]}));
      case 'DELETE_STUDENT_DATA':
            state.filteredStudents.splice(action.payload.value, 1);
            return (Object.assign({},state));
      case 'LOAD_STUDENT_DATA':
        const students=[
            {name:'Adam',class:'V',section:'HI',rollno:'25',address:'',classteacher:'',fathername:'',mothername:'',gender:'3211321',fatheroccupation:'312312',fathermobileno:'321312',othermobileno:'41321321',admission:'5464',image:null,key:'1'},
            {name:'Akhil',class:'H',section:'TL',rollno:'24',address:'',classteacher:'',fathername:'',mothername:'',gender:'3211321',fatheroccupation:'312312',fathermobileno:'321312',othermobileno:'3000',admission:'40',image:null,key:'2'},
            {name:'Adin',class:'H',section:'TL',rollno:'23',address:'',classteacher:'',fathername:'',mothername:'',gender:'3211321',fatheroccupation:'312312',fathermobileno:'321312',othermobileno:'3000',admission:'40',image:null,key:'3'},
          ]
          counterToActiviateLoadDataOnce ++;
          if (counterToActiviateLoadDataOnce === 1) return (Object.assign({},state,{students,filteredStudents:students}));
          
          return (Object.assign({},state))
        
  
      default:
        return state;
    }
  };
  
  export default StudentReducer;
  
  