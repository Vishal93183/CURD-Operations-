
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddCourse from './components/AddCourse';
import Allcourses from './components/Allcourses';
import Home from './components/Home';

import {  Container } from 'reactstrap';
// import { ToastContainer, toast } from 'react-toastify';
import { Row, Col } from 'reactstrap';
import Header from './Header';
import Menus from './components/Menus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  return (

    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add-course' element={<AddCourse />} />
                <Route path='/view-courses' element={<Allcourses />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}
export default App;
