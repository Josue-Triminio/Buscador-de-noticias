
import { useEffect, useState , createContext} from "react";

const NoticiasContext=createContext()



 const NoticiasProvider=({children})=>{
    const [categoria, setCategoria] = useState('general')
    const [noticia, setNoticia] = useState([])
    const [pagina, setPagina] = useState(1)
    const [totalNoticias, setTotalNoticias] = useState(0)

    const handleChangeCategoria=(e)=>{
        setCategoria(e.target.value)
    }

    useEffect(() => {
        const API= async()=>{
            const url=`https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
            const data=await fetch(url)
            const res=await data.json()
            setNoticia(res.articles);
             setTotalNoticias(res.totalResults)
             setPagina(1)
        }

        API()
    
    }, [categoria])


    const handleChangePagina =(e,valor)=>{
        setPagina(valor);
    }


    useEffect(() => {
        const API= async()=>{
            const url=`https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
            const data=await fetch(url)
            const res=await data.json()
            setNoticia(res.articles);
             setTotalNoticias(res.totalResults)
        }

        API()
    
    }, [pagina])
    


    return (
        <NoticiasContext.Provider value={{
            categoria,
            handleChangeCategoria,
            noticia,
            totalNoticias,
            handleChangePagina,
            pagina


        }}>
            {children}
        </NoticiasContext.Provider>
    )
 }


 export {
    NoticiasProvider
 }

 export default NoticiasContext; 