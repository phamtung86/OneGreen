import '../assets/styles/listimage.css'
import ImageItem from './ImageItem';
const ListImage = ({ data }) => {
    return (
        <div className="list-images">
            {data.map((image, index) => (
                <ImageItem key={index} item={image} index={index} />
            ))}
        </div>
    );
}
export default ListImage;