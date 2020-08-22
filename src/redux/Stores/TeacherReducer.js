
const initialState = {
    appliedFilters: []
  };
  
  export const addData = (payload) => ({
     type: 'ADD_DATA', 
     payload
  });
  
  export const loadData = (payload) => ({
    type: 'LOAD_DATA', 
    payload
  });
  export const deleteData = (payload) => ({
    type: 'DELETE_DATA', 
    payload
  });
  export const filterByValue = (payload) => ({
      type: 'FILTER_BY_VALUE', 
      payload 
  });
  
  
  
  const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FILTER_BY_VALUE':
        
        let namevalue = action.payload.text;
        let sectionvalue = action.payload.status;
        let classvalue = action.payload.status;
  
        state.filteredTeacherss = state.teachers.filter(teacher => {
            return (
              teacher.name.toLowerCase().includes(namevalue) ||
              teacher.section.toLowerCase().includes(sectionvalue) ||
              teacher.class.toLowerCase().includes(classvalue)) 
        });
        
  
        if (!(namevalue || sectionvalue||classvalue)) state.filteredTeacherss = state.teachers;
  
        
        return (Object.assign({},state));
      case 'ADD_TEACHER':
          
          return (Object.assign({},state,{filteredTeacherss:action.payload.value}));
  
      case 'LOAD_DATA':
        const teachers=[
            {name:'Adam',class:'V',section:'HI',rollno:'25',address:'',classteacher:'',fathername:'',mothername:'',gender:'3211321',fatheroccupation:'312312',fathermobileno:'321312',othermobileno:'41321321',admission:'5464',image:null},
            {name:'Akhil',class:'H',section:'TL',rollno:'24',address:'',classteacher:'',fathername:'',mothername:'',gender:'3211321',fatheroccupation:'312312',fathermobileno:'321312',othermobileno:'3000',admission:'40',image:null},
            {name:'Adin',class:'H',section:'TL',rollno:'23',address:'',classteacher:'',fathername:'',mothername:'',gender:'3211321',fatheroccupation:'312312',fathermobileno:'321312',othermobileno:'3000',admission:'40',image:null},
          ]
      
        return (Object.assign({},state,{teachers,filteredTeacherss:teachers}));
  
      default:
        return state;
    }
  };
  
  export default ticketReducer;
  
  