import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import LogIn from "../LogIn/LogIn";
import Register from "../Register/Register";
import Error from "../ErrorElement/Error";
import Home from "../Home/Home";
import MyQueries from "../MyQueries/MyQueries";
import AddQuery from "../MyQueries/AddQuery";
import QueriesDetails from "../QueriesDetails/QueriesDetails";
import PrivateRoute from "./PrivateRoute";
import Queries from "../Queries/Queries";
import UpdateQuery from "../MyQueries/UpdateQuery";
import MyRecommendations from "../MyRecommendations/MyRecommendations";
import RecommendationForMe from "../RecommendationForMe/RecommendationForMe";


const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout></MainLayout>,
          errorElement: <Error></Error>,
          children: [
            {
              path : '/',
              element: <Home></Home>
            },
            {
              path: "/login",
              element: <LogIn></LogIn>
            },
            {
              path:'/register',
              element: <Register></Register>
            },
            {
              path:"/myQueries",
              element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>
            },
            {
              path: '/myQueries/addQuery',
              element: <PrivateRoute><AddQuery></AddQuery></PrivateRoute>
            },
            {
              path: '/myQueries/:id',
              element: <PrivateRoute><QueriesDetails></QueriesDetails></PrivateRoute>,
              loader : ({params}) => fetch(`https://summah-bazaar-server-4bd2hiudw-mahfuj543s-projects.vercel.app/queries/${params.id}`)
            },
               {
              path: '/update/:id',
              element: <PrivateRoute><UpdateQuery></UpdateQuery></PrivateRoute>,
              loader : ({params}) => fetch(`https://summah-bazaar-server-4bd2hiudw-mahfuj543s-projects.vercel.app/queries/${params.id}`)
            },
            {
              path: "/queries",
              element: <Queries></Queries>,
              loader : () => fetch(`https://summah-bazaar-server-4bd2hiudw-mahfuj543s-projects.vercel.app/queries`)
            },
            {
              path: "/myrecommendations",
              element: <MyRecommendations></MyRecommendations>,
              loader: () => fetch(`https://summah-bazaar-server-4bd2hiudw-mahfuj543s-projects.vercel.app/recommendations`)
            },
            {
              path: '/recommendationForMe',
              element: <RecommendationForMe></RecommendationForMe>,
            }

          ]
        },
]);



export default router;