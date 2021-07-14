import React from 'react';

import './menu.css'

const BASE_URL = 'http://alurakut.vercel.app/';
const v = '1';

function Menu(props) {

    let githubUser = props.githubUser;

    const [isMenuOpen, setMenuState] = React.useState(false);

  return (
    <header className={`menuHeader`}>
      <div className="menuContainer">
        <img className="menuLogo" src={`${BASE_URL}/logo.svg`} alt="logo"/>  
        <nav style={{ flex: 1 }}>
          {[{ name: 'Inicio', slug: '/'}, {name: 'Amigos', slug: '/amigos'}, {name: 'Comunidades', slug: '/comunidades'}].map((menuItem) => (
            <a key={`key__${menuItem.name.toLocaleLowerCase()}`} href={`${menuItem.slug.toLocaleLowerCase()}`}>
              {menuItem.name}
            </a>
          ))}
        </nav>
        <nav>
          <a href={`/logout`}>
            Sair
          </a>
          <div>
            <input placeholder="Pesquisar no Orkut" />
          </div>
        </nav>
        <button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && <img src={`${BASE_URL}/icons/menu-open.svg?v=${v}`} alt="abrir menu"/>}
          {!isMenuOpen && <img src={`${BASE_URL}/icons/menu-closed.svg?v=${v}`} alt="fechar menu"/>}
        </button>
        
        <div className={`menuProfileSidebar ${isMenuOpen?'':'menuProfileSidebarClose'}`}>
          <div>
            <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px' }} alt="foto user"/>
          <hr />
          <p>
          <a className="menuBoxLink" href={`/user/${githubUser}`}>
            @{githubUser}
          </a>
        </p>
        <hr />

        <div className="menuDefault">
        <nav>
        <a href="/">
          <img src={`${BASE_URL}/icons/user.svg`} alt="perfil"/>
            Perfil
          </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/book.svg`} alt="recados" />
            Recados
          </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/camera.svg`} alt="Fotos"/>
            Fotos
          </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/sun.svg`} alt="Depoimentos" />
            Depoimentos
          </a>
      </nav>
      <hr />
      <nav>
        <a href="/">
          <img src={`${BASE_URL}/icons/plus.svg`} alt="GitHub Trends"/>
            GitHub Trends
          </a>
        <a href="/logout">
          <img src={`${BASE_URL}//icons/logout.svg`} alt="Sair"/>
            Sair
          </a>
      </nav>
      </div>
      </div>
    </div>
      </div>
    </header>
  );
}

export default Menu;