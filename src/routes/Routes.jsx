import { createBrowserRouter } from "react-router";
import Root from "../components/layout/Root";
import Home from "../components/pages/Home";
import Product from "../components/pages/Product";
import Blogs from "../components/pages/Blogs";
import Contact from "../components/pages/Contact";
import About from "../components/pages/About";



const router = createBrowserRouter([


    {
        path:'/',
        Component: Root,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path:'product',
                Component: Product
            },
            {
                path: 'Blogs',
                Component: Blogs
            },
            {
                path: 'contact',
                Component: Contact
            },
            {
                path: 'about',
                Component: About
            }
        ]
       

       
    }
])

export default router;