import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieData } from '../redux-thunk/action/movieAction'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function MovieList() {
    const dispatch = useDispatch()
    const { movieDataList } = useSelector((state) => state.movie)

    useEffect(() => {
        dispatch(getMovieData())
    }, [])

    useEffect(() => {
        console.log(movieDataList, "movieDataList");
    }, [movieDataList])

    return (

        <>
            <div className="row">
                {
                    movieDataList.map((val, ind) => {
                        return (
                            <div className="col-3">
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 400 }}
                                        image={`https://media.themoviedb.org/t/p/w440_and_h660_face/${val.backdrop_path}`}
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {val.
                                                original_title
                                            }
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default MovieList