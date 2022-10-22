import MainLayout from "./layouts/MainLayout";
import Icon from "../utilities/Icon";
import { useFormik } from "formik";
import * as Yup from "yup";

// email
// name
// password
function Registration() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is Required")
        .min(6, "Username should be atleast 6 characters")
        .max(10, "Username should not be greater than 10 characters"),
      email: Yup.string()
        .required("Email is Required")
        .email("Email is incorrect"),
      password: Yup.string().required("Password is Required"),
      cPassword: Yup.string()
        .required("Confirm Password is Required")
        .oneOf([Yup.ref("password")], "Both passwords should match"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted");
      console.log(values);
    },
  });

  console.log(formik.errors);

  return (
    <MainLayout>
      <div className="App pt-10">
        <h1 className="text-4xl font-bold mb-10">Registration</h1>
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
            <p>Username is</p>
          </div>
          <div>
            <label className="block">Email</label>
            <input
              type="text"
              name="email"
              className="border p-2 m-6"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
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
          </div>
          <div>
            <label className="block">Confirm Password</label>
            <input
              type="password"
              name="cPassword"
              className="border p-2 m-6"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cPassword}
            />
          </div>
          <div>
            <button
              type="submit"
              className=" text-white px-4 py-2 bg-red-600 mr-2 hover:bg-red-800 w-25"
            >
              <div className="">
                <div className="float-left inline-block w-6">
                  <Icon name="check" />
                </div>
                <span className="inline-block float-left w-26 ">
                  Create account
                </span>
              </div>
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}

export default Registration;
