import styled from "styled-components"

interface ContainerProps {
    backgroundImage: string
}

export const Container = styled.div<ContainerProps>`
    
    background-image: url(${({backgroundImage}) => backgroundImage});
    background-position: 0 -50px;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    position: relative;
    
    .hero-content {
        position: relative;
        top: 2rem;
        width: 200px;
        background: white;
        padding: 2rem;
        text-align: left;
        margin: 0 auto;
    }

    .hero-content .subtitle {
        font-weight: bold;
        font-size: 1rem;
        margin: 0;
    }

    .hero-content .text {
        margin-bottom: 0;
        font-size: 0.9rem;
    }

    @media (min-width: 920px) {
    
        height: 400px;
        background-position: 0% 33%;

        .hero-content {
            position: absolute;
            top: 50px;
            right: 50px;
            width: 300px;
            margin: 2rem;
        }

        .hero-content .subtitle {
            font-size: 1.5rem;
        }

        .hero-content .text {
            font-size: 1.2rem;
        }

    }
`

