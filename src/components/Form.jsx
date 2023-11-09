import {FormControl,InputLabel,Select,MenuItem,Button,Box} from '@mui/material'
import useNoticias from '../hooks/useNoticias'



const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]



export default function Form() {
    const {categoria,handleChangeCategoria}=useNoticias()
  return (
    <form>
        <FormControl fullWidth>
            <InputLabel>Categorias</InputLabel>
            <Select
                label='Categorias'
                onChange={handleChangeCategoria}
                value={categoria}
                
                
                
            >

                {CATEGORIAS.map(categoria=>(
                    <MenuItem key={categoria.value} value={categoria.value}>
                        {categoria.label}
                    </MenuItem>
                ))}


            </Select>
           
        </FormControl>
    </form>
  )
}
