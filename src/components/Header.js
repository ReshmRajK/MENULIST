import React, { useState } from 'react'
import './Header.css'

import Offcanvas from 'react-bootstrap/Offcanvas';

function Header({ setSearchData, name, ...props }) {

    //offcanvace for bar icon
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //other state
    const [search, setSearch] = useState('')
    const setInputs = (e) => {
        let { value } = e.target
        setSearch(value)
    }

    const handleClick = () => {
        setSearchData(search)
    }

    return (
        <div>

            <div className='d-flex justify-content-between p-3' style={{ backgroundColor: 'orange' }}>

                <div>
                    <h1 className='text-white fs-2 title'>
                        <i className="fa-solid fa-utensils fa-beat ms-5 me-3"></i>
                        FoodWorld</h1>
                </div>

                <i onClick={handleShow} className="fa-solid fa-bars me-5 text-white fa-2x"></i>

            </div>

            <div id='search-section'>
                <div className='d-flex justify-content-center align-items-center'>
                    <form action="" className='mt-5'>
                        <input onChange={(e) => setInputs(e)} type="search" name="search" id="s1" className='p-3 mt-5 input_section' placeholder='search here' />
                        <i onClick={handleClick} className="fa-solid fa-magnifying-glass icon"></i>
                    </form>
                </div>
                <h1 className='text-center text-white mt-5'>Enjoy With Us</h1>
                <p className='text-center text-white container mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem delectus illum ad eum adipisci dolor esse velit facilis corporis nobis beatae ea et,
                    distinctio officiis, incidunt sit commodi fugit quam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem delectus illum ad eum adipisci dolor esse velit facilis corporis nobis beatae ea et,
                    distinctio officiis, incidunt sit commodi fugit quam.</p>
            </div>

            {/* offcanvace */}
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{ color: 'orange', fontSize: '3rem' }}><p>Food World</p></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='mt-5' style={{ textAlign: 'justify' }}>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione velit iusto sed deserunt ut.
                        Dolorem fugit, tempora placeat nemo sapiente quo maxime harum, eum fugiat nulla modi cumque tenetur ipsa.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione velit iusto sed deserunt ut.
                        Dolorem fugit, tempora placeat nemo sapiente quo maxime harum, eum fugiat nulla modi cumque tenetur ipsa.</p>

                    <p>Email : <span style={{ color: 'orange' }}>foodworld@gmail.com</span> </p>
                    <p>Contact : <span style={{ color: 'orange' }}>+91 XXXXXXXXXX</span>
                        <p> <span style={{ color: 'orange' }}>+91 XXXXXXXXXX</span></p>
                    </p>

                </Offcanvas.Body>
            </Offcanvas>



        </div>

    )
}

export default Header