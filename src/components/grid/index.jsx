import './grid.css'


function Grid(props) {
    return (
      <main className="mainGrid">{props.children}</main>
    );
  }
  
  export default Grid;