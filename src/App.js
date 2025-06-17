import { Provider } from "react-redux";
import Body from "./pages/Body";
import Head from "./components/Head";
import { store } from "./utils/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="p-3">
      <Provider store={store}>
        <Head />
        <div className="flex">
          <SideBar />
          <BrowserRouter>
            <Routes>
              <Route index element={<Body />} />
              <Route path="watch" element={<WatchPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Provider>
    </div>
  );
}

export default App;
