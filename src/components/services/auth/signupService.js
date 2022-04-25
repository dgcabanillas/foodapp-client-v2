export const sigunpService = async (name, email, password, phoneNumber, callback) => {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            password,
            phoneNumber,
          }),
        };
        
  try {
            const response = await fetch(`https:fudapp-server.herokuapp.com/signup`, requestOptions);
          
            if (response.status === 200) {
                callback({
                  status: "success",
                  data: null,
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
                  status: "Campos vacíos o correco incorrecto",
                  data: response.data,
                  error: "Campos vacíos o correco incorrecto",
                });
          }
        } catch (error) {
          callback({
            status: "Campos vacíos o correco incorrecto",
            data: null,
            error: null,
          });
        }
}