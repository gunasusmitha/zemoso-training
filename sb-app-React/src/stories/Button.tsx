import React, { HTMLAttributes, ReactNode } from 'react';

export interface IProps extends HTMLAttributes<HTMLButtonElement>{
  children:ReactNode;
  variant:'primary' | 'secondary';
}

export const Button = ({children,variant, ...props}: IProps) => {
  return (
    <button {...props} style={
      {backgroundColor:variant==='primary'?'blue':'gray',
      color:'white',
      border:'none',
      borderRadius:80,
      padding:8,
      cursor:'pointer'
      }
    }>
      {children}
    </button>
  );
}
