function Login() {
  return (
    <div className="h-[700px] pt-20 pb-28">
      <div className="p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-between">
        <div className="flex flex-col gap-4 mt-20 basis-3/5">
          <div className="text-4xl">Fakebook</div>
          <h2 className="text-[30px] leading-8 mt-3 w-[514px]">
            Fakebook helps you connetto and share with people in your life
          </h2>
        </div>
        <div className="flex-1">
          <div className="card w-full h-[350px] shadow-xl mt-8">
            <form>
              <div className="card-body">
                <input className="input input-info w-full" placeholder="Email or Phone Number" />
                <input className="input input-info w-full" placeholder="Password" />
                <button className="btn btn-primary text-xl">LOG IN</button>
                <p className="text-center cursor-pointer opacity-70">Forgotten Password</p>
                <div className="divider my-0"></div>
                <buttun className="btn btn-secondary text-lg">Create New Account</buttun>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
