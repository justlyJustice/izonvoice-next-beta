import { useRouter } from "next/router";
import Image from "next/image";
import * as Yup from "yup";

import AppLink from "components/common/AppLink";
import { Form, Input } from "components/forms";

/* import useAuth from "hooks/useAuth"; */
import useSubmit from "hooks/useSubmit";

import {
  LoginContainer,
  Btn as SubmitButton,
  SuccessButton,
} from "styles/loginStyles";
import auth from "services/authService";
import { logo } from "/public/assets/images";

import GoogleAuth from "components/GoogleAuth";
import Head from "components/common/Head";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("Email"),
  password: Yup.string().required().min(5).max(20).label("Password"),
});

const Login = () => {
  const { push } = useRouter();
  /* const { user } = useAuth(); */
  const {
    submit: login,
    submitting: isSubmitting,
    success,
  } = useSubmit(auth.login);

  const loginUser = (values, { resetForm }) => {
    login(values, "", `Login sucessful!`, resetForm);
  };

  /*  if (user) return push("/home"); */

  return (
    <LoginContainer>
      <Head
        title="Izonvoice - Login"
        description="Return right in and hear from some cool voices around the globe"
        image={`/assets/images/Logo.png`}
      />

      <div className="container grid">
        <div className="left-div">
          <Image
            src={`/assets/images/Logo.png`}
            alt="Izon voice logo"
            className="logo"
            width={`300`}
            height={`300`}
          />

          <div className="left-para-contain">
            <p className="para">
              <span>Return right in</span> and hear from some cool voices around
              the globe
            </p>
          </div>
        </div>

        <div className="right-div flex">
          <div className="form">
            <Form
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={loginUser}
              validationSchema={validationSchema}
            >
              <Input
                name="email"
                label="Email"
                placeholder="Enter your email..."
              />

              <Input
                name="password"
                label="Password"
                placeholder="Enter your password..."
                type="password"
              />

              {success ? (
                <SuccessButton>Success</SuccessButton>
              ) : (
                <SubmitButton
                  style={{
                    cursor: isSubmitting && "not-allowed",
                  }}
                >
                  {isSubmitting ? (
                    <i className="fa-solid fa-spinner fa-spin"></i>
                  ) : (
                    "LOGIN"
                  )}
                </SubmitButton>
              )}
            </Form>
          </div>

          <div className="right-bottom-div">
            <hr className="rule" />

            <div className="button-group flex">
              <GoogleAuth text="Continue with" />
            </div>

            <AppLink to="/sign-up">
              Don{"’"}t own an account yet? Register
            </AppLink>
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
