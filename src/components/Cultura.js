import React, {useEffect, useState} from "react"
import Casa from "../assents/image/Casa.jpg"
import Artesania from "../assents/image/Artesania.jpg"
import Gente from "../assents/image/Gente.jpeg"

function Cultura() {
  const [number, setNumber] = useState('');
  const [factorial, setFactorial] = useState('');

  const calculateFactorial = () => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    setFactorial(result);
  }

  return (
    <>
    <div className="App">
      <h1>Formulario</h1>
      <div>
        <input
          type="number"
          value={number}
          onChange={e => setNumber(parseInt(e.target.value))}
        />
        <button onClick={calculateFactorial}>Calcular</button>
      </div>
      {factorial && <p>El factorial de {number} es {factorial}</p>}
    </div>
  





   
      
         <div className="container">
          <div className="now">
            <div className="col-12">
              <h1>Diaguitas</h1>
              <h2>Sus casas, Artesanias y Gente es nuestro Legado</h2>
            </div><hr/>
            <div className="now">
              <div className="col-4">
                <div className="card" style={{width: "18rem"}}>
                  <img src={Casa} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Casa</h5>
                    <p className="card-texto">Eran Construidas por ellos mismos</p>
             </div>
              </div>
          </div>           
        </div><br/>

        <div className="now">
              <div className="col-4">
                <div className="card" style={{width: "18rem"}}>
                  <img src={Artesania} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Artesania</h5>
                    <p className="card-texto">Se inspiraban en sus dioses</p>
             </div>
              </div>
          </div>           
        </div><br/>

        <div className="now">
              <div className="col-4">
                <div className="card" style={{width: "18rem"}}>
                  <img src={Gente} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Gente</h5>
                    <p className="card-texto">Vivian de sus cultivos y artesanias</p>
             </div>
              </div>
          </div>           
        </div>

           </div>
           </div>
          </>
    
    )
}

export default Cultura

