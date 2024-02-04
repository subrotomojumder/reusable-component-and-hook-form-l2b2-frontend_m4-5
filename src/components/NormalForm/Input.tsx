import { useFormContext } from "react-hook-form";

const Input = () => {
  const { register , watch} = useFormContext();
  console.log(watch("extraInput"));
  return (
    <input type="text" id="extraInput" {...register("extraInput", { required: true })} />
  );
};

export default Input;
