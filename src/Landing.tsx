import './App.css'
import { Button } from "./components/ui/button.tsx";
import { Input } from "./components/ui/input.tsx";
import { Link } from 'react-router-dom';

function Landing() {

  return (
    <>
      <header className="z-50 bg-white shadow-xl shadow-orange-300">
        <div className="container mx-auto flex flex-col max-w-6xl items-center justify-between py-6 px-4">
          <div className="flex justify-between w-full">
            <img src="img/Logo.png" alt="Logo Farmasol" />
            <div className="space-x-4">

              <Link to="/admin">
                <Button variant="outline">
                  Admin
                </Button>
              </Link>

              <Button variant="outline">0</Button>
            </div>
          </div>
          <div className="container mt-4 items-center flex justify-between w-full"> {/* Added w-full here */}
            <Button variant="ghost" className=" text-center">Antibióticos</Button>
            <Button variant="ghost" className=" text-center">Antibióticos</Button>
            <Button variant="ghost" className=" text-center">Antibióticos</Button>
            <Button variant="ghost" className=" text-center">Antibióticos</Button>



          </div>
        </div>
      </header>

      <div className="flex flex-col object-cover bg-[url(../../public/img/banner.jpg)] bg-center">
        <div className="bg-radial bg-gradient-to-r from-orange-800 via-orange-800/60 to-orange-800 h-m py-20">
          <div className="container mx-auto flex flex-col max-w-6xl items-center px-[250px]">
            <div className="">
              <h1 className="text-white text-4xl font-bold text-center mb-4">COMPRA TUS MEDICINAS ESENCIALES</h1>
            </div>
            <div className="w-full">
              <Input placeholder="🔍 Busca tu medicina" className="flex-1 border-none outline-none focus:ring-0" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-orange-100 justify-between items-center pt-20 pb-8 space-y-20">
        <div className="container flex flex-row justify-between max-w-6xl items-center">
          <div className="flex flex-col">
            <h3 className="font-bold text-center">CATEGORIAS</h3>
            <Button variant="link" className=" text-center">Antibióticos</Button>
            <Button variant="link" className=" text-center">Dermatológicos</Button>
            <Button variant="link" className=" text-center">Dolor General</Button>

          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-center">CONTACTO</h3>
            <Button variant="link" className=" text-center">Antibióticos</Button>
            <Button variant="link" className=" text-center">Antibióticos</Button>
            <Button variant="link" className=" text-center">Antibióticos</Button>

          </div>
          <img src="img/Unilogo.png" alt="Logo Farmasol" />

        </div>
        <div className="text-sm text-center">
          <p>2025 © Farmasol, S.A. Nacional Farmacéutica | Desarrollado por estudiantes de la UNEG.</p>
        </div>
      </div>

    </>
  )
}

export default Landing
