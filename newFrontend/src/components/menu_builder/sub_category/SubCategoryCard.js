import React, { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function SubCategoryCard(props) {
  return (
    <div>
      <Col>
          <Card >
              <Card.Img variant="top" src={props.image} alt="Card image" />
              <Card.Body className=' p-0 m-0'>
                  <Card.Title className=' text-center fs-4'>
                    {props.title}
                  </Card.Title>

                  <Card.Text className=' text-center'>
                    
                    <p className=' fw-bold fst-normal'>$5,00</p>

                    <p className=' text-secondary small'>
                      {props.description}
                    </p>
                    
                  </Card.Text>

                  
              </Card.Body>
          </Card>
      </Col>      
    </div>
  )
}

export default SubCategoryCard


