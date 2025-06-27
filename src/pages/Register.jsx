import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "../utils/validators";
import { useEffect } from "react";
import axios from "axios";

function Register({ resetForm }) {
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const { isSubmitting, errors } = formState;

  useEffect(() => {
    reset();
  }, [resetForm]);

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const resp = axios.post("http://localhost:8472/api/auth/register", data);
      // alert(JSON.stringify(data, null, 2));
      document.getElementById("register-form").close();
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="text-3xl text-center opacity-70">
        Create a new account
      </div>
      <div className="divider opacity-60"></div>
      <fieldset disabled={isSubmitting}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 p-4 pt-3"
        >
          <div className="flex gap-2">
            <div className="w-full">
              <input
                type="text"
                placeholder="First name"
                className="input input-bordered w-full"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-sm text-error">
                  {errors.firstName?.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Last name"
                className="input input-bordered w-full"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-sm text-error">{errors.lastName?.message}</p>
              )}
            </div>
          </div>
          <input
            type="text"
            placeholder="Email or Phone number"
            className="input input-bordered w-full"
            {...register("identity")}
          />
          {errors.identity && (
            <p className="text-sm text-error">{errors.identity?.message}</p>
          )}
          <input
            type="password"
            placeholder="New password"
            className="input input-bordered w-full"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-sm text-error">{errors.password?.message}</p>
          )}
          <input
            type="password"
            placeholder="Confirm password"
            className="input input-bordered w-full"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-sm text-error">
              {errors.confirmPassword?.message}
            </p>
          )}
          <button className="btn btn-secondary text-xl text-white">
            Sign up
          </button>
        </form>
      </fieldset>
    </>
  );
}
export default Register;
