import { useState } from "react";
import { FakebookTitle } from "../icons";
import Register from "./Register";
import { loginSchema } from "../utils/validators";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import useUserStore from "../stores/userStore";
import { toast } from "react-toastify";

function Login() {
  const [resetForm, setResetForm] = useState(false);
  const login = useUserStore((state) => state.login);
  const navigate = useNavigate();

  const hdlClose = () => {
    setResetForm((prv) => !prv);
  };

  const hdlLogin = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // alert(JSON.stringify(data, null, 2));
      const resp = await login(data);
      // document.getElementById('register-form').close()
      // reset()
      toast.success(resp.data.message);
    } catch (err) {
      const errMsg = err.response?.data?.error || err.message;
    }
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <>
      <div className="h-[700px] pt-20 pb-28">
        <div className="p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-between max-md:flex-col">
          <div className="flex flex-col gap-4 mt-20 basis-3/5 max-md:items-center max-md:text-center">
            <div className="text-4xl">
              <FakebookTitle />
            </div>
            <h2 className="text-[30px] leading-8 mt-3 w-[514px] max-md:text-[28px]">
              Fakebook helps you connetto and share with people in your life
            </h2>
          </div>
          <div className="flex-1">
            <div className="card w-full h-[350px] shadow-xl mt-8">
              <form onSubmit={handleSubmit(hdlLogin)}>
                <fieldset disabled={isSubmitting}>
                  <div className="card-body">
                    <input
                      className="input input-info w-full"
                      placeholder="Email or Phone Number"
                      {...register("identity")}
                    />
                    {errors.identity && (
                      <p className="text-sm text-error">
                        {errors.identity?.message}
                      </p>
                    )}
                    <input
                      className="input input-info w-full"
                      placeholder="Password"
                      {...register("password")}
                    />
                    {errors.password && (
                      <p className="text-sm text-error">
                        {errors.password?.message}
                      </p>
                    )}
                    {!isSubmitting && (
                      <button type="submit" className="btn btn-primary text-xl">
                        LOG IN
                      </button>
                    )}
                    {isSubmitting && (
                      <button type="submit" className="btn btn-primary text-xl">
                        LOG IN{" "}
                        <span className="loading loading-spinner text-error loading-sm"></span>
                      </button>
                    )}
                    <p className="text-center cursor-pointer opacity-70">
                      Forgotten Password
                    </p>
                    <div className="divider my-0"></div>
                    <button
                      type="button"
                      className="btn btn-secondary text-lg"
                      onClick={() =>
                        document.getElementById("register-form").showModal()
                      }
                    >
                      Create New Account
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
      <dialog id="register-form" className="modal" onClose={hdlClose}>
        <div className="modal-box">
          <Register resetForm={resetForm} />
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
export default Login;
