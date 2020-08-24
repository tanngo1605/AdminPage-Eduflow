let counterToActiviateLoadDataOnce = 0 ;

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
export const modifyData = (payload) => ({
  type: 'MODIFY_DATA', 
  payload 
});
export const filterByValue = (payload) => ({
  type: 'FILTER_BY_VALUE', 
  payload 
});
  
  
  
const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_BY_VALUE':
        
      let namevalue = action.payload.name;
      let sectionvalue = action.payload.section;
      let classvalue = action.payload.classteacher;
      let subjectvalue = action.payload.subject;
        
        
      state.filteredTeachers = state.teachers.filter(teacher => {
        return (
          teacher.name.toLowerCase().includes(namevalue) &&
          teacher.subject.toLowerCase().includes(sectionvalue) &&
          teacher.classteacher.toLowerCase().includes(classvalue)&&
          teacher.subject.toLowerCase().includes(subjectvalue)) 
      });
        
        
      if (!(namevalue || sectionvalue||classvalue||subjectvalue)) state.filteredTeachers = state.teachers;
  
        
      return (Object.assign({},state));
      
    case 'ADD_DATA':
      state.filteredTeachers.push(action.payload.value)
      return (Object.assign({},state,{filteredTeachers:state.filteredTeachers}));

    case 'DELETE_DATA':
      state.filteredTeachers.splice(action.payload.value, 1);
      return (Object.assign({},state));
    
    case 'MODIFY_DATA':
      let key=action.payload.value.key;
              
      state.filteredTeachers.map(teacher=>{
        if (teacher.key===key) return Object.assign(teacher,action.payload.value)          
        return teacher;
      })
              
      return (Object.assign({},state));
    case 'LOAD_DATA':
      const teachers=[
        {name:'Rine',dateofbirth:'29/06/99',gender:'Male',address:'',phone:'',classteacher:'',subject:'',role:'',image:null,value:'rine',key:'1'},
        {name:'Sam',dateofbirth:'29/06/99',gender:'Male',address:'',phone:'',classteacher:'',subject:'',role:'',image:null,value:'sam',key:'2'},
        {name:'Samuel',dateofbirth:'29/06/99',gender:'Male',address:'',phone:'',classteacher:'',subject:'',role:'',image:null,value:'samuel',key:'3'},
      ]

      counterToActiviateLoadDataOnce ++; 
      
      if (counterToActiviateLoadDataOnce === 1) return (Object.assign({},state,{teachers,filteredTeachers:teachers}));
      
      return (Object.assign({},state))

    default:
      return state;
  }
};
  
export default ticketReducer;
  
  