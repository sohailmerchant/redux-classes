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
      delete values.cPassword
      console.log("new", values)
      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          formik.resetForm();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
  });

  //console.log(formik.errors);

  return (
    <MainLayout>
      {console.log(formik.errors)}

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
            {formik.errors.username && <p className="text-red-500 text-sm">{formik.errors.username}</p>}

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
            {formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}

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
            <label className="block">Confirm Password</label>
            <input
              type="password"
              name="cPassword"
              className="border p-2 m-6"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cPassword}
            />
            {formik.errors.cPassword && <p className="text-red-500 text-sm">{formik.errors.cPassword}</p>}

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
      </div >
    </MainLayout >
  );
}

export default Registration;
