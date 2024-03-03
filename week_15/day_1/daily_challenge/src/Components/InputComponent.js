const InputComponent = (props) => {
    return (
        <input type="number" value={props.value} onChange={props.onChange} />
    );
};

export default InputComponent;