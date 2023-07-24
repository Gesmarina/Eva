import React, {useState, useEffect} from "react"
import Etnico from "../assents/image/etnico1.jpg"
import Conjunto from "../assents/image/Conjunto etnico.jpg"
import Collar from "../assents/image/Collar etnico.jpg"
import Aros from "../assents/image/Aros Etnicos.jpg"


const Joyas = ()=>{

    return(
        <>

        <div className="container">
          <div className="now">
            <div className="col-12">
              <h1>Joyas Etnicas</h1>
              <h2>Los Diaguitas se inspiraban en sus dioses para realizar sus Artesanias y ese Legado esta en nuestras Joyas</h2>
            </div><hr/>
            <div className="now">
              <div className="col-4 ">
                <div className="card" style={{width: "18rem"}}>
                  <img src={Etnico} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Artesania</h5>
                    <p className="card-texto">Joyas Etnicas</p>
             </div>
              </div>
          </div>           
        </div><br/>

        
            <div className="now">
              <div className="col-4">
                <div className="card" style={{width: "18rem"}}>
                  <img src={Conjunto} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Conjunto Etnico</h5>
                    <p className="card-texto">inspirado en  la Vida</p>
             </div>
              </div>
          </div>           
        </div><br/>

        <div className="now">
              <div className="col-4 ">
                <div className="card" style={{width: "18rem"}}>
                  <img src={Collar} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Collar Etnico</h5>
                    <p className="card-texto">inspirado  a la Proteccion</p>
             </div>
              </div>
          </div>           
        </div><br/>

        <div className="now">
              <div className="col-4">
                <div className="card" style={{width: "18rem"}}>
                  <img src={Aros} className="card-img-top"  alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Aros Etnico</h5>
                    <p className="card-texto">inspirado  en  la Armonia</p>
             </div>
              </div>
          </div>           
        </div>

        </div>
        </div>



    
       
      </>
    )
} 
export default Joyas