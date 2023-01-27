import React, { Component } from 'react'



export default function ComClass() {
    return (
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img  src="src/assets/img/shamankinglogo.jpg" className='destacado d-block w-100' alt="Shaman king"/>
          <div className="carousel-caption d-none d-sm-block">
            <h5>Shaman King con 15% de descuento!</h5>
            <p>Disponible hasta el 24 de diciembre!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img  src="src/assets/img/vinlandsagalogo.jpg" className=' destacado d-block w-100' alt="Vinland saga"/>
          <div className="carousel-caption d-none d-sm-block">
            <h5>Vinland Saga Completo</h5>
            <p>Nuevamente en stock</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="src/assets/img/shuumatsulogo.jpg" className=' destacado d-block w-100' alt="Shummatsu"/>
          <div className="carousel-caption d-none d-sm-block">
            <h5>Shuumatsu No Valkyrie</h5>
            <p>Nuevo manga en serializacion!</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      {/* <div className='relleno'></div> */}
    </div>
    )
}

