import React, {useState} from "react";
import axios from "axios"; 
import formIma from '../../assets/baseball-cap.png'
import './form.css'

const Event = (e) => {
    alert('registro satisfactorio');
} 

const Formulary = () => {
  return (
    <div class="container-fluid contentForm pt-5 mt-5 pb-5 ">
      <div class="row ">
        <div class="col-md-6 d-flex flex-column align-items-center justify-content-center " >
          <h2 class="form-title">Sign Up</h2>
          <form action="">
            <div className="mb-5">
              <label htmlFor="InputName" className="form-label">
                Nombre
              </label>
              <input type="text" className=" form-control " id="nameForm" />
            </div>
            <div className="mb-5">
              <label htmlFor="InputEmail1" className="form-label">
                email
              </label>
              <input
                type="email"
                className="form-control"
                id="emailForm"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text text-bg-dark">
                Nunca compartas la contraseña de tu email.
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="InputPhone" className="form-label">
                Teléfono
              </label>
              <input type="tel" className="form-control" id="telForm" />
            </div>
            <div className="mb-5">
              <label htmlFor="textMessage" className="form-label">
                Comentario
              </label>
              <textarea
                type="text"
                className="form-control"
                id="messageForm"
                rows={3}
              />
            </div>

            <button  id="register" type="submit" className=" btn  btn-success" onClick={Event}>
              Registro
            </button>
          </form>
        </div>
        <div class="col-md-4  d-flex align-items-center justify-content-center ">
          <img class='imageForm img-fluid' src={formIma} alt="Imagen de formulario" />
        </div>
      </div>
    </div>
  );
};

export default Formulary;