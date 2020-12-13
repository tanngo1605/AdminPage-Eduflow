const drawercontent = [
  {
    content: 'Students',
    web: 'student',
    activeimage: 'person_active.png',
    inactiveimage: "person_inactive.png",
    subcontent: [
      { content: 'Find a student', web: 'studentsearch', clicked: false },
      { content: 'Move student', web: 'movestudent', clicked: false },
      { content: 'Migration', web: 'studentmigration', clicked: false }

    ],
    clicked: false,

  },
  {
    content: 'Teacher',
    web: 'teacher',
    activeimage: 'people_active.png',
    inactiveimage: "people_inactive.png",
    subcontent: [
      { content: 'Add a teacher', web: 'teacher', clicked: false },
      { content: 'Find a teacher', web: 'teachersearch', clicked: false }],
    clicked: false,

  },
  {
    content: 'Gallery',
    web: 'gallery',
    activeimage: 'gallery_active.png',
    inactiveimage: "gallery_inactive.png",
    subcontent: [],
    clicked: false,

  },
  {
    content: 'Time table',
    web: 'timetable',
    activeimage: 'timetable_active.png',
    inactiveimage: "timetable_inactive.png",
    subcontent: [],
    clicked: false,

  },
  {
    content: 'Exams',
    web: 'exam',
    activeimage: 'exam_active.png',
    inactiveimage: "exam_inactive.png",
    subcontent: [
      { content: 'Schedule an exam', web: 'exam', clicked: false },
      { content: 'Arrange exam duty', web: 'examduty', clicked: false }
    ],
    clicked: false,

  },
  {
    content: 'Syllabus',
    web: 'syllabus',
    activeimage: 'syllabus_active.png',
    inactiveimage: "syllabus_inactive.png",
    subcontent: [],
    clicked: false,

  },
  {
    content: 'Results',
    web: 'result',
    activeimage: 'done_inactive.png',
    inactiveimage: "done_inactive.png",
    subcontent: [],
    clicked: false,

  },
  {
    content: 'Calendar events',
    web: 'event',
    activeimage: 'event_active.png',
    inactiveimage: "event_inactive.png",
    subcontent: [
      { content: 'Find event', web: 'event', clicked: false },
      { content: 'Create event', web: 'event/createevent', clicked: false },
    ],
    clicked: false,

  },
  {
    content: 'Check tickets',
    web: 'ticket',
    activeimage: 'noti.png',
    inactiveimage: "noti.png",
    subcontent: [],
    clicked: false,

  },
  //{
  //  content: 'Fees',
  //  web: 'fee',
  //  activeimage: 'coin_inactive.png',
  //  inactiveimage: "coin_inactive.png",
  // subcontent: [],
  // clicked: false,

  //},
  {
    content: 'School Profile',
    web: 'schoolprofile',
    activeimage: 'schoolprofile_inactive.png',
    inactiveimage: "schoolprofile_inactive.png",
    subcontent: [],
    clicked: false,
    key: 12
  },
  {
    content: 'Circular',
    web: 'circular',
    activeimage: 'circular_inactive.png',
    inactiveimage: "circular_inactive.png",
    subcontent: [],
    clicked: false,
    key: 13
  },
  {
    content: 'Classes',
    web: 'class',
    activeimage: 'exam_active.png',
    inactiveimage: "exam_inactive.png",
    subcontent: [
      { content: 'Create Class', web: 'class', clicked: false },
      { content: 'Create Subject', web: 'subject', clicked: false }
    ],
    clicked: false,
    key: 14
  },
];
export default drawercontent;