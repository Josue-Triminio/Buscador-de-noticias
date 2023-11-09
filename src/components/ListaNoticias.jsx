import {Grid,Typography,} from '@mui/material'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function ListaNoticias() {
    const {noticia,totalNoticias,handleChangePagina,pagina}=useNoticias()
    const totalPaginas= Math.ceil(totalNoticias / 20)
  return (
    <>
        <Typography textAlign={'center'} marginY={5} variant='h4' component={'h2'} sx={{color:' #0d82ff '}} fontWeight={'bold'}  > ULTIMAS NOTICIAS</Typography>
        <Grid container spacing={3}>
           {noticia.map(noticia=>(
            <Noticia key={noticia.url} noticia={noticia} />
           ))}
        </Grid>
        <Stack spacing={2} alignItems={'center'} justifyContent={'center'} sx={{margin:7}}>
            <Pagination count={totalPaginas} color="primary" onChange={handleChangePagina} page={pagina} />
        </Stack>


    
    
    
    </>
  )
}
