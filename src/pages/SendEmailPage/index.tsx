import Button from "../../components/Button";
import Input from "../../components/Input";
import { useFormik } from "formik";
import * as Yup from "yup";

const SendEmailPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values)
    },
  });

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="max-w-328 flex flex-col items-center">
        <strong className="block text-base text-center mb-30">
          Enter your email to see how you can grow with Nebula
        </strong>
        <div className="relative">
          <Input
            placeholder="Your email"
            className="mb-30 w-full"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label className="absolute left-1/2 transform -translate-x-1/2 text-sm -bottom--10 text-red-500">
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </label>
        </div>
        <span className="block text-sm text-center mb-20">
          *Nebula does not share any personal information. We`ll email you a
          copy of your program for convenient access.
        </span>
        <span className="block text-sm text-center mb-50 max-w-214">
          By continuing I agree with{" "}
          <span className="text-primary-500 cursor-pointer hover:underline">
            Privacy policy
          </span>{" "}
          and{" "}
          <span className="text-primary-500 cursor-pointer hover:underline">
            Terms of use
          </span>
          .
        </span>
        <Button
          variant="primary"
          type="submit"
          disabled={!formik.isValid || !formik.dirty}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SendEmailPage;
