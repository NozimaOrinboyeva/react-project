import "./App.css";

// react-router-dom
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
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
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout/>}>
            <Route path="faq" element={<Faq/>}/>
            <Route path="form" element={<Form/>}/>
        </Route>
        <Route path="articles" element={<ArticlesLayout/>}>
            <Route index element={<Articles/>}/>
            <Route path=":id" element={<ArticlesDetail/>}/>
        </Route>

        {/* PAGE NOT FOUND */}
        <Route path="*" element={<PageNotFound/>}/>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;