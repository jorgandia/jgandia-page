import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import { GithubIcon, LinkedinIcon, MailIcon } from '../../icons';

import './style.scss';

const Home = () => {
    return (
        <Container className="home-container">
                <Grid>
                    <span className="home-container__title">Jordi Gandía Cerdá</span>
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