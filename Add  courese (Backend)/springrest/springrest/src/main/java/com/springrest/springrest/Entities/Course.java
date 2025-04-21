package com.springrest.springrest.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Course {
    @Id

    private long Id;
    private String Title;
    private String description;

    public Course(long id, String title, String description) {
        Id = id;
        Title = title;
        this.description = description;
    }

    public Course() {
        super();
        // to Auto-generated constructor stub
    }

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }

    public String getTitle() {
        return Title;
    }

    @Override
    public String toString() {
        return "Course [Id=" + Id + ", Title=" + Title + ", description=" + description + "]";
    }

    public void setTitle(String title) {
        Title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
