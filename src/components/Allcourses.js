import React, { useEffect, useState } from 'react'
import Courses from './Courses'

// import base_url from './Api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';

const Allcourses = () => {

  const [courses, setCourses] = useState([]);
  
  // Fetch courses from server
  const getAllCoursesFromServer = () => {

    axios.get(`http://localhost:8080/courses`).then(
      (response) => {
        console.log(response);
        console.log(response.data);
        setCourses(response.data);
        toast.success("courses has been loaded");

      },
      (error) => {
        console.log(error);
        toast.error("something went worng ");
      }
    );

  };

  console.log(courses);

  useEffect(() => {
    getAllCoursesFromServer();
  }, []);




  return (
    <div>
      <h1>Allcourses </h1>
      <p>List of coures </p>

      {courses.length > 0
        ? courses.map((item) => <Courses key={item.id} course={item} />)
        : "no courses"}
    </div>
  )
}

export default Allcourses
