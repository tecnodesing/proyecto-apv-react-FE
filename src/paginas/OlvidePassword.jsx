import { useState } from 'react'
import {Link} from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/axios'


const OlvidePassword = () => {

    const [email, setEmail] = useState('')
    const [alerta, setAlerta] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        if(email === '' || email.length < 8){
            setAlerta({msg: 'El email es obligatorio', error: true})
            return
        }

        try {
            const { data } = await clienteAxios.post('/veterinarios/olvide-password', { email })
            console.log(data)
            setAlerta({msg: data.msg})
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }

    }

    const {msg} = alerta

    return (
    <>
      <div className="fondo">
            <img src="../public/fondo6.png" alt="" />
            <h1 className="text-indigo-600 font-black text-5xl text-center">
                Recupera tu Acceso y no piertas 
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
                            Email
                        </label>
                        <input 
                            type="email"
                            placeholder="Ingresa tu Email" 
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={email}
                            onChange= {e => setEmail(e.target.value)}
                        />
                    </div>

                    <input 
                        type="submit" 
                        value="Enviar instrucciones"
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
                        to="/registrar">¿No tienes una cuenta? Regístrate
                    </Link>
                </nav>

            </div>
    </>
  )
}

export default OlvidePassword