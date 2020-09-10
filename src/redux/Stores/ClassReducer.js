
  
export const addClassData = (payload) => ({
    type: 'ADD_DATA', 
    payload
  });
    
export const loadClassData = (payload) => ({
    type: 'LOAD_CLASS_DATA', 
    payload
  });
    
  
  
  
    
  
  let counterToActiviateLoadDataOnce = 0 ;
  
    
const classReducer = (state = {}, action) => {
    switch (action.type) {
        case "FILTER_TEACHER_DATA":
            let classvalue = action.payload.class;
            let sectionvalue = action.payload.section;

            state.filteredClass = state.classes.filter((classname) => {
                return (
                    classname.class.toLowerCase().includes(classvalue) &&
                    classname.section.toLowerCase().includes(sectionvalue) 
                );
            });

            if (!(classvalue || sectionvalue))
                state.filteredClass = state.classes;

            return Object.assign({}, state);
        case 'ADD_DATA':
            console.log(action.payload.value)
            console.log(state.filteredClass)
            return Object.assign({}, state, {
                filteredClass: [...state.filteredClass,action.payload.value]
            });

      case 'LOAD_CLASS_DATA':
          const classdata = [
                  { class:'I',
                    section:'',
                    teacher:'',
                    room:'',   
                    subject:[
                        {subject:'Math',teacher:'Mr.Did'}],
                    }
                , { class:'II',
                    section:'',
                    teacher:'',
                    room:'',   
                    subject:[
                        {subject:'Math',teacher:'Mr.Did'}],
                }
              
                ]
          counterToActiviateLoadDataOnce ++;
          
          if (counterToActiviateLoadDataOnce === 1) return (Object.assign({},state,{classes:classdata,filteredClass:classdata}))
          
          return (Object.assign({},state))
        
      default:
        return state;
      }
  };
    
  export default classReducer;
    
  