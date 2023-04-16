import { useState, useEffect } from "react"
import Alerta from "./Alerta"
import usePacientes from "../hooks/usePacientes"

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [celular, setCelular] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [id, setId] = useState(null)

    const [alerta, setAlerta] = useState({})

    const { guardarPaciente, paciente } = usePacientes()

    useEffect(() => {
        if(paciente?.nombre){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setCelular(paciente.celular)
            setFecha(paciente.fecha.substring(0, 10))
            setSintomas(paciente.sintomas)
            setId(paciente._id)
        }
    }, [paciente])

    const handleSubmit = e => {
        e.preventDefault()

        //validar el formulario
        if([nombre, propietario, email, celular, fecha, sintomas].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return;
        }
        guardarPaciente({ nombre, propietario, email, celular, fecha, sintomas, id })
        setAlerta({
            msg: 'Guardado correctamente'
        })
        setTimeout(() => {
            setAlerta("")
          }, 3000);
        setNombre('')
        setPropietario('')
        setEmail('')
        setCelular('')
        setFecha('')
        setSintomas('')
        setId('')
    }

    const {msg} = alerta
  return (
    <>
        <h2 className=" font-black text-3xl text-center">Administrador de Pacientes</h2>
        
        <p className="text-xl mt-5 mb-10 text-center">
            Añade tus pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form 
            action=""
            className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-lg rounded-lg"
            onSubmit={handleSubmit}
        >
            
            <div className="mb-5">
                <label 
                    htmlFor="nombre"
                    className=" text-gray-700 uppercase font-bold"
                    >Nombre Mascota
                </label>
                <input 
                    type="text"
                    id="nombre"
                    placeholder="Nombre de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="propietario"
                    className=" text-gray-700 uppercase font-bold"
                    >Nombre Propietario
                </label>
                <input 
                    type="text"
                    id="propietario"
                    placeholder="Nombre del propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    value={propietario}
                    onChange={e => setPropietario(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="email"
                    className=" text-gray-700 uppercase font-bold"
                    >Email Propietario
                </label>
                <input 
                    type="email"
                    id="email"
                    placeholder="Email de propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
           
            <div className="mb-5">
                <label 
                    htmlFor="celular"
                    className=" text-gray-700 uppercase font-bold"
                    >Celular Propietario
                </label>
                <input 
                    type="tel"
                    id="celular"
                    placeholder="Celular de propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    value={celular}
                    onChange={e => setCelular(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="fecha"
                    className=" text-gray-700 uppercase font-bold"
                    >Fecha Alta
                </label>
                <input 
                    type="date"
                    id="fecha"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    value={fecha}
                    onChange={e => setFecha(e.target.value)}
                />
            </div>
            
            <div className="mb-5">
                <label 
                    htmlFor="sintomas"
                    className=" text-gray-700 uppercase font-bold"
                    >Sintomas Mascota
                </label>
                <textarea 
                    id="sintomas"
                    placeholder="Sintomas de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    value={sintomas}
                    onChange={e => setSintomas(e.target.value)}
                />
            </div>
            
            <input 
                type="submit"
                className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors rounded-xl"
                value={ id ? 'Guardar cambios' : 'Agregar Paciente'} 
            />

        </form>

        {msg && <Alerta 
            alerta={alerta}
        />}

    </>
  )
}

export default Formulario