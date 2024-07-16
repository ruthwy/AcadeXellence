import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Student from "./components/StudentModule/Student";
import Course from "./components/StudentModule/CourseDetail";
import DashboardCourseList from "./components/StudentModule/DashboardCourseList";
import StudentInfo from "./components/StudentModule/StudentInfo";
import StudentCourse from "./components/StudentModule/StudentCourse";
import StudentExams from "./components/StudentModule/StudentExams";
import StudentAssignments from "./components/StudentModule/StudentAssignments";
import StudentDiscussion from "./components/StudentModule/StudentDiscussion";
import StudentFeedback from "./components/StudentModule/StudentFeedback";
import Syllabus from "./components/StudentModule/Syllabus";
import Modules from "./components/StudentModule/Modules";
import Grades from "./components/StudentModule/Grades";
import InstructorDashboard from "./components/InstructorModule/InstructorDashboard";
import Instructor from "./components/InstructorModule/Instructor";
import InstructorInstructions from "./components/InstructorModule/InstructorInstructions";
import StudentsList from "./components/InstructorModule/StudentsList";
import InstructorInfo from "./components/InstructorModule/InstructorInfo";
import InstructorModules from "./components/InstructorModule/InstructorModules";
import InstructorAssignmentsList from "./components/InstructorModule/InstructorAssignmentList";
import InstructorExamsList from "./components/InstructorModule/InstructorExamsList";
import InstructorFeedbackList from "./components/InstructorModule/InstructorFeedbackList";
import InstructorChat from "./components/InstructorModule/InstructorChat";
import QA from "./components/QAModule/QA";
import QADashboard from "./components/QAModule/QADashboard";
import QARecommendations from "./components/QAModule/QARecmmendation";
import QAManageCourse from "./components/QAModule/QAManageCourse";
import QAReports from "./components/QAModule/QAReports";
import QAMonitor from "./components/QAModule/QAMonitor";
import QAChat from "./components/QAModule/QAChat";
import Admin from "./components/AdminModule/Admin";
import ManageUser from "./components/AdminModule/ManageUser";
import ManageCourse from "./components/AdminModule/ManageCourse";
import AdminChat from "./components/AdminModule/AdminChat";
import ManageUserActivities from "./components/AdminModule/ManageUserActivities";
import PC from "./components/PCModule/PC";
import PCGoals from "./components/PCModule/PCGoals";
import Collabs from "./components/PCModule/Collabs";
import PCQueries from "./components/PCModule/PCQueries";
import PCReports from "./components/PCModule/PCReports";
import PCChat from "./components/PCModule/PCChat";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import { routes } from "./constants";
import ForgotPassword from "./components/ForgotPassword";
import EditForm from "./components/AdminModule/editUser";
import Logout from './components/Logout';
import InstructorRecommendations from "./components/InstructorModule/InstructorRecommendations";
function App() {
  return (
    <div
      style={{
        height: "100vh",
        overflowY: "auto",
        overflowX: "auto",
        width: "100%",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Navigate to={"/homepage"} />} />
          <Route path={routes.login.to} element={<Login />} />
          <Route path={routes.home.to} element={<Homepage />} />
          <Route path={routes.logout.to} element={<Logout />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />


          <Route path="/editForm" element={<EditForm />} />

          <Route path="/dashboard" element={<Login />} />
          <Route path={routes.signup.to} element={<Signup />} />
          <Route path="/student" element={<Student />}>
            <Route index element={<DashboardCourseList />} />
            <Route path="courses" element={<StudentCourse />} />
            <Route path="info" element={<StudentInfo />} />
            <Route path="exams" element={<StudentExams />} />
            <Route path="assignments" element={<StudentAssignments />} />
            <Route path="chat" element={<StudentDiscussion />} />
            <Route path="feedback" element={<StudentFeedback />} />
            <Route path="syllabus" element={<Syllabus />} />
            <Route path="modules" element={<Modules />} />
            <Route path="grades" element={<Grades />} />
          </Route>
          <Route path="/instructor" element={<Instructor />}>
            <Route index element={<InstructorDashboard />} />
            <Route path="instructions" element={<InstructorInstructions />} />
            <Route path="students/list" element={<StudentsList />} />
            <Route path="instructorrecommendations" element={<InstructorRecommendations />} />
            <Route path="modules/list" element={<InstructorModules />} />
            <Route
              path="assignments/list"
              element={<InstructorAssignmentsList />}
            />
            <Route path="exams/list" element={<InstructorExamsList />} />
            <Route path="feedback" element={<InstructorFeedbackList />} />
            <Route path="chat" element={<InstructorChat />} />
          </Route>
          <Route path="/qa" element={<QA />}>
            <Route index element={<QADashboard />} />
            <Route path="recommendation" element={<QARecommendations />} />
            <Route path="manageCourse" element={<QAManageCourse />} />
            <Route path="reports" element={<QAReports />} />
            <Route path="monitor" element={<QAMonitor />} />
            <Route path="chat" element={<QAChat />} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route index element={<Navigate to={"manageStudent"} />} />
            <Route path="manageStudent" element={<ManageUser />} />
            <Route path="manageCourse" element={<ManageCourse />} />
            <Route path="chat" element={<AdminChat />} />
            <Route
              path="manageUserAccount"
              element={<ManageUserActivities />}
            />
          </Route>
          <Route path="/pc" element={<PC />}>
            <Route index element={<Navigate to="goals" />} />
            <Route path="goals" element={<PCGoals />} />
            <Route path="collaboration" element={<Collabs />} />
            <Route path="enquiries" element={<PCQueries />} />
            <Route path="reports" element={<PCReports />} />
            <Route path="chat" element={<PCChat />} />
          </Route>
          <Route path="/course/:id" element={<Course />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path={routes.about.to} element={<AboutUs />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
