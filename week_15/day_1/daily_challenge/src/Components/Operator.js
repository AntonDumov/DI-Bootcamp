const Operator = (props) => {
  return <select onChange={props.onSelect}>{props.options.map(o => (<option key={o.value} value={o.value}>{o.name}</option>))}</select>
}

export default Operator