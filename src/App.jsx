/* eslint-disable react/no-unknown-property */
import { Route, Routes } from "react-router-dom";
import Router from "./Router/Router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Router />}></Route>
      </Routes>
    </>
  );
}

export default App;
