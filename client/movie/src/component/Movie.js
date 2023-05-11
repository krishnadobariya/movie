import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';


function Movie() {

    const [page, setPage] = useState(1);
    const [limit, setLinit] = useState(10);
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        getMovieData()
    }, [page])

    const getMovieData = async () => {
        const data = await axios.get(`http://localhost:8000/movie/get/${limit}/${page}`)
        console.log("data.data.data", data.data.data);
        setMovieList(oldArray => [...oldArray, ...data.data.data]);
    }

    return (
        <>
            <div className=' bg-slate-900 pb-40'>
                <div className=''>
                    <h1 className='text-white font-bold py-10 text-center'>LIST ALL MOVIE</h1>
                    <hr />
                    <div className='grid grid-cols-12 gap-5 pt-[50px] md:px-[50px]'>
                        {movieList && movieList.map((res, index) => {
                            return (
                                <div className='col-span-2 h-[400px] w-[100%] rounded-[5px] bg-white box-shadow' key={index}>
                                    <div>
                                        <img src='/movie.jpg'></img>
                                        <h1 className='px-[10px] mt-2 font-semibold'>MOVIE NAME: {res.movie_name}</h1>
                                        <h1 className='px-[10px] mt-2 font-semibold'>RELEASED DATE: {res.released_date}</h1>
                                        <div className='flex px-[10px] mt-10'>
                                            {[...Array(Number(res.rating))].map((x, i) =>
                                                <AiFillStar className='text-yellow-500 h-7 w-7' />
                                            )}
                                          
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>

                    <div className='text-white text-center font-semibold py-2 px-3 mt-10 cursor-pointer' onClick={() => { setPage(page + 1) }}>
                        Load More...
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movie