import { useCustomFormik } from "src/components/hooks/useCustomFormik";
import { useRouter } from "src/components/hooks/useRouter";

import AuthForm from "src/components/shared/crossed/AuthForm";
import MailIcon from "src/components/shared/icons/MailIcon";
import KeyIcon  from "src/components/shared/icons/KeyIcon";
import Button   from "src/components/shared/base/Button";
import Input    from "src/components/shared/base/Input";

import styles from './styles.module.scss';

const Login = () => {
  const { gotoRegister, gotoRecover } = useRouter();
  const formik = useCustomFormik({ email: '', password: '' }, () => {});

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
        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        className={styles['login-form__input']}
      />
      <Button 
        text='Ingresar' 
        variant="light" 
        onClick={() => {}} 
        className={styles['login-form__button']}
      />
      <Button 
        text='Recuperar cuenta' 
        variant="link" 
        onClick={gotoRecover}
        className={styles['login-form__button']}
      />
      <Button 
        text='Crear una cuenta nueva' 
        onClick={gotoRegister}
        className={styles['login-form__button']}
      />
    </AuthForm>
  )
}

export default Login;