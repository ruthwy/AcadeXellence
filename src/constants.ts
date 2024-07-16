export const routes = {
  home: {
    to: "/homepage",
    labelText: "Home",
  },
  about: {
    to: "/about",
    labelText: "About",
  },
  login: {
    to: "/login",
    labelText: "Login",
  },
  signup: {
    to: "/signup",
    labelText: "Signup",
  },
  logout: {
    to: "/login",
    labelText: "Logout",
  },
  admin: {
    to: "/admin",
    labelText: "admin",
  },
  student: {
    to: "/student",
    labelText: "student",
  },
  instructor: {
    to: "/instructor",
    labelText: "instructor",
  }, qao: {
    to: "/qa",
    labelText: "qao",
  }, pc: {
    to: "/pc",
    labelText: "pc",
  }
};

export const studentRoutes = {
  dashboard: {
    to: "/student",
    labelText: "Dashboard",
  },
  courses: {
    to: "/student/courses",
    labelText: "Courses",
  },
  // myInfo: {
  //   to: "/student/info",
  //   labelText: "My info",
  // },
  exams: {
    to: "/student/exams",
    labelText: "Exams",
  },
  assignments: {
    to: "/student/assignments",
    labelText: "Assignments",
  },
  discussions: {
    to: "/student/chat",
    labelText: "Discussions",
  },
  feedback: {
    to: "/student/feedback",
    labelText: "Feedback",
  },
  subMenu: {
    syllabus: {
      to: "/student/syllabus",
      labelText: "Syllabus",
    },
    modules: {
      to: "/student/modules",
      labelText: "Modules",
    },
    grades: {
      to: "/student/grades",
      labelText: "Grades",
    },
  },
};

export const instructorRoutes = {
  dashboard: {
    to: "/instructor",
    labelText: "Dashboard",
  },
  instructions: {
    to: "/instructor/instructions",
    labelText: "Instructions",
  },
  viewRecommendations: {
    to: "/instructor/instructorrecommendations",
    labelText: "View Recomendations",
  },
  studentsList: {
    to: "/instructor/students/list",
    labelText: "Students",
  },
  modulesList: {
    to: "/instructor/modules/list",
    labelText: "Modules",
  },
  assignmentsList: {
    to: "/instructor/assignments/list",
    labelText: "Assignments",
  },
  examsList: {
    to: "/instructor/exams/list",
    labelText: "Exams",
  },
  feedback: {
    to: "/instructor/feedback",
    labelText: "Feedback",
  },
  discussions: {
    to: "/instructor/chat",
    labelText: "Discussions",
  },
};

export const QARoutes = {
  qualityAssuranceProgramsAndPolicies: {
    to: "/qa",
    labelText: "Quality Assurance: Programs and policies",
  },
  recommendations: {
    to: "/qa/recommendation",
    labelText: "Recommendations",
  },
  manageCourse: {
    to: "/qa/manageCourse",
    labelText: "Manage Course",
  },
  analyseCourseReports: {
    to: "/qa/reports",
    labelText: "Analyse Course Reports",
  },
  monitorInstructorAndProgramCoordinatorActivities: {
    to: "/qa/monitor",
    labelText: "Monitor Instructor and Program Coordinator Activities",
  },
  chat: {
    to: "/qa/chat",
    labelText: "Chat",
  },
};

export const adminRoutes = {
  manageUser: {
    to: "/admin/manageStudent",
    labelText: "Manage User",
  },
  manageCourse: {
    to: "/admin/manageCourse",
    labelText: "Manage Course",
  },
  chat: {
    to: "/admin/chat",
    labelText: "Chat",
  },
  manageUserActivities: {
    to: "/admin/manageUserAccount",
    labelText: "Manage User Activities",
  },
};

export const PCRoutes = {
  monitorGoals: {
    to: "/pc/goals",
    labelText: "Monitor Goals",
  },
  collaboration: {
    to: "/pc/collaboration",
    labelText: "Collaboration",
  },
  queries: {
    to: "/pc/enquiries",
    labelText: "Queries",
  },
  reports: {
    to: "/pc/reports",
    labelText: "Reports",
  },
  chat: {
    to: "/pc/chat",
    labelText: "Chat",
  },
};
