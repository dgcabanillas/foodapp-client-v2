export const loginService = async (args, callback) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: args.email,
      password: args.password,
    }),
  };

  try {
    const response = await fetch(`https://fudapp-server.herokuapp.com/login`, requestOptions);
    if (response.status === 200) {
        callback({
            status: 'success',
            data:  await response.json(),
            error: null
        });
    } else {
      const error = await response.json()
      callback({
        status: "error",
        data: null,
        error: error.message || "Email o password incorrecto",
      });
    }
      
  } catch (error) {
    callback({
      status: "error",
      data:  null,
      error: "Email o password incorrecto" 
    });
  }
};
