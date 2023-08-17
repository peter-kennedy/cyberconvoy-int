import { useState, useEffect } from 'react';
import Photo from './Photo';

const PhotoContainer = ({url, alt}) => {
    const [ photoData, setPhotoData ] = useState([]);

    useEffect(() => {
        fetchPhotos();
      }, [])

    const fetchPhotos = async () => {
        try {
            const data = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UPSPLASH_SECRET}`);
            const photoDataRes = await data.json(); 
            setPhotoData(photoDataRes);   
        } catch(err) {
            console.error(`Error fetching photos: ${err}`)
        }
      }
  
      return (
        <div>
            {photoData.map(photo => (
                <Photo 
                    key={photo.id} 
                    url={photo.urls.small} 
                    alt={photo.alt_description} 
                />
            ))}
        </div>
      );
}

export default PhotoContainer;