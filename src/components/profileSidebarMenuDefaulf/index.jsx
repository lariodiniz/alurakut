import './profileSidebarMenuDefaulf.css'

const BASE_URL = 'http://alurakut.vercel.app/';

function ProfileSidebarMenuDefaulf(props) {

    return (
      <div className={`profileSidebarMenuDefaulf`}>
          <nav>
            <a href="/">
                <img src={`${BASE_URL}/icons/user.svg`} alt="user"/>
            Perfil
          </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/book.svg`}  alt="book"/>
            Recados
          </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/camera.svg`}  alt="camera"/>
            Fotos
          </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/sun.svg`}  alt="sun"/>
            Depoimentos
          </a>
      </nav>
      <hr />
      <nav>
        <a href="/">
          <img src={`${BASE_URL}/icons/plus.svg`}  alt="plus"/>
            GitHub Trends
          </a>
        <a href="/logout">
          <img src={`${BASE_URL}//icons/logout.svg`} alt="logout"/>
            Sair
          </a>
      </nav>
      </div>
    );
  }
  
  export default ProfileSidebarMenuDefaulf;