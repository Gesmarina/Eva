import React, {useEffect, useState} from 'react'

const CuidadosFragment = ({image,titulo, textoDescripcion})=>{

    return (

        <>
        <div className="Card" style={{ width: '18rem' }}>
                <img alt="Sample" src={image} />
                <div className="Card-Body">
                    <h5 className="CardTitle tag">{titulo}</h5>
                    <h6 className="mb-2 text-muted"></h6>
                    <p>{textoDescripcion}</p>
                </div>
            </div>
        </>
    )
}

export default CuidadosFragment