import React, {useState, useEffect } from "react";
import axios from "axios";
import '../styles/photosection.css'

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
        return <div className="loading">Loading...</div>;
    }

    const toggleTextVisibility = () => {
        setIsFullTextVisible(!isFullTextVisible);
    };

    const shortDescription = photoData.explanation.substring(0, 200);

    return (
        <div className="nasa-photo-of-day">
            <div className="photo-container">
                {photoData.media_type === 'image' ? (
                    <img src={photoData.url} alt={photoData.title} className="apod-image" />
                ) : (
                    <iframe
                    title="NASA APOD"
                    src={photoData.url}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="apod-video"
                    />
                )}
            </div>
            <h2 className="photo-title">{photoData.title}</h2>
            <p className="photo-explanation">{isFullTextVisible ? photoData.explanation : shortDescription}
        {photoData.explanation.length > shortDescription.length && (
          <button className="read-more-button" onClick={toggleTextVisibility}>
            {isFullTextVisible ? "Read Less" : "Read More"}
          </button>
        )}</p>
        </div>
    )
}

export default NasaPhotoOfDay;
