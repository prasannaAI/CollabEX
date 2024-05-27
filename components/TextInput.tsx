import React from "react";

const TextInput = ({
  type, name, label, placeholder, required
}: {
  type?: string,
  name: string,
  label: string,
  placeholder?: string,
  required?: boolean,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-lg font-semibold opacity-80 mb-1">{label}</label>
      {type === 'textarea' ?
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          className="w-full py-4 px-6 text-lg relative border rounded-2xl outline-0 bg-white"
        /> :
        <input
          type={type || "text"}
          name={name}
          placeholder={placeholder}
          required={required}
          className="flex w-full py-4 px-6 text-lg relative border rounded-2xl outline-0 overflow-hidden bg-white"
        />}
    </div>
  )
};

export default TextInput;