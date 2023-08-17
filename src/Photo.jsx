const Photo = ({url, alt}) => {
    return (
        <img className="image" src={url} alt={alt} />
    );
}

export default Photo;