import './profileRelations.css'

function ProfileRelations(props) {

    return (
      <div className={`box profileRealations ${props.class}`}>{props.children}</div>
    );
  }
  
  export default ProfileRelations;