import '../assets/styles/imageitem.css';

const ImageItem = ({ item, index, onClick, isSelected }) => {
    return (
        <div 
            className={`image-item ${isSelected ? 'selected' : ''}`} 
            onClick={onClick}
        >
            <img src={item} className="image-dog" alt={`image-dog ${index}`} />
        </div>
    );
};

export default ImageItem;
