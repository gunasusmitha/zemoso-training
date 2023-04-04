import React, {HTMLAttributes} from 'react';

interface TProp extends HTMLAttributes<HTMLParagraphElement> {
    text:string,
    size:'small'|'large',
    color?:'light'

}

export const Text =({text,size,color, ...props}:TProp)=>{
    return(
        <p {...props} style={
            {fontSize:size==='small'?'15px':'25px',
            color:color==='light'?'gray':'black',
            margin:color=='light'?'0px':'default'
        }  
             
        }>
        {text}
        </p>
    );
}