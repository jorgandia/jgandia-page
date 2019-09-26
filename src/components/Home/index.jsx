import React, {useState, useLayoutEffect} from 'react';
import { Container, Grid, Tooltip } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { GithubIcon, LinkedinIcon, MailIcon } from '../../icons';
import Flip from 'react-reveal/Flip';

import './style.scss';

const Home = () => {
    
   const wordtest = ["Hola, soy", "Hola, sóc", "Hallo, ich bin", "Ciao, sono", "Salut! Je suis", "Oi! Sou", "Hello, I'm"];


   const [word, setWord] = useState(wordtest[0]);

   const underlined = word==="Hello, I'm" ? true : false;
   const bigScreen = useMediaQuery('(min-width: 851px)');
   const mediumScreen = useMediaQuery('(min-width: 651px) and (max-width: 850px)')
   const smallScreen = useMediaQuery('(min-width: 600px) and (max-width: 650px)');
   const mobileScreen = useMediaQuery('(min-width: 599px)');

   const handleScreenSize = () => {
     if (mediumScreen){
            return "home-container__title medium-screen";
    } else if (smallScreen){
            return "home-container__title small-screen";
    } else if (bigScreen){
        return "home-container__title big-screen";
    } else if(mobileScreen){
        return "home-container__title mobile-screen";
    }
   };

    useLayoutEffect (() =>{
        wordtest.forEach((value, index)=>{
            setTimeout(()=>
            {setWord(value)}, index * 2000)
            });
        }, [])

    return (
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
        </Container>)
}

export default Home;