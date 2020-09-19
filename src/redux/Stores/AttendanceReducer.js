let counterToActiviateLoadDataOnce = 0;


export const addAttendance = (payload) => ({
  type: "ADD_ATTENDANCE",
  payload,
});

export const loadAttendance = (payload) => ({
  type: "LOAD_ATTENDANCE",
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
        state.filteredTeachers = state.teachers;

      return Object.assign({}, state);

    case "ADD_ATTENDANCE":
      
      return (Object.assign({},state,{filteredTeachers:[...state.filteredTeachers,action.payload.value]}));

    case "MODIFY_ATTENDANCE":
      let key = action.payload.value.key;

      state.filteredTeachers.map((teacher) => {
        if (teacher.key === key)
          return Object.assign(teacher, action.payload.value);
        return teacher;
      });

      return Object.assign({}, state);
    case "LOAD_ATTENDANCE":
      const attendance = [
        {date:new Date(2020,8,16),rine:true,sam:false,samuel:false},
        {date:new Date(2020,8,17),rine:false,sam:true,samuel:false},
        {date:new Date(2020,8,18),rine:true,sam:false,samuel:false},
      ];

      counterToActiviateLoadDataOnce++;

      if (counterToActiviateLoadDataOnce === 1)
        return Object.assign({}, state, {
          attendance,
          filteredAttendance: attendance,
        });

      return Object.assign({}, state);

    default:
      return state;
  }
};

export default ticketReducer;
