import React, {useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';

const PhotoSection = styled.div`
    text-align: left;
    padding: 40px 150px;
`
const PhotoContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
const PhotoCard = styled.div`
    box-shadow: rgba(82, 82, 85, 0.2) 0px 7px 29px 0px;
    padding: 50px 30px;
`

const APODImage = styled.img`
    max-height: 80vh;
    object-fit: contain;
`

const APODVideo = styled.iframe`
    max-width: 80%;
    max-height: 80vh;
    object-fit: contain;
`

const PhotoTitle = styled.h1`
    font-size: 2em;
    margin-bottom: 10px;
    padding-top: 10px;
`

const PhotoExplanation = styled.p`
    font-size: 1em;
    line-height: 1.3;
`

const LoadingText = styled.div`
    text-align: center;
    font-size: 1.5em;
    margin-top: 50px;
`

const ReadMoreBtn = styled.button`
    background-color: ${pr => pr.theme.tertiaryColor};
    color: ${pr => pr.theme.white};
    padding: 8px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
`

const api_key = 'KqwvPCf2atIOnp8zbzLsrhhej4TfQtGgeEHUdgeA';

function NasaPhotoOfDay() {
    const [photoData, setPhotoData] = useState(null);
    const [isFullTextVisible, setIsFullTextVisible] = useState(false);

    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`);
                console.log("API Response", response);
                setPhotoData(response.data);
            } catch (error) {
                console.error("Error fetching NASA APD:", error);
            }
        };

        fetchPhoto();
    }, [api_key]);
    console.log("Current Photo Data:", photoData);

    if (!photoData) {
        return <LoadingText>Loading...</LoadingText>;
    }

    const toggleTextVisibility = () => {
        setIsFullTextVisible(!isFullTextVisible);
    };

    const shortDescription = photoData.explanation.substring(0, 200);

    return (
        <PhotoSection>
            <PhotoCard>
                <PhotoContainer>
                    {photoData.media_type === 'image' ? (
                        <APODImage src={photoData.url} alt={photoData.title} />
                    ) : (
                        <APODVideo
                        title="NASA APOD"
                        src={photoData.url}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        />
                    )}
                </PhotoContainer>
                <PhotoTitle>{photoData.title}</PhotoTitle>
                <PhotoExplanation>{isFullTextVisible ? photoData.explanation : shortDescription}
                    {photoData.explanation.length > shortDescription.length && (
                <ReadMoreBtn onClick={toggleTextVisibility}>
                {isFullTextVisible ? "Read Less" : "Read More"}
                </ReadMoreBtn>
                )}
                </PhotoExplanation>
            </PhotoCard>
        </PhotoSection>
    )
}

export default NasaPhotoOfDay;
