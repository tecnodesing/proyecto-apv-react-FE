import { Link } from "react-router-dom"

const AdminNav = () => {
  return (
    <nav className="flex gap-3 justify-around">
        <Link
         to="/admin/perfil"
         type="button"
         className="font-bold uppercase text-gray-500 hover:text-gray-700" 
        >Perfil</Link>
        
        <Link
         to="/admin/cambiar-password"
         type="button"
         className="font-bold uppercase text-gray-500 hover:text-gray-700" 
        >Cambiar Contraseña</Link>
    </nav>
  )
}

export default AdminNav