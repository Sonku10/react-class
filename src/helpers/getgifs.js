import { GifGrid } from "../Components/GifGrid";

export async function getGifs(Categories) {


    const url = `https://api.giphy.com/v1/gifs/search?api_key=hmdeg74MKb7Hcsilgr44bznkL8d1Y3jL&q=${Categories}&limit=5`;
    const resp = await fetch(url);
    const {data} =  await resp.json();

    console.log(url)


    const gifs = data.map( img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gifs)
    return gifs;
}

