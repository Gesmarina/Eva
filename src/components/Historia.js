import React,{ useEffect, useState } from 'react'
import Pueblo from "../assents/image/pueblo.jpg"
import Jarro from "../assents/image/jarro.jpg"

const Historia =() =>{

    return(

    <>
     
     <div className="container">
      <div className="now">
        <div className="col-12">
          <h1>La Historia de un Pueblo son las Raices de las Generaciones</h1>
        </div><hr/>
        <div className="now">
          <div className="col-4">
            <div className="card" style={{width: "18rem"}}>
              <img src={Pueblo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Pueblo</h5>
                <p className="card-texto">El pueblo diaguita tiene una forma de vida sedentaria dedicándose a la agricultura y ganadería,
                se distingue de otros pueblos por trabajo de alfarería decorada con figuras geométricas de dos colores.
                Los diaguitas chilenos habitaron las regiones de Coquimbo y Copiapó, conocidas como norte chico.
                Se distribuyeron en los valles de Copiapó, Huasco, Elqui, Limarí y Choapa, en sus sectores precordilleranos
                y en áreas de interfluvio</p>
         </div>
          </div>
      </div>           
    </div><br/>

    <div className="now">
          <div className="col-4">
            <div className="card" style={{width: "18rem"}}>
              <img src={Jarro} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Artesania</h5>
                <p className="card-texto">Este pueblo se ha caracterizado por su fina cerámica, una práctica artesanal tradicional, 
                cuyas piezas se fabricaban para satisfacer necesidades como la cocción de alimentos,
                el almacenamiento de agua, de comida y también para rendir culto a los dioses y a los difuntos.
                Los diaguitas confeccionaron herramientas como torteras, 
                espátulas o canulillas con restos óseos de animales de su entorno.</p>
         </div>
          </div>
      </div>           
    </div>

   </div>
   </div>
   </>

)
}



export default Historia

