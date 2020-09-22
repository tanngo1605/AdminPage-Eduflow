
  
export const addClassData = (payload) => ({
    type: 'ADD_CLASS', 
    payload
  });
    
export const loadClassData = (payload) => ({
    type: 'LOAD_CLASS', 
    payload
  });
    
  
  
  
    
  
  let counterToActiviateLoadDataOnce = 0 ;
  
    
const classReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_CLASS':
            let newclassdata=action.payload.value;
            return Object.assign({}, state, {
                classes:[...state.classes,newclassdata],
                filteredClass: [...state.filteredClass,newclassdata]
            });

      case 'LOAD_CLASS':
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
    
  