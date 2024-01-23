import Control from "../../assets/svg/control"
import { Link, useNavigate } from "react-router-dom"


function Navbar() {
    return (

        <>
            <div className='w-full bg-black text-white flex justify-center py-4'>
                <div className='container flex justify-between text-lg'>
                    <Link to="/home" className='text-2xl font-bold uppercase'>
                        Loja de Games


                    </Link>
                    <div className='flex gap-4'>
                        <Link to='/home' className='transform hover:scale-110 transition-transform duration-300'>Home</Link>
                        <div className='transform hover:scale-110 transition-transform duration-300'> Produtos </div>
                        <Link to="/categorias" className='transform hover:scale-110 transition-transform duration-300'> Categorias </Link>
                        <Link to="/cadastroCategorias" className='transform hover:scale-110 transition-transform duration-300'> Cadastrar Categorias </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar