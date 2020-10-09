import { act } from "react-dom/test-utils";

let counterToActiviateLoadDataOnce = 0;
let counter = 0
export const addData = (payload) => ({
  type: "ADD_STUDENT_DATA",
  payload,
});

export const loadData = (payload) => ({
  type: "LOAD_STUDENT_DATA",
  payload,
});
export const loadMoveStudentData = (payload) => ({
  type: "MOVE_STUDENT_DATA",
  payload,
});
export const deleteData = (payload) => ({
  type: "DELETE_STUDENT_DATA",
  payload,
});

export const modifyData = (payload) => ({
  type: "MODIFY_STUDENT_DATA",
  payload,
});

export const filterByValue = (payload) => ({
  type: 'FILTER_STUDENT_DATA',
  payload
});



const StudentReducer = (state = [], action) => {
  switch (action.type) {
    case 'FILTER_STUDENT_DATA':
      let { name = '', classvalue = '', section = '', ticked = false } = action.payload.value;

      state.filteredStudents = state.students.filter(student => {
        return (
          student.name.toLowerCase().includes(name) &&
          student.section.toLowerCase().includes(section) &&
          student.classvalue.toLowerCase().includes(classvalue))

      });


      if ((name || classvalue || section)) { } else state.filteredStudents = state.students;


      return (Object.assign({}, state));
    case 'MODIFY_STUDENT_DATA':
      let key = action.payload.value.key
      state.filteredStudents.map(student => {
        if (student.key === key) return Object.assign(student, action.payload.value)

        return student;
      })



      return (Object.assign({}, state));
    case 'ADD_STUDENT_DATA':
      let studentdata = action.payload.value;
      return (Object.assign({}, state, {
        students: [...state.students, studentdata],
        filteredStudents: [...state.filteredStudents, studentdata]
      }));
    case 'DELETE_STUDENT_DATA':
      state.filteredStudents.splice(action.payload.value, 1);
      return (Object.assign({}, state));
    // case 'DELETE_STUDENT_DATA':
    //   const moveStudentsInfo = [
    //     {name:"",fromclassvalue:"",toclassvalue:"",fromsection:"",tosection:""}
    //   ]
    case 'LOAD_STUDENT_DATA':
      const students = [
        { name: "Adam", classvalue: "V", section: "H", rollno: '25', address: '', classteacher: '', fathername: '', mothername: '', gender: '3211321', fatheroccupation: '312312', fathermobileno: '321312', othermobileno: '41321321', admission: '5464', image: null, ticked: false, key: '1' },
        { name: "Akhil", classvalue: "V", section: "H", rollno: '24', address: '', classteacher: '', fathername: '', mothername: '', gender: '3211321', fatheroccupation: '312312', fathermobileno: '321312', othermobileno: '3000', admission: '40', image: null, ticked: false, key: '2' },
        { name: "Adin", classvalue: "H", section: "TL", rollno: '23', address: '', classteacher: '', fathername: '', mothername: '', gender: '3211321', fatheroccupation: '312312', fathermobileno: '321312', othermobileno: '3000', admission: '40', image: null, ticked: false, key: '3' },
      ]
      counterToActiviateLoadDataOnce++;
      if (counterToActiviateLoadDataOnce === 1) return (Object.assign({}, state, { students, filteredStudents: students }));

      return (Object.assign({}, state))
    case 'MOVE_STUDENT_DATA':
      let dataOfMoveStudent = action.payload
      console.log(action.payload);
      counter++;
      if (counter === 1)
        return (Object.assign({}, state, { moveStudentData: dataOfMoveStudent }))

      return (Object.assign({}, state))

    default:
      return state;
  }
};

export default StudentReducer;


