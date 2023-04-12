export const Button = ({ onClick, content, className }) => {
    return (
        <button onClick={onClick} className={className}> 
            {content} 
        </button>
    )
}

