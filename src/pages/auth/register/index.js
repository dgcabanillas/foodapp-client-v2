import { useCustomFormik } from "src/components/hooks/useCustomFormik";

import AuthLink from "src/components/shared/crossed/AuthLink";
import AuthForm from "src/components/shared/crossed/AuthForm";
import Button   from "src/components/shared/base/Button";
import Input    from "src/components/shared/base/Input";

import ProfileIcon  from "src/components/shared/icons/ProfileIcon";
import MailIcon     from "src/components/shared/icons/MailIcon";
import KeyIcon      from "src/components/shared/icons/KeyIcon";

import { useRouter } from "src/components/hooks/useRouter";
import Swal from 'sweetalert2';
import styles from './styles.module.scss';
import PhoneNumberIcon from "src/components/shared/icons/PhoneNumberIcon";

const Register = () => {
  const { gotoLogin, gotoHome } = useRouter();
  const formik = useCustomFormik({ name:'',email: '', password: '', phoneNumber: '' }, () => {});

  const clickRegister =async () => {
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name:formik.values.email,
          email: formik.values.email,
          password:formik.values.password,
          phoneNumber:formik.values.phoneNumber
         })
    };

    try {
      const response = await fetch(`http://localhost:7789/signup`, requestOptions);
      const data = await response.json();

      console.log(response)
      console.log(data)
      if(response.status ==200){
        Swal.fire('Credentials',`usuario creado`,'success');
        gotoLogin();
      }
      else if(response.status ==400){
        Swal.fire('Credentials', 'El correo ya existe','warning');
      }else{
        Swal.fire('Credentials', 'Campos vacíos o correco incorrecto','error');
      }
      
    } catch (error) {
      Swal.fire('Credentials', 'Email o password incorrectos','error');
    }

  }


  return (
    <AuthForm 
      title="Crear una cuenta"
      description="Por favor crea una cuenta para usar nuestro servicio"
      onSubmit={formik.handleSubmit}
      className={styles['register-form']}
    >
      <Input 
        name="name" 
        Icon={<ProfileIcon />}
        label="Nombres y apellidos"
        value={formik.values.name}
        onChange={formik.handleChange}
        placeholder="John Doe"
        className={styles['register-form__input']}
      />
      <Input 
        name="email" 
        Icon={<MailIcon />}
        label="Correo electrónico"
        value={formik.values.email}
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
        onChange={formik.handleChange}
        placeholder="••••••••"
        className={styles['register-form__input']}
      />
      <Input 
        name="phoneNumber" 
        Icon={<PhoneNumberIcon />}
        label="Numero Celular"
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
        placeholder="969870875"
        className={styles['register-form__input']}
      />
      <Button 
        text='Crear cuenta'
        onClick={clickRegister} 
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