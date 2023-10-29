import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


function Footer() {
  return (
    <div style={{backgroundColor:'orange'}} className='p-3  mt-5'>
        <Container>
            <Row>
                <Col lg={6}>
       <h1 className='text-center text-white heading' style={{textDecoration:'underline'}}>Eat More...!</h1>
       <p className='text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Vel ducimus culpa quaerat voluptas nostrum doloremque accusamus quidem dignissimos inventore facere.
         Excepturi, voluptatem consequatur dolorum fugit magnam distinctio sed quia repellat</p>
         </Col>
         <Col lg={6}>

            <h1 className='text-center text-white' style={{textDecoration:'underline'}}>Contact Us</h1>
            <div className='d-flex justify-content-center gap-5 mt-5'>
            <i className="fa-brands fa-facebook fa-beat-fade text-white fa-2x"></i>
            <i className="fa-brands fa-square-instagram fa-beat-fade text-white fa-2x"></i>
            <i className="fa-brands fa-square-twitter fa-beat-fade text-white fa-2x"></i>
            <i className="fa-brands fa-square-whatsapp fa-beat-fade text-white fa-2x"></i>
            </div>

         </Col>
         </Row>
         </Container>
         
     </div> 
  )
}

export default Footer