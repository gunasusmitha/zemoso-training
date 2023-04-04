import {FaGithub,FaGoogle} from 'react-icons/fa';
import React,{HTMLAttributes} from 'react';
import './Icon.css';

export interface Props extends HTMLAttributes<HTMLLIElement> {
    label:string,
    size:'small'|'medium'|'large',
    clr:'light'|'dark'
}

export const Icon = ({label,size,clr, ...props}:Props) => {
    return (
        <div >
            <ul>
                <li {...props} className={['icon', `${size}-icon`,`${clr}-icon`].join(' ')} >
                    <FaGithub>{label}</FaGithub>
                    <FaGoogle>{label}</FaGoogle>
                </li>
            </ul>
        </div>
    );
}