import { Provider } from "react-redux";
import store from "./redux/store";
import { Route, Routes } from "react-router-dom";

import { Home, SearchPage, Menu ,MyLocationPage} from "./pages/index";

function App() {
  return (
    <div className="container mx-auto max-w-screen-2xl">
      <Provider store={store}>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/myCity" element={<MyLocationPage />}/>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
