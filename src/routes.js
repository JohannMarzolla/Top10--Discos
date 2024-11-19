import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Favoritos from "./pages/Favoritos";
import FavoritosProvider from "./contextos/Favoritos";
import Player from "./pages/Player";
import DiscosContextProvider from "./contextos/Discos";
import Rock from "./pages/Rock";
import Metal from "./pages/Metal";
import Pop from "./pages/Pop";


function AppRoutes() {

    
    return (
        <BrowserRouter >
        <DiscosContextProvider>
            <FavoritosProvider>
                <Routes >
                    <Route path = "/" element={<Inicio/>} />
                    <Route path = "Favoritos" element={<Favoritos/>} />
                    <Route path = "Rock" element={<Rock/>} />
                    <Route path = "Pop" element={<Pop/>} />
                    <Route path = "Metal" element={<Metal/>} />
                    <Route path = ":id" element={<Player/>} />
                </Routes>
            </FavoritosProvider>
            </DiscosContextProvider>
        </BrowserRouter>
      
       
       
    );
  }
  
  export default AppRoutes;