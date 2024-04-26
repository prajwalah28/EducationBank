import { useState } from "react";
import Layout from "./Layout/Layout";
import Privacy from "./pages/AccountPage/LeftBar/Privacy";
import DeleteForm from "./pages/AccountPage/LeftBar/DeleteForm";
import CourseCard from "./pages/Courses/CourseCard";
import AfterLogin from "./components/Header/AfterLogin";
import Logout from "./pages/Logout/Logout";
import CourseDetails from "./pages/CourseDetails/CourseDetails"
import Final from "./pages/AddCart/Final";
import PaymentPage from './pages/PaymentPage/PaymentPage'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* sanket */}
    {/* <Final/> */}
    {/* prajwal */}
      {/* <h1>App</h1> */}
      <Layout />
      {/* <CourseDetails/> */}
      {/* <RightBar/> */}
      {/* <Form/> */}
      {/* <AccountProfile/> */}
      {/* <Payment /> */}
      {/* <Privacy /> */}
      {/* <DeleteForm /> */}
      {/* <CourseCard /> */}
      {/* <AfterLogin /> */}
      {/* <Logout /> */}
      {/* <PaymentPage/> */}

  
    </>
  );
}

export default App;
