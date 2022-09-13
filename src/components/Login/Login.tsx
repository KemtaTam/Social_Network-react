import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Navigate } from "react-router-dom";
import { LoginDataType } from "../../types/auth-types";
import s from "./Login.module.css";

type PropsFormType = {
	login: (loginData: LoginDataType, setStatus: (status?: any) => void) => void;
	logout: () => void;
	captchaUrl: string | null;
};
type ValuesType = {
	email: string;
	password: string;
	rememberToggle: boolean;
	captcha: string;
};

const LoginForm: React.FC<PropsFormType> = ({ login, logout, captchaUrl }) => {
	return (
		<Formik
			initialValues={{ email: "", password: "", rememberToggle: false, captcha: "" }}
			validationSchema={Yup.object({
				email: Yup.string().email("Invalid email address").required("Required"),
				password: Yup.string().min(4, "Must be 4 characters or more").required("Required"),
			})}
			onSubmit={(values: ValuesType, { setSubmitting, setStatus }) => {
				console.log(JSON.stringify(values, null, 2));
				login(values, setStatus);
				values.password = "";
				setSubmitting(false);
			}}>
			{({ isSubmitting, status }) => (
				<Form className={s.form}>
					<div className={`${s.formWrapper} ${status && s.error}`}>
						<div className={s.errorText}>{status}</div>
						<div>
							<Field
								className={s.elemForm}
								type="email"
								name="email"
								placeholder="Email"
							/>
							<ErrorMessage className={s.errorMes} name="email" component="div" />
						</div>
						<div>
							<Field
								className={s.elemForm}
								type="password"
								name="password"
								placeholder="Password"
							/>
							<ErrorMessage className={s.errorMes} name="password" component="div" />
						</div>
						<div className={s.rememberMe}>
							<Field type="checkbox" name="rememberToggle" />
							Remember me
						</div>
						<button className={s.bLogin} type="submit" disabled={isSubmitting}>
							Login
						</button>
						{captchaUrl && (
							<div>
								<img src={captchaUrl} alt="captcha" />
							</div>
						)}
						{captchaUrl && (
							<Field className={s.elemForm} name="captcha" placeholder="captcha" />
						)}
					</div>
				</Form>
			)}
		</Formik>
	);
};

type PropsType = {
	isAuth: boolean;
	login: (loginData: LoginDataType, setStatus: any) => void;
	logout: () => void;
	captchaUrl: string | null;
};
const Login: React.FC<PropsType> = ({ isAuth, login, logout, captchaUrl }) => {
	if (isAuth) {
		return <Navigate to={"/profile"} />;
	}

	return (
		<div>
			<LoginForm login={login} logout={logout} captchaUrl={captchaUrl} />
		</div>
	);
};

export default Login;
