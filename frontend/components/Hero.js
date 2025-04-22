import React from "react";
import styled from 'styled-components';

const HeroSection = styled.section`
    text-align: left;
    padding: 40px 150px;
    background-color: ${pr => pr.theme.extraColor};
`

const HeroCard = styled.div`
    background-color: ${pr => pr.theme.extraColor};
    padding: 50px 30px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const Span = styled.span`
    font-weight: bold;
    color: ${pr => pr.theme.tertiaryColor}
`

const HeroSubtitle = styled.p`
    font-size: 1em;
    text-transform: uppercase;
`

const HeroTitle = styled.h1`
    font-size: 2.5em;
`

const HeroDescription = styled.p`
    font-size: 1em;
`

function Hero() {
    return (
        <HeroSection>
            <HeroCard>
                <HeroSubtitle><Span>Photography |  </Span>Photo of the day</HeroSubtitle>
                <HeroTitle>Witness our photo of the day</HeroTitle>
                <HeroDescription>Every day we feature an image chosen from thousands submitted to our photo community, Your Shot. Here are favorites from each day. </HeroDescription>
            </HeroCard>
        </HeroSection>
    )
}

export default Hero;
