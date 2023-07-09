import React, { useEffect, useState } from 'react'
import { getGifs} from '../helpers/getgifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export function GifGrid({ Categories }){

    const {images, isLoading } = useFetchGifs (Categories);



    // const [images, setimages] =useState([]);

    // const getImages = async() =>{
    //     const newImages = await getGifs (Categories);
    //     setimages(newImages)
    // }

    // useEffect(()=>{
    //     getImages();
    // }, [] )




    return(
        <>
            <h3>{Categories}</h3>

            {
                isLoading && (<h2>Loading...</h2>)
            }

            <div className='card-grid'>
                {images.map(image => (
                    <>
                        <div className='card'>
                            <img  src={image.url} alt={image.title}/>
                            <p>{image.title}</p> 
                        </div>
                    </>
                ))}
                
            </div>
        </>
    )
}