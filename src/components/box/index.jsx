import './box.css'

function Box(props) {

  let othersClass = props.class? props.class : '';

    return (
      <div className={`box ${othersClass}`}>{props.children}</div>
    );
  }
  
  export default Box;