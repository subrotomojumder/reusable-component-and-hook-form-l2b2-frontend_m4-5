export const Input = ({ label, register, errors, type}) => {
  return (
    <div className="w-full max-w-md">
      <label className="block" htmlFor={label}>
        {label}
      </label>
      <input type={type} id={label} {...register} />
      {errors.name && (
        <span className="text-xs text-red-500">{errors.name.message}</span>
      )}
    </div>
  );
};

