import { useState } from 'react'
import {Link} from 'react-router-dom'
import clienteAxios from '../config/axios'
import Alerta from '../components/Alerta'


const Registrar = () => {
  
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repetirPassword, setRepetirPassword] = useState('')

    const [alerta, setAlerta] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if([nombre, email, password, repetirPassword].includes('')){
            setAlerta({
                msg: 'Existen campos vacios', 
                error: true
            });
            return;
        }

        if(password !== repetirPassword){
            setAlerta({
                msg: 'Las contraseñas son diferentes', 
                error: true
            });
            return;
        }

        if(password.length < 8){
            setAlerta({
                msg: 'La contraseña es muy corta, agrega minimo 8 caracteres', 
                error: true
            });
            return;
        }

        setAlerta({})

        //crear usuario en API
        try {
            await clienteAxios.post('/veterinarios', {nombre, email, password})
            setAlerta({msg: 'Creado correctamente, revisa tu Email y sigue las instrucciones', error: false});
        } catch (error) {
            setAlerta({msg: error.response.data.msg, error: true});
        }
    }

    const {msg} = alerta;

    return (
    <>
        <div className="fondo">
            <img src="../public/fondo6.png" alt="" />
            <h1 className="text-indigo-600 font-black text-5xl text-center">
                Crea tu Cuenta y Administra 
                <span className=" text-black"> a tus Pacientes</span>
            </h1>
        </div>

        <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
                {msg && <Alerta 
                    alerta={alerta}
                />}

                <form 
                    action=""
                    onSubmit={handleSubmit}
                >
                    <div className="my-7">
                        <label 
                            htmlFor=""
                            className=" uppercase text-gray-600 block text-xl font-bold"
                        >
                            Nombre
                        </label>
                        <input 
                            type="text"
                            placeholder="Ingresa tu Nombre" 
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={nombre}
                            onChange= { e => setNombre(e.target.value)}
                        />
                    </div>

                    <div className="my-7">
                        <label 
                            htmlFor=""
                            className=" uppercase text-gray-600 block text-xl font-bold"
                        >
                            Email
                        </label>
                        <input 
                            type="email"
                            placeholder="Ingresa tu Email" 
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={email}
                            onChange= { e => setEmail(e.target.value)}
                        />
                    </div>

                    
                    <div className="my-7">
                        <label 
                            htmlFor=""
                            className=" uppercase text-gray-600 block text-xl font-bold"
                        >
                            Password
                        </label>
                        <input 
                            type="password"
                            placeholder="Ingresa una Contraseña" 
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={password}
                            onChange= { e => setPassword(e.target.value)}
                        />
                    </div>
                    
                    <div className="my-7">
                        <label 
                            htmlFor=""
                            className=" uppercase text-gray-600 block text-xl font-bold"
                        >
                           Repetir Password
                        </label>
                        <input 
                            type="password"
                            placeholder="Ingresa nuevamente tu Contraseña" 
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={repetirPassword}
                            onChange= { e => setRepetirPassword(e.target.value)}
                        />
                    </div>
                    
                    <input 
                        type="submit" 
                        value="Crear cuenta"
                        className=" bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer md:w-auto"
                    />

                </form>

                <nav className=' mt-10 lg:flex lg:justify-between'>
                    <Link 
                        className='block text-center my-5 text-gray-500'
                        to="/">¿Ya tienes una cuenta? Inicia Sesión
                    </Link>
                    <Link 
                        className='block text-center my-5 text-gray-500'
                        to="/olvide-password">¿Olvidaste tu contraseña? Recupérala
                    </Link>
                </nav>

            </div>
    </>
  )
}

export default Registrar