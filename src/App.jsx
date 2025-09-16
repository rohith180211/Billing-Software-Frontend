import MenuBar from "./Components/MenuBar/menuBar.jsx";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import ManageCategory from "./pages/ManageCategory/ManageCategory.jsx";
import ManageUsers from "./pages/ManageUsers/ManageUsers.jsx";
import ManageItems from "./pages/ManageItems/ManageItems.jsx";
import Explore from "./pages/Explore/Explore.jsx";
import {Toaster} from "react-hot-toast";

const App=()=>{
    return (
      <div>
          <MenuBar/>
          <Toaster/>
          <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/categories" element={<ManageCategory />}/>
              <Route path="/users" element={<ManageUsers />}/>
              <Route path="/items" element={<ManageItems />}/>
              <Route path="/explore" element={<Explore />}/>
          </Routes>
      </div>

    );
}
export default App;