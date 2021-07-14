import './box.css'

function Box(props) {

    return (
      <div className={`box ${props.class}`}>{props.children}</div>
    );
  }
  
  export default Box;