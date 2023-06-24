import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@/widgets";
import { Home, NoMatch } from "@/pages";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} /> */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
