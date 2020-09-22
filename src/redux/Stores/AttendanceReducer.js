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

      let {name,section,classteacher,subject}=action.payload.value;
      
      state.filteredTeachers = state.teachers.filter((teacher) => {

        return (
          teacher.name.toLowerCase().includes(name) &&
          teacher.section.toLowerCase().includes(section) &&
          teacher.classteacher.toLowerCase().includes(classteacher) &&
          teacher.subject.toLowerCase().includes(subject)
        );
      });

      if (!(name || section || classteacher || subject))
        state.filteredAttendance = state.teachers;

      return Object.assign({}, state);

    case "ADD_ATTENDANCE":
      let attendancedata=action.payload.value;
      let checkifthecurrentdatearesubmitted = state.filteredAttendance.filter(attendance=>{
          return (attendancedata['date'].getTime()===attendance.date.getTime())
      })
    
      if (checkifthecurrentdatearesubmitted.length > 0) return state;
      
      return (Object.assign({},state,{attendance:[...state.attendance,attendancedata]},{filteredAttendance:[...state.filteredAttendance,attendancedata]}));

    case "MODIFY_ATTENDANCE":
      let key = action.payload.date;

      state.filteredTeachers.map((teacher) => {
        if (teacher.key === key)
          return Object.assign(teacher, action.payload.value);
        return teacher;
      });

      return Object.assign({}, state);
    case "LOAD_SPECIFIC_ATTENDANCE":
        let date = action.payload.date;
        if (!date) return state;
        state.filteredAttendance.map((attendance) => {
            return (attendance.date.getTime()===date.getTime())
        });
        
  
        return Object.assign({}, state,{filteredAttendance:state.filteredAttendance});
    case "LOAD_ATTENDANCE":
      const attendance = [
        {date:new Date(2020,8,16),rine:true,sam:false,samuel:false},
        {date:new Date(2020,8,17),rine:false,sam:true,samuel:false},
        {date:new Date(2020,8,18),rine:true,sam:true,samuel:true},
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
