let counterToActiviateLoadDataOnce = 0;


export const addAttendance = (payload) => ({
  type: "ADD_ATTENDANCE",
  payload,
});

export const loadAttendance = (payload) => ({
  type: "LOAD_ATTENDANCE",
  payload,
});
export const loadSpecificAttendance = (payload) => ({
    type: "LOAD_SPECIFIC_ATTENDANCE",
    payload,
  });
export const modifyAttendance = (payload) => ({
  type: "MODIFY_ATTENDANCE",
  payload,
});
export const filterAttendance = (payload) => ({
  type: "FILTER_ATTENDANCE",
  payload,
});

const ticketReducer = (state = [], action) => {
  switch (action.type) {
    case "FILTER_ATTENDANCE":

      let {datefrom,dateto}=action.payload.value;
      
      state.filteredAttendance = state.attendance.filter((attendance) => {

        return (
            datefrom.getTime()<=attendance.date.getTime() &&
            dateto.getTime()>=attendance.date.getTime()
          
        );
      });

      if (!(datefrom || dateto ))
        state.filteredAttendance = state.attendance;

      return Object.assign({}, state);

    case "ADD_ATTENDANCE":
      let attendancedata=action.payload.value;
      let checkifthecurrentdatearesubmitted = state.filteredAttendance.filter(attendance=>{
          return (attendancedata['date'].getTime()===attendance.date.getTime())
      })
    
      if (checkifthecurrentdatearesubmitted.length > 0) return state;
      
      return (Object.assign({},state,{
            attendance:[...state.attendance,attendancedata],
            filteredAttendance:[...state.filteredAttendance,attendancedata]}));

    case "MODIFY_ATTENDANCE":
      let attendancedate = action.payload.date;

      state.filteredAttendance.map((attendance) => {
        if (attendance.date.getTime() === attendancedate.getTime())
          return Object.assign({},state,{filteredAttendance:state.filterAttendance} );
        return attendance;
      });

      return state;
    case "LOAD_SPECIFIC_ATTENDANCE":
        let date = action.payload.date;
        
        if (!date) return state;
        console.log(date)
        state.filteredAttendance=state.attendance.filter((attendance) => {
            console.log(date,attendance.date)
            return (attendance.date.getTime()===date.getTime())
        });
        console.log()
        
        
        return Object.assign({}, state,{filteredAttendance:state.filteredAttendance});
    case "LOAD_ATTENDANCE":
      const attendance = [
        {date:new Date('2020,9,16,12:00:00'),rine:true,sam:false,samuel:false},
        {date:new Date('2020,9,17,12:00:00'),rine:false,sam:true,samuel:false},
        {date:new Date('2020,9,18,12:00:00'),rine:true,sam:true,samuel:true},
      ];
      
      counterToActiviateLoadDataOnce++;

      if (counterToActiviateLoadDataOnce === 1)
        return Object.assign({}, state, {
          attendance,
          filteredAttendance: attendance,
        });

      return state;

    default:
      return state;
  }
};

export default ticketReducer;
