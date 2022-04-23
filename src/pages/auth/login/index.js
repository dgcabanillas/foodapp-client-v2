import { useCustomFormik } from "src/components/hooks/useCustomFormik";
import { useRouter } from "src/components/hooks/useRouter";

import AuthLink from "src/components/shared/crossed/AuthLink";
import AuthForm from "src/components/shared/crossed/AuthForm";
import MailIcon from "src/components/shared/icons/MailIcon";
import KeyIcon from "src/components/shared/icons/KeyIcon";
import Button from "src/components/shared/base/Button";
import Input from "src/components/shared/base/Input";

import styles from './styles.module.scss';
import { classNames } from "src/components/utils/classNames";
import Swal from 'sweetalert2';

import { useLocation, Link } from "react-router-dom";
//import axios from 'axios';




const Login = () => {
  const { gotoRegister, gotoRecover, gotoHome } = useRouter();
  const formik = useCustomFormik({ email: 'juan12345@gmail.com', password: '27163300' }, () => { });


  const clickLogin = async () => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formik.values.email,
        password: formik.values.password
      })
    };

    try {
      const response = await fetch(`http://localhost:7789/login`, requestOptions);
      const data = await response.json();
      let valor=false
      console.log(data.token.authToken)
      console.log(data.token.refreshToken)
      console.log(data)

      if(response.status==200){
        valor=true;
        gotoHome();

      }else{
        Swal.fire('Credentials', 'Email o password incorrectos','error');
      }

      return valor;
    } catch (error) {
      Swal.fire('Credentials', 'Email o password incorrectos','error');
    }
  }

  
  return (
    <AuthForm

      title="¡Bienvenido!"
      description="Ingresa a tu cuenta para poder continuar"
      onSubmit={formik.handleSubmit}
      className={styles['login-form']}
    >
      <Input
        name="email"
        Icon={<MailIcon />}
        label="Correo electrónico"
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder="example@email.com"
        className={styles['login-form__input']}
      />
      <Input
        type='password'
        name="password"
        Icon={<KeyIcon />}
        label="Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        placeholder="••••••••"
        className={styles['login-form__input']}
      />
      <Button
        text='Ingresar'
        type="submit"
        variant="light"
        onClick={clickLogin}
        className={styles['login-form__button']}
      />
      {/*       <Button 
        text='Recuperar cuenta' 
        variant="link" 
        onClick={gotoRecover}
        className={styles['login-form__button']}
      /> */}
      <Button
        text='Crear una cuenta nueva'
        onClick={gotoRegister}
        className={classNames({
          [styles['login-form__button']]: true,
          [styles['login-form__button--last']]: true
        })}
      />
      <AuthLink
        normalText={`Regresar al `}
        linkText='Inicio'
        onClick={gotoHome}
      />
    </AuthForm>
  )
}

export default Login;

/* function useUser() {

  const logo= Login.clickLogin().then(token => {
    window.sessionStorage.setItem('token', token)
    .catch(err => {
      window.sessionStorage.removeItem('token')
      console.error(err)
    })
  })

  const logout = () => {
    window.sessionStorage.removeItem('token')
  }

  return {
    isLogged: Boolean(token),
    logo,
    logout
  }
}  */