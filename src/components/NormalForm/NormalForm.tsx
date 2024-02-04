import { FieldValues, FormProvider, useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, TNormalForm } from "./Validation";
import Input from "./Input";

const NormalForm = () => {
  const methods = useForm<TNormalForm>({
    resolver: zodResolver(SignUpSchema),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;
  const double = true;
  // const name = watch("name");
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={cn(
            "border border-gray-300 rounded-lg shadow-sm w-full p-5 mx-auto",
            {
              "max-w-5xl": double,
              "max-w-md": !double,
            }
          )}
        >
          <div
            className={cn("grid grid-cols-1 justify-items-center gap-5", {
              " md:grid-cols-2": double,
            })}
          >
            <div className="w-full max-w-md">
              <label className="block" htmlFor="extraInput">
              ExtraInput
              </label>
              <Input />
            </div>
            <div className="w-full max-w-md">
              <label className="block" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-xs text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="w-full max-w-md">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-xs text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="w-full max-w-md">
              <label className="block" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-xs text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>
            {/* <div className="w-full max-w-md">
            <label className="block" htmlFor="gender">
              Gender
            </label>
            <select name="" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="gender">
              Vio
            </label>
            <textarea name="" id=""></textarea>
          </div>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="gender">
              Married
            </label>
            <input type="checkbox" name="" id="" />
          </div> */}
          </div>
          <div
            className={cn("grid grid-cols-1 justify-items-center gap-5 my-8", {
              " md:grid-cols-2": double,
            })}
          >
            <div className="col-start-1 md:col-start-2 w-full max-w-md flex justify-end">
              <Button className="w-full md:w-fit" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default NormalForm;
