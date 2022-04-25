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
import PhoneNumberIcon from "src/components/shared/icons/PhoneNumberIcon";
import { sigunpService } from "src/components/services/auth/signupService";
import Swal from "sweetalert2";

const Register = () => {
  const { gotoLogin, gotoHome } = useRouter();
  const formik = useCustomFormik({ name: '', email: '', password: '', phoneNumber: '' }, () => signupUser());

  //https:fudapp-server.herokuapp.com/sigunp

  const signupUser = () => {
    sigunpService(
      formik.values.name,
      formik.values.email,
      formik.values.password,
      formik.values.phoneNumber,
      (response) => {
        if (response.status === "success") {
          Swal.fire("Credentials",response.error, "success");
          gotoLogin();
        }
        else if (response.status === "warning") {
          Swal.fire("Credentials", response.error, "warning");
        } else {
          Swal.fire('Credentials', 'Campos vacíos o correco incorrecto','error');
        }
      }
    );
  };


  return (
    <AuthForm
      title="Crear una cuenta"
      description="Por favor crea una cuenta para usar nuestro servicio"
      onSubmit={formik.handleSubmit}
      className={styles["register-form"]}
    >
      <Input
        name="name"
        Icon={<ProfileIcon />}
        label="Nombres y apellidos"
        value={formik.values.name}
        onChange={formik.handleChange}
        placeholder="John Doe"
        className={styles["register-form__input"]}
      />
      <Input
        name="email"
        Icon={<MailIcon />}
        label="Correo electrónico"
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder="example@email.com"
        className={styles["register-form__input"]}
      />
      <Input
        type="password"
        name="password"
        Icon={<KeyIcon />}
        label="Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        placeholder="••••••••"
        className={styles["register-form__input"]}
      />
      <Input
        name="phoneNumber"
        Icon={<PhoneNumberIcon />}
        label="Numero Celular"
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
        placeholder="969870875"
        className={styles["register-form__input"]}
      />
      <Button
        text="Crear cuenta"
        type="submit"
        onClick={() => {}}
        className={styles["register-form__button"]}
      />
      <AuthLink
        normalText={`¿Ya tienes una cuenta? `}
        linkText="Ingresa aquí"
        onClick={gotoLogin}
      />
      <AuthLink
        normalText={`Regresar al `}
        linkText="Inicio"
        onClick={gotoHome}
      />
    </AuthForm>
  );
}

export default Register;