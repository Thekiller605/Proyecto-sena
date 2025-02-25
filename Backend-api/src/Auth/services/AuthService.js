import { UsuarioRepository } from "../../Usuarios/repository/UsuarioRepository.js";
import jwt from "jsonwebtoken";
import jwtConfig from "../../config/jwtConfig.js";
import bcrypt from "bcrypt";

export class AuthService {
  static async crearUsuario(usuarioData) {
    const { nombre, apellido, telefono, email, num_documento, password } = usuarioData; //aca le modifico o le anexo las demas 
    
    //aca voy a colocar una condicion para que los campos sean obligatorios y no esten vacios
    if (!nombre || !apellido || !telefono || !email || !num_documento || !password) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }
    //aca voy a colocar otra condicion  para que cuando ingrese el correo o emial sea valido  como es el formato de el @
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Formato de email inválido" });
    }
    //aca procedo a realizar lo mismo que con el correo pero a hora con el telefono 

    const phoneRegex = /^[0-9]{7,15}$/;
    if (!phoneRegex.test(telefono)) {
      return res.status(400).json({ message: "Teléfono inválido, debe contener solo números" });
    }
   //aca procedo a que la contraseña  contenga de 6 a 8 caracteres como obligatorio

   if (password.length < 6) {
    return res.status(400).json({ message: "La contraseña debe tener al menos 6 caracteres" });
  }
    
    const rol = "usuario";
    const passwordEncriptada = await bcrypt.hash(password, 10);
    //aca coloco lo que  va aguardar en la base de datos que seria nombre,apellido ,telefono...
    return await AuthRepository.crearUsuario({
      nombre,
      apellido,
      telefono,
      email,
      num_documento,
      password: hashedPassword,
    });
  }

  static async iniciarSesion(loginData) {
    const { email, password } = loginData;

    const usuario = await UsuarioRepository.obtenerUsuarioPorEmail(email);
    bcrypt;
    const esContrasenaCorrecta = await bcrypt.compare(
      password,
      usuario.password
    );
    if (!esContrasenaCorrecta) {
      throw new Error("Contraseña Incorrecta");
    }

    const token = jwt.sign(
      {
        id_usuario: usuario.id_usuario,
        rol: usuario.rol,
      },
      jwtConfig.secret,
      {
        expiresIn: jwtConfig.expiresIn,
      }
    );

    const infoEnviar = {
      usuario: usuario,
      token: token,
    };

    return infoEnviar;
  }

  static async rutaProtegida(req) {
    return req.usuario;
  }

  static async cerrarSesion(res) {
    res.clearCookie("access_token");
  }
}
