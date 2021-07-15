import './profileRelations.css'
//src={`https://github.com/${pessoa}.png`
function ProfileRelations(props) {

    let list = props.list ? props.list : [] ;
    let len = list.length;

    return (
      <div className={`box profileRealations ${props.class}`}>
          <h2 className="smallTitle">
            {props.title} ({len})
          </h2>
                    
          <ul>
          {
              list.slice(0,6).map((item) =>{
                  return (
                      <li key={item.key}>
                          <a href={item.url}  >
                              <img alt={item.title} src={item.image} />
                              <span>{item.title}</span>
                          </a>
                      </li>
                  )
              })
          }
          </ul>
        
      </div>
    );
  }
  
  export default ProfileRelations;