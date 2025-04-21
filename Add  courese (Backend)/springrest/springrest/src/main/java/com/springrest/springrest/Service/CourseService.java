package com.springrest.springrest.Service;

import java.util.List;

import com.springrest.springrest.Entities.Course;

public interface CourseService {

    public List<Course>  getCourses();

    public Course  getCourseById(long courseId);

    public Course addCourse (Course course);

    public Course updateCourse (Course course);

    public void deleteCourse (long parLong);
    
}
