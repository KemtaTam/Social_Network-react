import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './Login.module.css';
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
	return (
		<Formik
			initialValues={{ email: '', password: '', rememberToggle: false }}
			validationSchema={Yup.object({
				email: Yup.string().email('Invalid email address').required('Required'),
				password: Yup.string().min(4, 'Must be 4 characters or more').required('Required'),
			  })}
			onSubmit={(values, { setSubmitting }) => {
				console.log(JSON.stringify(values, null, 2));
				props.login(values);
				values.password = '';
				setSubmitting(false);
			}}
		>
			{({ isSubmitting }) => (
				<Form className={s.form}>
					<div className={s.formWrapper}>
						<div >
							<Field className={s.elemForm} type="email" name="email" placeholder="Email"/>
							<ErrorMessage className={s.errorMes} name="email" component="div" />
						</div>
						<div>
							<Field className={s.elemForm} type="password" name="password" placeholder="Password"/>
							<ErrorMessage className={s.errorMes} name="password" component="div" />
						</div>
						<div className={s.rememberMe}>
							<Field type="checkbox" name="rememberToggle"/>Remember me
						</div>
						<button className={s.bLogin} type="submit" disabled={isSubmitting}>Login</button>
					</div>
				</Form>
			)}
		</Formik>
  );
}

const Login = (props) => {
	if(props.isAuth){
		return <Navigate to={"/profile"}/>
	}

	return ( 
		<div>
			<LoginForm {...props}/>
		</div>
	 );
}

export default Login;