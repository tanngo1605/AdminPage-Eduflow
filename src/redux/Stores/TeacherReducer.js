let counterToActiviateLoadDataOnce = 0;


export const addTeacherData = (payload) => ({
  type: "ADD_TEACHER_DATA",
  payload,
});

export const loadTeacherData = (payload) => ({
  type: "LOAD_TEACHER_DATA",
  payload,
});
export const deleteTeacherData = (payload) => ({
  type: "DELETE_TEACHER_DATA",
  payload,
});
export const modifyTeacherData = (payload) => ({
  type: "MODIFY_TEACHER_DATA",
  payload,
});
export const filterTeacherData = (payload) => ({
  type: "FILTER_TEACHER_DATA",
  payload,
});

const ticketReducer = (state = [], action) => {
  switch (action.type) {
    case "FILTER_TEACHER_DATA":
      
      
      let {name='',section='',classteacher='',subject=''}=action.payload.value;
      
      state.filteredTeachers = state.teachers.filter((teacher) => {

        return (
          teacher.name.toLowerCase().includes(name) &&
          teacher.section.toLowerCase().includes(section) &&
          teacher.classteacher.toLowerCase().includes(classteacher) &&
          teacher.subject.toLowerCase().includes(subject)
        );
      });
      console.log(state.filteredTeachers)
      if (!(name || section || classteacher || subject))
        state.filteredTeachers = state.teachers;

      return Object.assign({}, state);

    case "ADD_TEACHER_DATA":
      let teacherdata= action.payload.value;
      return (Object.assign({},state,{
        teachers:[...state.teachers,teacherdata],
        filteredTeachers:[...state.filteredTeachers,teacherdata]}));

    case "DELETE_TEACHER_DATA":
      state.filteredTeachers.splice(action.payload.value, 1);
      return Object.assign({}, state);

    case "MODIFY_TEACHER_DATA":
      let key = action.payload.value.key;

      state.filteredTeachers.map((teacher) => {
        if (teacher.key === key)
          return Object.assign(teacher, action.payload.value);
        return teacher;
      });

      return Object.assign({}, state);
    case "LOAD_TEACHER_DATA":
      const teachers = [
        {
          name: "Rine",
          dateofbirth: "29/06/99",
          gender: "Male",
          address: "",
          phone: "",
          classteacher: "",
          subject: "",
          role: "",
          image: null,
          value: "rine",
          section:"V",
          key: "1",
          attendance:false,
        },
        {
          name: "Sam",
          dateofbirth: "29/06/99",
          gender: "Male",
          address: "",
          phone: "",
          classteacher: "",
          subject: "",
          role: "",
          image: null,
          value: "sam",
          section:"V",
          key: "2",
          attendance:false,
        },
        {
          name: "Samuel",
          dateofbirth: "29/06/99",
          gender: "Male",
          address: "",
          phone: "",
          classteacher: "",
          subject: "",
          role: "",
          image: null,
          value: "samuel",
          section:"V",
          key: "3",
          attendance:false,
        },
      ];

      counterToActiviateLoadDataOnce++;

      if (counterToActiviateLoadDataOnce === 1)
        return Object.assign({}, state, {
          teachers,
          filteredTeachers: teachers,
        });

      return Object.assign({}, state);

    default:
      return state;
  }
};

export default ticketReducer;
