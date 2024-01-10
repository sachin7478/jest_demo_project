const Heading = (props)=> {
  const name = props?.name ? props.name : "React";
  return(<>
  <h1>Learing Jest With {name}</h1>
  {props.handleFunction && props.handleFunction()}
  </>)
}
export default Heading;