// import React, { useState } from "react";
import formIma from "../../assets/formulario.webp";
import "./form2.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';



export const Form2 = () => {
  const userSchema = yup.object().shape({
    nombre: yup
      .string()
      .max(35, "Debe tener 35 caracteres o menos")
      .required("El nombre es requerido"),
    correo: yup
      .string()
      .email("email incorrecto")
      .required("email es requerido"),
    telefono: yup
      .number()
      .positive()
      .integer()
      .required("Phone number is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });
/*conexión a base de datos*/
  const onSubmit = (data) => {
    console.log(data);
    axios.post('http://localhost/pinfsg6back-app/public/index.php/api/registrapersona', data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
  };

  

  

  return (
    <div  name='contact' class="container-fluid contentForm pt-5 mt-5 pb-5 ">
      <div class="row ">
        <div class="col colForm d-flex justify-content-center align-items-center flex-column ">
          <h2 class="form-title pb-3">Sign Up</h2>
          <form className="formulary w-75" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label htmlFor="InputName" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className=" form-control shadow-none  "
                id="nameForm"
                autoComplete="off"
                {...register("nombre")}
              />
              <p className="error"> {errors.nombre?.message}</p>
            </div>
            <div className="mb-2">
              <label htmlFor="InputEmail1" className="form-label">
                email
              </label>
              <input
                type="email"
                className="form-control shadow-none"
                id="emailForm"
                aria-describedby="emailHelp"
                autoComplete="off"
                {...register("correo")}
              />
              <p className="error"> {errors.email?.message}</p>
            </div>
            <div className="mb-2">
              <label htmlFor="InputPhone" className="form-label">
                Teléfono
              </label>
              <input
                type="number"
                className="form-control shadow-none"
                id="telForm"
                autoComplete="off"
                {...register("telefono")}
              />
              <p className="error"> {errors.telefono?.message}</p>
            </div>
            <div className="mb-2">
              <label htmlFor="textMessage" className="form-label">
                Comentario
              </label>
              <textarea
                type="text"
                className="form-control shadow-none"
                id="messageForm"
                rows={3}
                autoComplete="off"
                {...register("mensaje")}
              />
            </div>
            <div id="liveAlertPlaceholder"></div>
            <button id="register" type="submit" className=" btn  btn-success">
              Registro
            </button>
            <button id="register" type="reset" className=" btn  btn-danger m-3">
              Reset
            </button>
          </form>
        </div>
        <div class="col-md-6  d-flex align-items-center justify-content-center p-5">
          <img
            class="imageForm img-fluid"
            src={formIma}
            alt="Imagen de formulario"
          />
        </div>
      </div>
    </div>
  );
};
