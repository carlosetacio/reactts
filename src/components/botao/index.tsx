function Botao({children, click}) {
    return (
        <button onClick={click}>{children}</button>
    )
}

export default Botao