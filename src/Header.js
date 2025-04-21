import React from 'react'
import { Card, CardBody } from 'reactstrap'

const Header = ({name,title}) => {
  return (
    <div>
        <Card className='my-2'>
            <CardBody>
                <h1 className='text-center my-3'>  welcome to Course </h1>
            </CardBody>
        </Card>
      
    </div>
  )
}

export default Header
