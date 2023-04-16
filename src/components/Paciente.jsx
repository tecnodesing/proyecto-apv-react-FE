import usePacientes from "../hooks/usePacientes"


const Paciente = ({paciente}) => {

    const {setEdicion, eliminarPaciente} = usePacientes() 

    const {email, celular, fecha, nombre, propietario, sintomas, _id } = paciente

    const formatearFecha = (fecha) => {
        const nuevaFecha = new Date(fecha)
        nuevaFecha.setMinutes(nuevaFecha.getMinutes() + nuevaFecha.getTimezoneOffset())
        return new Intl.DateTimeFormat('es-MX', {dateStyle: 'long'}).format(nuevaFecha)
    }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-lg">

        <p className="font-bold uppercase text-indigo-700 my-2">Nombre de la mascota: {''}
            <span className="font-normal normal-case text-black">{nombre}</span>
        </p>

        <p className="font-bold uppercase text-indigo-700 my-2">Nombre del Propietario: {''}
            <span className="font-normal normal-case text-black">{propietario}</span>
        </p>

        <p className="font-bold uppercase text-indigo-700 my-2">Correo: {''}
            <span className="font-normal normal-case text-black">{email}</span>
        </p>

        <p className="font-bold uppercase text-indigo-700 my-2">Celular: {''}
            <span className="font-normal normal-case text-black">{celular}</span>
        </p>

        <p className="font-bold uppercase text-indigo-700 my-2">Fecha de alta: {''}
            <span className="font-normal normal-case text-black">{formatearFecha(fecha)}</span>
        </p>

        <p className="font-bold uppercase text-indigo-700 my-2">Sintomas: {''}
            <span className="font-normal normal-case text-black">{sintomas}</span>
        </p>

        <div className="flex justify-between my-5">
            <button
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white uppercase font-bold rounded-xl"
                onClick={() => setEdicion(paciente)}
            >Editar</button>
            
            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white uppercase font-bold rounded-xl"
                onClick={() => eliminarPaciente(_id)}
            >Eliminar</button>
        </div>

    </div>
  )
}

export default Paciente