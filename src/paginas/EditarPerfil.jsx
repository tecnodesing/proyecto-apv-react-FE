import { useEffect, useState } from "react"
import AdminNav from "../components/AdminNav"
import useAuth from "../hooks/useAuth"
import Alerta from "../components/Alerta"

const EditarPerfil = () => {
    
    const [alerta, setAlerta] = useState({})
    const { auth, actualizarPerfil } = useAuth()
    const [perfil, setPerfil] = useState({
        nombre: '',
        web: '',
        telefono: '',
        email: '',
    })
    const {nombre, email, web, telefono} = perfil

    useEffect( () => {  
        setPerfil(auth.veterinario)
    }, [auth])

    const handleSubmit = async e => {
        e.preventDefault()
        const {nombre, email} = perfil
        if([nombre, email].includes('')){
            setAlerta({
                msg: 'Email y Nombre son obligatorios',
                error: true
            })
            return 
        }

        const resultado = await actualizarPerfil(perfil)
        const res = setAlerta(resultado)
        setAlerta(resultado)
        setTimeout(() => {
            setAlerta({})
        }, 3000);
    }


    const {msg} = alerta
    // console.log(perfil)
    // console.log(auth.veterinario)
  return (
    <>
        <AdminNav />

        <h2 className=" font-black text-3xl text-center mt-10">Editar Perfil</h2>
        <p className="text-xl mt-5 mb-10 text-center">
            Modifica tu {''}
            <span className="text-indigo-600 font-bold">
                Información aquí
            </span>
        </p>

        <div className="flex justify-center">
            <div className="w-full md:w-1/2 bg-white shadow-md rounded-xl p-5">

                {msg && <Alerta alerta={alerta} />}
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="my-3">
                        <label 
                            htmlFor="nombre"
                            className=" uppercase font-bold text-gray-600"
                        >
                            Nombre:
                        </label>
                        <input 
                            type="text" 
                            name="nombre" 
                            id="nombre"
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                            value={ nombre }
                            onChange={e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })} 
                        />
                    </div>

                    <div className="my-3">
                        <label 
                            htmlFor="web"
                            className=" uppercase font-bold text-gray-600"
                        >
                            Sitio Web / Redes Sociales:
                        </label>
                        <input 
                            type="text" 
                            name="web" 
                            id="web"
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" 
                            value={ web }
                            onChange={e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })} 
                        />
                    </div>

                    <div className="my-3">
                        <label 
                            htmlFor="telefono"
                            className=" uppercase font-bold text-gray-600"
                        >
                            Teléfono:
                        </label>
                        <input 
                            type="tel" 
                            name="telefono" 
                            id="telefono"
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" 
                            value={telefono}
                            onChange={e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })} 
                        />
                    </div>

                    <div className="my-3">
                        <label 
                            htmlFor="email"
                            className=" uppercase font-bold text-gray-600"
                        >
                            Email:
                        </label>
                        <input 
                            type="text" 
                            name="email" 
                            id="email"
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" 
                            value={ email }
                            onChange={e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })} 
                        />
                    </div>

                    <input 
                        type="submit"
                        value="Guardar Cambios"
                        className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-xl uppercase w-full mt-5 hover:bg-indigo-900" 
                    />
                </form>
            </div>
        </div>

    </>
  )
}

export default EditarPerfil