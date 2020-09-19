
  
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
    
  