import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import './Home.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home({ searchData }) {

    const [allMenu, setAllMenu] = useState([])

    const getAllMenu = async () => {

        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${""}`)
        setAllMenu(data.meals.slice(1, 25))
       
    }

    const handleSearch = async () => {

        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchData}`)
        if (data.meals == null) {
            setAllMenu([])
        } else {
            setAllMenu(data.meals);
        }

    }

    useEffect(() => {
        getAllMenu()
        handleSearch()

    }, [searchData])

    const navigate = useNavigate()

    const singleMealClick = (idMeal) => {

        navigate(`/singleView/${idMeal}`)
    }

    return (
        <div style={{ height: 'auto' }} className='home_section'>

         

            <h1 className='mt-5 text-center' style={{ textDecoration: 'underline' }}>Category</h1>

            <div className='d-flex justify-content-center flex-wrap gap-2 mt-3'>
                {
                    allMenu.length > 0 ? allMenu.map(item => (

                        <Card style={{ width: '18rem', border: 'none' }} className='mb-2' >
                            <Card.Img onClick={() => singleMealClick(item.idMeal)} variant="top" src={item.strMealThumb} style={{ width: '100%', height: '170px' }} />

                            <p className='text-white text-center highLights'>{item.strMeal}</p>


                        </Card>

                    )) : <h1 className='text-center mt-3'>Your Searched Item Is Not Available Now...!
                        <p>Please cooperate with Us</p>
                        <i className="fa-solid fa-face-smile-beam fa-bounce fa-3x mt-5" style={{ color: 'orange' }}></i>
                        <p>Tank You.... <span><i class="fa-solid fa-hands-praying fa-beat-fade " style={{ color: 'orange' }}></i></span></p>
                    </h1>

                }

            </div>

        </div>
    )
}

export default Home

