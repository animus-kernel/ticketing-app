import React from "react";

interface IFormErrorsProps {
  errors: {
    message: string;
    field: string;
  }[];
}

export default function FormErrors({ errors }: IFormErrorsProps) {
  return (
    <div className="alert alert-danger">
      <ul className="my-0">
        {errors.map((err) => (
          <li key={err.field}>{err.message}</li>
        ))}
      </ul>
    </div>
  );
}
