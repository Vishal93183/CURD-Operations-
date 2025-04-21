import React from 'react';
import { Card, CardText, CardBody, CardSubtitle, Button, Container } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import base_url from './Api/bootapi';

const Courses = ({ course, removeCourseById, editCourse }) => {

  // Function to handle course deletion
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`)
      .then(() => {
        toast.success("Course deleted successfully!");
        removeCourseById(id); // Remove course from UI
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error deleting course");
      });
  };

  return (
    <Card className="mt-2">
      <CardBody>
        <CardSubtitle className='font-weight-bold'>{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button color="danger" className="m-1" onClick={() => deleteCourse(course.id)}>
            Delete
          </Button>
          <Button color="warning" className="m-1" onClick={() => editCourse(course)}>
            Update
          </Button>
        </Container>

      </CardBody>
    </Card>
  );
};

export default Courses;
