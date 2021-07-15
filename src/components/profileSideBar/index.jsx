import Box from "../box";
import ProfileSidebarMenuDefaulf from '../profileSidebarMenuDefaulf/index';

function ProfileSideBar(props) {

    
    return (
      <aside>
        <Box className="profileArea">
          <img alt="Profile Foto" style={{borderRadius: "8px"}} src={`https://github.com/${props.githubUser}.png`}/>   
          <hr /> 
          <p>
            <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
              @{props.githubUser}
            </a>
          </p>
          <hr /> 
          <ProfileSidebarMenuDefaulf />
        </Box>
      </aside>
    );
  }
  
  export default ProfileSideBar;