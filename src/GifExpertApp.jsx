
import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";


export function GifExpertApp(){

    const [Categories, setCategories] = useState([ 'pet', 'ant', 'cat']);
    
       
    function OnAddCategory(InputValue) {
        if(Categories.includes(InputValue))return;

        console.log(InputValue)
        setCategories([InputValue, ...Categories])

    }



    return(
        <>
        
            <h1>GifExpertApp</h1>

            <AddCategory thing={OnAddCategory} />


            { 
                Categories.map(Categories => (
                   
                    <GifGrid Categories={Categories} key={Categories}/>
                ))
            }
                
            
        
        </>
    )
}

