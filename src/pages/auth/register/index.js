import Swal from "sweetalert2";
import { useCustomFormik } from "src/components/hooks/useCustomFormik";

import AuthLink from "src/components/shared/crossed/AuthLink";
import AuthForm from "src/components/shared/crossed/AuthForm";
import Button   from "src/components/shared/base/Button";
import Input    from "src/components/shared/base/Input";

import ProfileIcon  from "src/components/shared/icons/ProfileIcon";
import MailIcon     from "src/components/shared/icons/MailIcon";
import KeyIcon      from "src/components/shared/icons/KeyIcon";

import { useRouter } from "src/components/hooks/useRouter";

import styles from './styles.module.scss';
import { signupService } from "src/components/services/auth/signupService";

const Register = () => {
  const { gotoLogin, gotoHome } = useRouter();
  const formik = useCustomFormik({ email: '', password: '', name: '', phoneNumber: '' }, () => { registerUser() });

  const registerUser = () => {
    signupService(
      {
        name: formik.values.name,
        email: formik.values.email, 
        password: formik.values.password, 
        phoneNumber: formik.values.phoneNumber,
      },
      (response) => {
        console.log(response);
        if (response.status === "success") {
          gotoHome();
        }
        else{
          Swal.fire("Credentials", response.error, response.status);
        }
      }
    )
  }

  return (
    <AuthForm 
      title="Crear una cuenta"
      description="Por favor crea una cuenta para usar nuestro servicio"
      onSubmit={formik.handleSubmit}
      className={styles['register-form']}
    >
      <Input 
        name="email" 
        Icon={<MailIcon />}
        label="Correo electrónico"
        value={formik.values.email}
        error={formik.errors.email}
        onChange={formik.handleChange}
        placeholder="example@email.com"
        className={styles['register-form__input']}
      />
      <Input 
        type='password'
        name="password" 
        Icon={<KeyIcon />}
        label="Contraseña"
        value={formik.values.password}
        error={formik.errors.password}
        onChange={formik.handleChange}
        placeholder="••••••••"
        className={styles['register-form__input']}
      />
      <Input 
        name="name" 
        Icon={<ProfileIcon />}
        label="Nombres"
        value={formik.values.name}
        error={formik.errors.name}
        onChange={formik.handleChange}
        placeholder="John"
        className={styles['register-form__input']}
      />
      <Input 
        name="phoneNumber" 
        Icon={<ProfileIcon />}
        label="Número telefónico"
        value={formik.values.phoneNumber}
        error={formik.errors.phoneNumber}
        onChange={formik.handleChange}
        placeholder="999888777"
        className={styles['register-form__input']}
      />
      <Button 
        text='Crear cuenta'
        onClick={() => {}} 
        type="submit"
        className={styles['register-form__button']}
      />
      <AuthLink 
        normalText={`¿Ya tienes una cuenta? `}
        linkText='Ingresa aquí'
        onClick={gotoLogin}
      />
      <AuthLink
        normalText={`Regresar al `}
        linkText='Inicio'
        onClick={gotoHome}
      />
    </AuthForm>
  )
}

export default Register;