import React, { InputHTMLAttributes, forwardRef } from "react";
import { Controller } from "react-hook-form";
import { IForm } from "./Inputtypes";

export function InputField({
  control,
  name,
  label,
  type,
  placeholder,
  ...rest
}: IForm) {
  return (
    <div className="gap-0.5 flex-col flex">
      <label htmlFor={name} className="font-medium">
        {label}
      </label>
      <Controller
        render={({ field }) => (
          <input
            {...field}
            type={type}
            className="border-b border-slate-400"
            placeholder={placeholder}
            id={name}
          />
        )}
        name={name}
        control={control}
        defaultValue=""
        {...rest}
      />
    </div>
  );
}
