import { InputHTMLAttributes } from 'react';

interface CardProps extends InputHTMLAttributes<HTMLInputElement> {
}

export const Textbox: React.FC<CardProps> = ({type="text", ...rest}) => {
    return(
        <input {...rest} type={type} className="bg-gray-500 bg-opacity-10 w-full py-3 px-2 my-2"/>
    );
}