import React from 'react';
import Particles from "react-particles-js";
import { params } from './particleParams'

const ParticlesComponent = () => {
    return (
        <div
            style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
            }}
        >
            <Particles
            params={params}
            />
        </div>
    )
}

export default ParticlesComponent;