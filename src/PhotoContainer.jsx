import { useState, useEffect } from 'react';
import Photo from './Photo';

const PhotoContainer = ({url, alt}) => {
    const [ urls, setUrls ] = useState([]);

    useEffect(() => {
        fetchPhotos();
      }, [])

    const fetchPhotos = async () => {
        try {
         const data = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UPSPLASH_SECRET}`);
        const photos = await data.json(); 
        console.log(photos)
        setUrls(photos);   
        } catch(err) {
            console.error(`Error fetching photos: ${err}`)
        }
      }
  
      return (
        <div>
            {urls.map(photo => (
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