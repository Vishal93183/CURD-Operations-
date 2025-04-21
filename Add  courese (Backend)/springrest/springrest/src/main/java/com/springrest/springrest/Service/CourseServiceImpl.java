package com.springrest.springrest.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.Entities.Course;
import com.springrest.springrest.dao.courseDao;

@Service

public class CourseServiceImpl implements CourseService {
    @Autowired
    private courseDao courseDao;

    List<Course> list;

    public CourseServiceImpl() {
    }

    @Override
    public List<Course> getCourses() {

        return courseDao.findAll();
    }

    @Override
    public Course getCourseById(long courseId) {
        // return courseDao.getOne( Id);
        return courseDao.findById(courseId)
        .orElseThrow(() -> new RuntimeException("Course not found!"));
        
    }

    @Override
    public Course addCourse(Course course) {

        courseDao.save(course);
        return course;

    }

    @Override
    public Course updateCourse(Course course) {
        courseDao.save(course);
        return course;
    }

    @Override
    public void  deleteCourse(long parseLong) {
       Course entity = courseDao.getOne(parseLong);
       courseDao.delete(entity);

    }

    

    
}
