import { createContext, useContext, useEffect, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    
  // Inicialização do estado diretamente do localStorage
  const [favorito, setFavorito] = useState(() => {
    try {
      const favoritosSalvos = localStorage.getItem('favoritos');
      return favoritosSalvos ? JSON.parse(favoritosSalvos) : [];
    } catch (error) {
      console.error("Erro ao carregar favoritos do localStorage:", error);
      return [];
    }
  });

  // Atualizar o localStorage sempre que a lista de favoritos mudar
  useEffect(() => {
    try {
      localStorage.setItem('favoritos', JSON.stringify(favorito));
    } catch (error) {
      console.error("Erro ao salvar favoritos no localStorage:", error);
    }
  }, [favorito]);
  

  return (
    <FavoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritoContext() {
  const { favorito, setFavorito } = useContext(FavoritosContext);

  function adicionarFavorito(novoFavorito) {
    const favoritorepetido = favorito.some((item) => item.titulo === novoFavorito.titulo);

    function removerItem(titulo) {
      const novaLista = favorito.filter((item) => item.titulo !== titulo);
      setFavorito(novaLista);
    }

    if (favoritorepetido) {
      removerItem(novoFavorito.titulo);
    } else {
      setFavorito([...favorito, novoFavorito]);
    }
  }

  return {
    favorito,
    adicionarFavorito,
  };
}
