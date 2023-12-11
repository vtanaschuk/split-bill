const Button = ({onBtnCkick, children}) => {
    return(<button onClick={onBtnCkick} className="button">{children}</button>)
}

export default Button;