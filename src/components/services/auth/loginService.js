export const loginService = async (email, password, callback) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  };

  //return await fetch(`https://fudapp-server.herokuapp.com/login`, requestOptions);
  try {
    const response = await fetch(`https://fudapp-server.herokuapp.com/login`, requestOptions);
   
    if (response.status === 200) {
        
        callback({
            status: 'success',
            data:  await response.json(),
            error: null
        });
    } else {
      callback({
        status: "error",
        data: null,
        error: "Email o password incorrecto",
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
