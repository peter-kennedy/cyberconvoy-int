import { useState, useEffect } from 'react';
import Photo from './Photo';
import ErrorBoundary from './ErrorBoundary';

interface PhotoData {
    id: string;
    urls: {
        small: string;
    };
    alt_description: string;
} 

const PhotoContainer = () => {
    const [ photoData, setPhotoData ] = useState<PhotoData[]>([]);

    useEffect(() => {
        fetchPhotos();
      }, [])

    const fetchPhotos = async (): Promise<void> => {
        try {
            const response = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UPSPLASH_SECRET}`);
            const photos: PhotoData[] = await response.json(); 
            setPhotoData(photos);   
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

function PhotoContainerErrorBoundary() {
    return (
      <ErrorBoundary>
        <PhotoContainer />
      </ErrorBoundary>
    );
  }

export default PhotoContainerErrorBoundary;