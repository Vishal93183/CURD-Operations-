import React, { Fragment, useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import base_url from './Api/bootapi';
import { toast } from 'react-toastify';

const AddCourse = () => {
    const [course, setCourse] = useState({ id: "", title: "", description: "" });

    // Handle form submission
    const handleForm = (e) => {
        e.preventDefault();
        console.log(course);
        postDatatoServer(course);
    };

    // Function to send data to server
    const postDatatoServer = (data) => {
        axios.post(`${base_url}/courses`, data)
            .then((response) => {
                console.log(response);
                toast.success("Course added successfully!");
                setCourse({ id: "", title: "", description: "" }); // Reset form
            })
            .catch((error) => {
                console.error(error);
                toast.error("Something went wrong!");
            });
    };

    

    return (
        <Fragment>
            <h1 className='text-center'>Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="userId">Course ID</Label>
                    <Input
                        type="text"
                        placeholder="Enter Course ID"
                        id="userId"
                        value={course.id}
                        onChange={(e) => setCourse({ ...course, id: e.target.value })}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="title">Course Title</Label>
                    <Input
                        type="text"
                        placeholder="Enter Title"
                        id="title"
                        value={course.title}
                        onChange={(e) => setCourse({ ...course, title: e.target.value })}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input
                        type="textarea"
                        placeholder="Enter Description"
                        id="description"
                        value={course.description}
                        style={{ height: 100 }}
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                </FormGroup>

                <Container className="text-center">
    <Button type="submit" color="primary" style={{ margin: "3px" }}>Add Course</Button>
    <Button 
        color="warning" 
        style={{ margin: "3px" }} 
        onClick={() => setCourse({ id: "", title: "", description: "" })}
    >
        Clear
    </Button>
</Container>

            </Form>
        </Fragment>
    );
};

export default AddCourse;
