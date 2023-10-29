import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function SingleView() {
  const [singleMeal, setSingleMeal] = useState()
  const { idMeal } = useParams()

  const singleMealView = async () => {
    const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${""}`)
    let singleItem = data.meals.filter(i => i.idMeal == idMeal);
    setSingleMeal(singleItem[0])

  }

  useEffect(() => {
    singleMealView()
  }, [])

  return (
    <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center'>
      <Container >

        {singleMeal ? (

          <Row >
            <Col lg={6} className='mt-5'>
              <img src={singleMeal.strMealThumb} alt="" style={{ width: '100%', height: '100%', border: '3px solid orange' }} />
            </Col>

            <Col lg={6} className='mt-5'>
              <h1 className='text-center mt-5'>{singleMeal.strMeal}</h1>
              <p style={{ textAlign: 'justify' }} className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora voluptates incidunt quas similique hic quod doloremque? Dolore deserunt illum quaerat delectus,
                perspiciatis labore sit sed eos saepe cupiditate nisi eligendi.</p>

              <div className='d-flex justify-content-center mt-3'>
                <Link to={"/"}>
                  <Button variant="warning">Back To Home</Button>
                </Link>

              </div>

            </Col>

          </Row>
        ) : ("")


        }

      </Container>
    </div>
  )
}

export default SingleView

