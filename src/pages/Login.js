import MainLayout from "./layouts/MainLayout";

import { useFormik } from "formik";
import * as Yup from "yup";

// email
// password



function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",

    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is Required")
        .min(6, "Username should be atleast 6 characters")
        .max(10, "Username should not be greater than 10 characters"),
      password: Yup.string().required("Password is Required"),
    }),
    onSubmit: (values) => {
      const url = `http://localhost:3000/users?username=${values.username}&&password=${values.password}`
      console.log("Form submitted", url)
      fetch(url, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((data) => {
          data.length >= 1 ? window.location.replace("/?" + data[0].username) && console.log('Success: ', data) : console.log('no user found')
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
  });

  return (
    <MainLayout>
      <div className="App pt-10">
        <h1 className="text-4xl font-bold mb-10">Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <div>


            <label className="block">Username</label>
            <input
              type="text"
              name="username"
              className="border p-2 m-6"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.errors.username && <p className="text-red-500 text-sm">{formik.errors.username}</p>}

          </div>
          <div>
            <label className="block">Password</label>
            <input
              type="password"
              name="password"
              className="border p-2 m-6"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && <p className="text-red-500 text-sm">{formik.errors.password}</p>}

          </div>
          <div>
            <button
              type="submit"
              className=" text-white px-4 py-2 bg-red-600 mr-2 hover:bg-red-800 w-25"
            >
              <div className="">
                <div className="float-left inline-block w-6">

                </div>
                <span className="inline-block float-left w-26 ">
                  Login
                </span>
              </div>
            </button>
          </div>
        </form>
      </div>
    </MainLayout >
  );
}

export default Login;
