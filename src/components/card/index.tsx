interface CardProps {
    title?: String
}

export const Card: React.FC<CardProps> = ({title, children}) => {
    return(
        <div className="container mx-auto h-screen">
            <div className="flex justify-center justify-items-center items-center h-full">
                <div className="rounded-md shadow-md w-80">
                    <div className="bg-blue-400 text-white p-5 rounded-t-md">
                        <p>{title}</p>
                    </div>
                    <div className="p-5">
                        {children}  
                    </div>
                </div>
            </div>
        </div>
    );
}