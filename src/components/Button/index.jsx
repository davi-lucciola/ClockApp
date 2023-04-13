import './style.css'

export const Button = ({ id, className, onClick, content}) => {
    return (
        <button id={id} className={className} onClick={onClick}>
            {content}
        </button>
    )
}