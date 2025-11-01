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