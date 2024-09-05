import ResponsiveAppBar from './Components/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddStudents from './Components/AddStudents';
import Students from './Components/Students';
import Profile from './Components/Profile';
import PageNotFound from './Components/PageNotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <ResponsiveAppBar />


        <Routes>
          <Route path="/" element={<Students />} />
          <Route path="/addStudents" element={<AddStudents />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
