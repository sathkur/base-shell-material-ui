import MainLayout from "./layouts/MainLayout";
import About from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";


    
const routes = [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '', element: <HomePage /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'about-us', element: <About /> },
        // {
        //     path: 'my-account',
        //     element: <MyAccount/>,
        //     children: [
        //       { path: 'profile', element: <Profile /> },
        //     ]
        // },
        // { path: '*', element: <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." extra={<Button type="primary">Back Home</Button>}/> },
        { path: '*', element: <PageNotFound /> },

      ]
    },

]

export default routes;