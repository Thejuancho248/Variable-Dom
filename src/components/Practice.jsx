import React from "react";
import '../stylesheet/practica.css'
import { useState } from "react";

function practice() {

        const [titulo1, settitulo1] = useState("");

        function cambiot1(){
            let t1v2 = document.getElementById('t1').value
            settitulo1(t1v2)
            
        }


        const [titulo2, settitulo2] = useState("");

        function cambiot2(){
            let t2v2 = document.getElementById('t2').value
            settitulo2(t2v2)
        }

        const [titulo3,settitulo3] = useState("");

        function cambiot3(){
            let t3v2 = document.getElementById('t3').value
            settitulo3(t3v2)
        }

        const [changeimg,setchangeimg] = useState(null);

        function imgs(image){
            setchangeimg(image);
        }
    

    return (
        <div className="container-fluid">
            <div className="row d-flex " >
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start column1 m-0 " style={{backgroundImage: `url(${changeimg})`}}>
                    <h2>{titulo1}</h2>
                    <h3>{titulo2}</h3>
                    <h4>{titulo3}</h4>
                    <button type="Button" className="btn d-flex justify-content-center bg-white">Inscribete</button>
                </div>
                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center columna2 flex-column m-0">
                    <div className="d-flex flex-column">

                        <input type="text" id='t1' placeholder="Nombre del curso" className="form-control m-2" />
                        <button type="Button" className="btn d-flex justify-content-start m-2 boto" onClick={cambiot1}>Actualizar</button>

                        <input type="text" id='t2' placeholder="Software" className="form-control m-2" />
                        <button type="Button" className="btn d-flex justify-content-start m-2 boto" onClick={cambiot2}>Actualizar</button>

                        <textarea type="text" id='t3' placeholder="Descripcion" className="form-control m-2" />
                        <button type="Button" className="btn d-flex justify-content-start m-2 boto" onClick={cambiot3}>Actualizar</button>

                        <div className="col-12 col-lg-3">
                            <h3>Actualizar imagen:</h3>
                        <div className=" d-flex">
                            <img src="src/elementos/3d.jpg" alt="" className=" p-2img-fluid" onClick={() => imgs('src/elementos/terminator.jpg')} style={{cursor:'pointer'}} />
                            <img src="src/elementos/car.jpg" alt="" className="p-2 img-fluid" onClick={() => imgs('src/elementos/car.jpg')} style={{cursor:'pointer'}}/>
                            <img src="src/elementos/code.jpg" alt="" className="p-2 img-fluid"onClick={() => imgs('src/elementos/code.jpg')} style={{cursor:'pointer'}} />
                            <img src="src/elementos/film.jpg" alt="" className="p-2 img-fluid" onClick={() => imgs('src/elementos/film.jpg')} style={{cursor:'pointer'}}/>
                            <img src="src/elementos/K6Rz.gif" alt="" className="p-2 img-gif img-fluid" onClick= {() => imgs('src/elementos/K6Rz.gif')} style={{cursor:'pointer'}}/>
                        </div>
                    </div>
                    </div>
                   
                </div>



            </div>
        </div>
    )
}

export default practice