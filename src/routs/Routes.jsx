import {
  createBrowserRouter,
 
} from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Learning from "../pages/Learning";
import Tutorials from "../pages/Tutorials";
import Profile from "../pages/Profile";
import LessonCards from "../components/lessonCard/LessonCards"
import MatchedLesson from "../pages/MatchedLesson";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRout from "./PrivateRout";
import ErrorPage from "../pages/ErrorPage";
import UpdateProfile from "../pages/UpdateProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/lesson",
       
        element: <Learning />,
      },
      
      
      {
        path:'/lesson/:lesson_no',
        loader:async({params})=>{
          const res=await fetch('/vocab/japanese_vocabulary_lessons.json')
          const data=await res.json();
          // param data
          const paramsData = data.filter(f => Number(f.lesson_no) === Number(params.lesson_no));
          console.log('Params:', params.lesson_no);
console.log('Data:', paramsData);
          return paramsData
        },
        element: <PrivateRout><MatchedLesson></MatchedLesson></PrivateRout>
       
      },
      {
        path:"/tutorials",
        element:<Tutorials></Tutorials>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/profile",
        element:<PrivateRout><Profile></Profile></PrivateRout>
      },
      {
        path:"/update-profile",
        element: <PrivateRout><UpdateProfile></UpdateProfile></PrivateRout>
      },
      {
        path:"*",
        element:<ErrorPage></ErrorPage>
      }

    ]
  },
]);
export default router;
