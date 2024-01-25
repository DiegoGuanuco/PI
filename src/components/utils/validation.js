export const validation = (object) => {
    const errors = {
      email: /\S+@\S+\.\S+/.test(object.email) ? "" : "El email ingresado no es válido",
      password: object.password.length > 5 ? "" : "La contraseña debe tener más de 8 caracteres"
    };
  
    return errors;
  };
  


//  export const validation = (object) => {
//   const errors = {
//     email:"",
//     password:""
//   };

//   if (!/\S+@\S+\.\S+/.test(object.email)) {
//     errors.email = "El email ingresado no es valido";
//   } else {
//     errors.email = "";
//   }

//   if (object.password.length <= 8){
//     errors.password = "La contraseña debe tener mas de 8 caracteres";
//   }
//   else{
//     errors.password = ""
//   }
    

//   return errors;
// };



