import {Card,CardActions,CardContent,CardMedia,Link,Typography,Grid} from '@mui/material'

function Noticia({noticia}) {
    const { title,url,urlToImage,publishedAt,source,description}=noticia
  return (
   <Grid item md={6} lg={4}>
    <Card>
        {urlToImage && <CardMedia height={300} width={700} component={'img'} alt={`imagen de noticia ${title}`} image={urlToImage}/>}
        <CardContent>
            <Typography component={'h5'} variant='h5' color={'error'}>
                {source.name}
            </Typography>
            <Typography variant='h6' component={'h5'} >
                {title}
            </Typography>
            <Typography variant='body2' color={'gray'}>
                {description}
            </Typography>
        </CardContent>
        <CardActions>
            <Link href={url} target='_blank' rel='noopener noreferrer' variant='button' width={'100%'} textAlign={'center'} sx={{textDecoration:'none'}} >
                LEER NOTICIA
            </Link>
        </CardActions>
    </Card>
   </Grid>
  )
}

export default Noticia