import { Container,Grid,Typography} from '@mui/material'
import Form from './components/Form'
import { NoticiasProvider } from './context/NoticiasProvider'
import ListaNoticias from './components/ListaNoticias'



function App() {
  

  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align='center' marginY={5} component={'h1'} variant='h2' fontWeight={'bold'} sx={{color:'#0d95ff'}}  >
            Buscador de Noticias
          </Typography>
        </header>

        <Grid container direction={'row'} alignItems={'center'} justifyContent={'center'} >
          <Grid item xs={12} md={5} lg={6}>
            <Form />
          </Grid>
        </Grid>
        <ListaNoticias />

      </Container>
    </NoticiasProvider>
  )
}

export default App
