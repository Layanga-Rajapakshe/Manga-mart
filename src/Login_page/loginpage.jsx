import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../redux/api/usersApiSlice";
import { setCredentials } from "../redux/features/authSlice";
import toast from "react-hot-toast";
import web_logo from '../assets/web_logo_bg_removed.png';
import web_logo1 from '../assets/web_logo.png'


export default function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      console.log(res);
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
      toast.success("Login Success");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
            <div className="hidden lg:relative lg:block lg:p-12">
              <Link className="block text-white" href="/">
                <span className="sr-only">Home</span>
                <img src={web_logo} alt='web_logo' className='h-20'/>
              </Link>
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome Back !!!
              </h2>
              <p className="mt-4 leading-relaxed text-white/90">
                Unleash Imagination, Unveil Adventure - Manga Mart, Your Gateway to Epic Tales!
              </p>
            </div>
          </section>
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <Link
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                  to={'/'}
                >
                  <span className="sr-only">Home</span>
                  <img src={web_logo1} alt='web_logo' className='h-16'/> 
                </Link>
                <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome Back !!!
                </h1>
                <p className="mt-4 leading-relaxed text-gray-500">
                  Unleash Imagination, Unveil Adventure - Manga Mart, Your Gateway to Epic Tales!
                </p>
              </div>
              <form
                onSubmit={submitHandler}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember-me" className="font-medium text-gray-700">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <Link
                      to="/signup"
                      className="inline-block text-sm font-medium text-blue-600 hover:underline"
                    >
                      Create an account
                    </Link>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white"
                    >
                      {isLoading ? 'Please wait...' : 'Login'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
