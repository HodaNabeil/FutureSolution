import { Route, Routes } from "react-router-dom"
import Home from "./Page/Home"
import { Helper } from "./Utility";
import { useEffect } from "react";
import { SetNewLang } from "./Redux";
import { useDispatch } from "react-redux";



function App() {
  const OldLang = Helper.GetStorage("Lang");
  const dispatch = useDispatch()
  useEffect(() => {
    if (!OldLang) {
      dispatch(SetNewLang("en"));
    }
    // else {
    //   dispatch(SetNewLang(OldLang));
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </>
  )
}

export default App
