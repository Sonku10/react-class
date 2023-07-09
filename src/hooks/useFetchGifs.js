import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getgifs";


export function useFetchGifs(Categories){

    const [images, setimages] =useState([]);
    const [isLoading, setisLoading] =useState( true);

    const getImages = async() =>{
        const newImages = await getGifs (Categories);
        setimages(newImages)
        setisLoading(false)
    }

    useEffect(()=>{
        getImages();
    }, [] )

    return{
        images,
        isLoading
    }


}