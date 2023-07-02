import React, { useState } from "react";
import formIma from "../../assets/formulario.jpg";
import "./form2.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form2 = () => {
  const userSchema = yup.object().shape({
    nombre: yup
      .string()
      .max(35, "Debe tener 35 caracteres o menos")
      .required("El nombre es requerido"),
    email: yup
      .string()
      .email("email incorrecto")
      .required("email es requerido"),
    fono: yup
      .number()
      .positive()
      .integer()
      .required("Phone number is required"),
  });

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
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
            <div className="mb-5">
              <label htmlFor="InputEmail1" className="form-label">
                email
              </label>
              <input
                type="email"
                className="form-control shadow-none"
                id="emailForm"
                aria-describedby="emailHelp"
                autoComplete="off"
                {...register("email")}
              />
              <p className="error"> {errors.email?.message}</p>
            </div>
            <div className="mb-5">
              <label htmlFor="InputPhone" className="form-label">
                Teléfono
              </label>
              <input
                type="number"
                className="form-control shadow-none"
                id="telForm"
                autoComplete="off"
                {...register("fono")}
              />
              <p className="error"> {errors.fono?.message}</p>
            </div>
            <div className="mb-5">
              <label htmlFor="textMessage" className="form-label">
                Comentario
              </label>
              <textarea
                type="text"
                className="form-control shadow-none"
                id="messageForm"
                rows={3}
                autoComplete="off"
                {...register("comment")}
              />
            </div>

            <button id="register" type="submit" className=" btn  btn-success">
              Registro
            </button>
          </form>
        </div>
        <div class="col-md-6  d-flex align-items-center justify-content-center ">
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
