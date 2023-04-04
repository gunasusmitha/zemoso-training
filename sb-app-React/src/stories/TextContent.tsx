import React, { HTMLAttributes, ReactNode } from 'react';
 
export interface TProps extends HTMLAttributes<HTMLParagraphElement>{
    children:ReactNode,
    size:'small'|'large',
    clr:'light'|'dark'
}

export const TextContent =({children,size,clr, ...props}:TProps)=>{
    return(
        <p {...props} style={
            {fontSize:size==='small'?'20px':'50px',
             color:clr==='light'?'GrayText':'red'   
        }   
        }>
        {children}
        </p>
    );
}
