import { Outlet} from 'react-router-dom'

const AuthLayout = () => {
  return (
    <>

        <main className="container mx-auto mt-12 md:grid md:grid-cols-2 gap-14 p-6">
            <Outlet />

        </main>
    </>
  )
}

export default AuthLayout;