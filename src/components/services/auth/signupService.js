export const signupService = async ( args, callback) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: args.name,
      email: args.email,
      password: args.password,
      phoneNumber: args.phoneNumber,
    }),
  };
        
  try {
    const response = await fetch(`https://fudapp-server.herokuapp.com/signup`, requestOptions);
    console.log(response);
  
    if (response.status === 200) {
      callback({
        status: "success",
        data: response.data,
        error: 'Usuario creado correctamente',
      });
    } else if (response.status === 400) {
      callback({
        status: "warning",
        data: null,
        error: "EL correo ya existe",
      });
    } else {
      callback({
        status: "error",
        data: null,
        error: "Campos vacíos o correo incorrecto",
      });
    }
  } catch (error) {
    callback({
      status: "error",
      data: null,
      error: "Algo salió mal en el registro",
    });
  }
}