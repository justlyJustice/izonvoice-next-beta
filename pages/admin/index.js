import Image from "next/image";

import * as Yup from "yup";
import { Form, Input, SubmitButton } from "components/forms";

import authService from "services/authService";
import useSubmit from "hooks/useSubmit";
import Head from "components/common/Head";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

const AdminLogin = () => {
  const {
    submit: login,
    submitting,
    error,
    success,
    status,
  } = useSubmit(authService.login);

  const handleSubmit = (values) => {
    login(values, `/dashboard`);
  };

  return (
    <>
      <Head
        title="Admin Login - IzonVoice"
        description="Login to acccess, manage and add posts!"
        image={"/public/assets/Logo.png"}
      />

      <div className="auth-contain">
        <div className="left-contain">
          <Image
            src={"/assets/images/Logo.png"}
            alt="Logo"
            className="logo"
            width={220}
            height={220}
          />
        </div>

        <div className="right-contain">
          <div className="form__contain">
            <div className="text-div">
              <h2>
                Welcome Admin <i className="fa-solid fa-user-secret"></i>
              </h2>
              <h4>LOGIN TO CONTINUE</h4>
            </div>

            {error && <span className="error">{status}</span>}

            {success && <span className="text-success">Login Successful!</span>}

            <Form
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Input
                className={`input`}
                name={`email`}
                placeholder={`Email address`}
              />

              <Input
                className={`input`}
                name={`password`}
                placeholder={`Enter password`}
                type={`password`}
              />

              <SubmitButton className={`submit-btn`} disabled={submitting}>
                {submitting ? (
                  <>
                    Checking... <i className="fa-solid fa-spinner fa-spin"></i>
                  </>
                ) : (
                  <>
                    Login <i className="fa-solid fa-send"></i>
                  </>
                )}
              </SubmitButton>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
