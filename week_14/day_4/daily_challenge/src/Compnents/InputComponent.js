const InputComponent = (props) => {
    const sendData = (e) => {
        props.parentCallback(e.target.value)
    }
    return <input placeholder={props.label} aria-label={props.label} type={props.type} onChange={sendData}/>
}

export default InputComponent