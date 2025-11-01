import "./App.css";

// react-router-dom
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom"; // v6...

import Home from "./page/Home";
import About from "./page/Aboute";
import Faq from './page/help/Faq'
import Form from './page/help/Form'
import Articles from "./page/articles/Articles";
import ArticlesDetail from "./page/articles/ArticlesDetail";
import PageNotFound from "./page/help/PageNotFound";

// layouts
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ArticlesLayout from "./layout/ArticlesLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement:<PageNotFound/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: 'contact',
          element: <ContactLayout/>,
          children: [
            {
              path: 'faq',
              element: <Faq/> 
            },
            {
              path: 'Form',
              element: <Form/>
            }
          ]
        },
        {
          path: 'articles',
          element: <ArticlesLayout/>,
          children: [
            {
              index: true,
              element: <Articles/>
            },
            {
              path: "id",
              element: <ArticlesDetail/>
            },
            {
              path: '*',
              element: <PageNotFound/>
            }
          ]
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;