import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/axios'

const ConfirmarCuenta = () => {

  const [cuentaConfirmada, setcuentaConfirmada] = useState(false)
  const [cargando, setCargando] = useState(true)
  const [alerta, setAlerta] = useState()

  const params = useParams()
  const {id} = params

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const {data} = await clienteAxios(`veterinarios/confirmar/${id}`)

        setcuentaConfirmada(true)
        setAlerta({
          msg: data.msg
        })
        
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
        
      }

      setCargando(false)

    }
    confirmarCuenta()
  }, [])

  return (
    <>
        <div className="fondo">
            <img src="/fondo6.png" alt="" />
            <h1 className="text-indigo-600 font-black text-5xl text-center">
                Confirma tu Cuenta y Comienza a Administrar 
                <span className=" text-black"> a tus Pacientes</span>
            </h1>
        </div>

        <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
          {!cargando && 
            <Alerta 
              alerta={alerta}
            />
          }

          {cuentaConfirmada && (
            <Link 
              className='block text-center my-5 text-gray-500'
              to="/">Iniciar Sesión
            </Link>
          )}
        </div>
    </>
  )
}

export default ConfirmarCuenta