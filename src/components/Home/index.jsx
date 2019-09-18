import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import './style.scss';

const Home = () => {
    return (
        <Container className="home-container">
                <Grid>
                    <Typography className="home-container__title"  variant="h2">Jordi Gandía Cerdá</Typography>
                </Grid>
                <Grid className="home-container__subtitle">
                    <Typography variant="h5">web Developer</Typography>
                </Grid>
                <Grid className="home-container__icons">
                    <Typography variant="h5">Linkedin. GitHub. Mail</Typography>
                </Grid>
        </Container>)
}

export default Home;