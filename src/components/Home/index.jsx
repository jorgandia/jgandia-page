import React, {Fragment, useState, useEffect} from 'react';
import { Container, Grid, Tooltip } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { GithubIcon, LinkedinIcon, MailIcon } from '../../icons';
import Flip from 'react-reveal/Flip';

import './style.scss';
import ParticlesComponent from '../ParticlesComponent';

const Home = () => {

   const words = ["Hola, soy", "Hola, sóc", "Hallo, ich bin", "Ciao, sono", "Salut! Je suis", "Oi! Sou", "Hello, I'm"];


   const [word, setWord] = useState(words[0]);

   const underlined = word === "Hello, I'm";
   const bigScreen = useMediaQuery('(min-width: 851px)');
   const mediumScreen = useMediaQuery('(min-width: 621px) and (max-width: 850px)')
   const smallScreen = useMediaQuery('(max-width: 620px)');

   const handleScreenSize = () => {
     if (mediumScreen){
            return "home-container__title medium-screen";
    } else if (smallScreen){
            return "home-container__title small-screen";
    } else if (bigScreen){
        return "home-container__title big-screen";
    }
   };

    useEffect (() =>{
        words.forEach((value, index)=>{
            setTimeout(()=>
            {setWord(value)}, index * 2000)
            });
        }, [])

    return (
        <Fragment>
            <Container className="home-container">
                    <Grid className={ underlined ? "definitive-underLine" : "underline"}>
                    <Grid className={handleScreenSize()}><Flip top key={word}>{word}</Flip> Jordi Gandía</Grid>
                    </Grid>
                    <Grid className="home-container__subtitle">
                        Web Developer
                    </Grid>
                    <Grid className="home-container__icons-container">
                    <Tooltip title="LinkedIn">
                        <a target="blank" href="https://www.linkedin.com/in/jordi-gandia-cerda/"><LinkedinIcon className="home-container__icons-container--icon"/></a>
                    </Tooltip>
                    <Tooltip title="GitHub">
                        <a href="https://github.com/jorgandia?tab=repositories"><GithubIcon className="home-container__icons-container--icon" /></a>
                    </Tooltip>
                    <Tooltip title="Let's talk!">
                        <a href="mailto:jorgancer@gmail.com"><MailIcon className="home-container__icons-container--icon" /></a>
                        </Tooltip>
                    </Grid>
            </Container>
            {bigScreen && <ParticlesComponent />}
        </Fragment>
    )
}

export default Home;