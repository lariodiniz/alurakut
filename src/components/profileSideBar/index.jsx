import Box from "../box";

function ProfileSideBar(props) {

    
    return (
      <Box className="profileArea">
        <img alt="Profile Foto" style={{borderRadius: "8px"}} src={`https://github.com/${props.githubUser}.png`}/>    
      </Box>
    );
  }
  
  export default ProfileSideBar;