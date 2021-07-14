import './main.css'

import Box from '../components/box'
import ProfileRelations from '../components/profileRelations';
import Grid from '../components/grid'
import Menu from '../components/menu';
import ProfileSideBar from '../components/profileSideBar';
import OrkutNostalgicIconSet from '../components/orkutNostalgicIconSet';


function Main() {
    let githubUser = 'lariodiniz';
    let pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunidev', 'felipefialho']
  return (
      <>
        <Menu githubUser={githubUser}/>
        <Grid>
            <div style={{gridArea: "profileArea"}}>
                    <ProfileSideBar githubUser={githubUser}/>
            </div>
            <div className="welcomeArea" style={{gridArea: "welcomeArea"}}>
                <Box>
                    <h1 className="title">
                    Bem Vindo(a)
                    </h1>
                    <OrkutNostalgicIconSet />
                </Box>
            </div>
            <div className="profileRelationsArea" style={{gridArea: "profileRelationsArea"}}>
                <ProfileRelations >
                    <h2 className="smallTitle">
                        Pessoas da Comunidade  ({pessoasFavoritas.length})
                    </h2>
                    
                    <ul>
                    {
                        pessoasFavoritas.map((pessoa) =>{
                            return (
                                <li>
                                <a href={`/users/${pessoa}`}  key={pessoa}>
                                    <img src={`https://github.com/${pessoa}.png`} />
                                    <span>{pessoa}</span>
                                </a>
                                </li>
                            )
                        })
                    }
                    </ul>

                </ProfileRelations>
            </div>
        </Grid>
      </>
  );
}

export default Main;
