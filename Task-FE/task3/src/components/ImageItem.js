import '../assets/styles/imageitem.css'
const ImageItem = ({item, index}) => {
    return (
        <div className="image-item">
           <img className="image-dog" key={index} src={item} alt={item} />
        </div>
    )
}
export default ImageItem;