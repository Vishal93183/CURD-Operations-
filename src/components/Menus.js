import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

const Menus = () => {
  return (
   <ListGroup>
    <ListGroupItem tag = 'a' href='/'> Home</ListGroupItem>

    <ListGroupItem tag = 'a' href='/add-course'> AddCourse</ListGroupItem>

    <ListGroupItem tag = 'a' href='/view-courses'> View Courses</ListGroupItem>

    <ListGroupItem tag = 'a' href='#!'> About </ListGroupItem>

    <ListGroupItem tag = 'a' href='#!'> Contact </ListGroupItem>
   </ListGroup>
  )
}

export default Menus
