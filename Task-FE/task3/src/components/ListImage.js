import '../assets/styles/listimage.css';
import ImageItem from './ImageItem';

const ListImage = ({ data, selectedImages, setSelectedImages }) => {
    const toggleSelect = (index) => {
        setSelectedImages(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <div className="list-images">
            {data.map((image, index) => (
                <ImageItem 
                    key={index} 
                    item={image} 
                    index={index} 
                    onClick={() => toggleSelect(index)} 
                    isSelected={selectedImages.includes(index)}
                />
            ))}
        </div>
    );
};

export default ListImage;
