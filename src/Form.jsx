import React from "react";
import { useState } from "react";
import useFormFileds from "./useFormFileds";

export default function Form() {
  const { fileds, handleChange } = useFormFileds({
    email: "",
    password: "",
  });

  return (
    <form action="">
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="text"
          value={fileds.email}
          onChange={handleChange}
          name="email"
          //   type='email'
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Email address</label>
        <input
          type="password"
          value={fileds.password}
          onChange={handleChange}
          name="password"
          //   type='password'
          className="form-control"
        />
      </div>
    </form>
  );
}
