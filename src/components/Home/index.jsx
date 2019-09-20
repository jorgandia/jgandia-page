import React, {useState, useEffect} from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import { GithubIcon, LinkedinIcon, MailIcon } from '../../icons';
import Flip from 'react-reveal/Flip';

import './style.scss';

const Home = () => {
    
    const wordtest = ['Hola, soy', "Hello, I'm", "Hallo, ich bin", "Ciao, sono", "Salut! Je suis", "Oi! Sou"];

    const [word, setWord] = useState(wordtest[0]);

    const handleWordChange = () => {
        setTimeout(() => {setWord(
            word => word = wordtest[Math.floor(Math.random()*wordtest.length)],
        )}, 5000);
        console.log(word);
        return (<Flip top>{word}</Flip>);
    }

    
    // useEffect(() =>{
    //     setTimeout(() => {setWord(
    //         word => word = wordtest[Math.floor(Math.random()*wordtest.length)],
    //     )}, 3000);
    // }, [word])
    
    return (
        <Container className="home-container">
                <Grid>
                    <Grid className="home-container__title">{handleWordChange()} Jordi Gandía</Grid>
                </Grid>
                <Grid className="home-container__subtitle">
                    <Typography variant="h5">web Developer</Typography>
                </Grid>
                <Grid className="home-container__icons-container">
                    <a target="blank" href="https://www.linkedin.com/in/jordi-gandia-cerda/"><LinkedinIcon className="home-container__icons-container--icon"/></a>
                    <a href="https://github.com/jorgandia?tab=repositories"><GithubIcon className="home-container__icons-container--icon" /></a>
                    <a href="mailto:jorgancer@gmail.com"><MailIcon className="home-container__icons-container--icon" /></a>
                </Grid>
        </Container>)
}

export default Home;