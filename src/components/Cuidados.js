import { useEffect, useState } from 'react'
import CuidadosFragment from "./Fragments/CuidadosFragment"
import Aros from "../assents/image/Aros.jpg"
import Collar from "../assents/image/collar.jpg"
import Conjuntos from "../assents/image/Conjunto.jpg"

const Cuidados = ()=> {

    return(
         <>
         <div className="container">
            <div className="row" >
                <div className="col-12">
                    <h1>Cuidados</h1>
                </div><hr/>
            </div>
        </div><br/>
            <div className="row">
                <div className="col-4">
                    <CuidadosFragment
                    image={Aros}
                    titulo="Aros"
                    textoDescripcion='Los Aros no deben caerles perfume ni shampoo'
                    />
                </div>
             
        </div><br/>
        <div className="row">
                <div className="col-4">
                    <CuidadosFragment 
                    image={Collar}
                    titulo="Collar"
                    textoDescripcion='Los Collares no deben guardarse en caja sin su paño, ni caerle perfume'
                    />
                </div><br/>

                <div className="row">
                <div className="col-4">
                    <CuidadosFragment 
                    image={Conjuntos}
                    titulo="Conjuntos"
                    textoDescripcion='Los Conjuntos no deben caerles perfume ni shampoo , ni guardarse sin su paño'
                    />
                </div>

                </div>
            </div>
        
        
         
         </>
    )
}
export default Cuidados