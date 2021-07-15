import { useState } from 'react'

import './main.css'

import Box from '../components/box'
import ProfileRelations from '../components/profileRelations';
import Grid from '../components/grid'
import Menu from '../components/menu';
import ProfileSideBar from '../components/profileSideBar';
import OrkutNostalgicIconSet from '../components/orkutNostalgicIconSet';
import ComunidadeForm from './../components/comunidadeForm';

import background from '../imgs/background.jpg'



function Main() {
    let githubUser = 'lariodiniz';
    let pessoas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev', 'felipefialho'];
    let pessoasFavoritas = pessoas.map((pessoa)=> { return {key: pessoa, title:pessoa, image:`https://github.com/${pessoa}.png`, url:`/users/${pessoa}`}})
    let [comunidades, setComunidades] = useState([{key: '1', title:'Eu odeio acordar cedo', image:`https://alurakut.vercel.app/capa-comunidade-01.jpg`, url:`https://alurakut.vercel.app/`}]);

  return (
      <div className="site" style={{ backgroundImage: `url(${background})` }}>
        <Menu githubUser={githubUser}/>
        <Grid >
            <div className="profileArea" style={{gridArea: "profileArea"}}>
                    <ProfileSideBar githubUser={githubUser}/>
            </div>
            <div className="welcomeArea" style={{gridArea: "welcomeArea"}}>
                <Box>
                    <h1 className="title">
                    Bem Vindo(a)
                    </h1>
                    <OrkutNostalgicIconSet />
                </Box>
                <Box>
                    <h2 className="boxSubTitle">O que você deseja fazer?</h2>
                    <ComunidadeForm comunidades={comunidades} setComunidades={setComunidades}/>
                </Box>
            </div>
            <div className="profileRelationsArea" style={{gridArea: "profileRelationsArea"}}>
                <ProfileRelations title="Comunidades" list={comunidades} />
                <ProfileRelations  title="Pessoas da Comunidade" list={pessoasFavoritas} />
                
            </div>
        </Grid>
      </div>
  );
}

export default Main;
