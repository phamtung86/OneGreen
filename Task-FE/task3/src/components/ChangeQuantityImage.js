import { useState } from "react";
import "../assets/styles/changequantityimage.css";
import Api from "../services/Api";

const ChangeQuantityImage = ({ fetchData, data, setData, selectedImages, setSelectedImages }) => {
    const [count, setCount] = useState(1);

    const getNewImages = async (count) => {
        try {
            const response = await Api.getImagesByCount(count);
            return response.status === "success" ? response.message : [];
        } catch (error) {
            console.error("Lỗi khi lấy hình ảnh mới:", error);
            return [];
        }
    };

    const handleLoad = async () => {
        if (selectedImages.length === 0) {
            fetchData(count); 
        } else {
            const newImages = await getNewImages(selectedImages.length);
            setData(data.map((image, index) => selectedImages.includes(index) ? newImages.pop() : image));
            setSelectedImages([]);
        }
    };

    const handleClear = () => {
        if (selectedImages.length === 0) {
            setData([]); 
        } else {
            setData(data.filter((_, index) => selectedImages.includes(index))); 
        }
        setSelectedImages([]); 
    };

    return (
        <div className="change-quantity">
            <div className="change-quantity-form">
                <label htmlFor="quantity" className="quantity-label">Amount*</label>
                <input 
                    type="number" 
                    id="quantity" 
                    name="quantity" 
                    value={count} 
                    onChange={(e) => setCount(Number(e.target.value))} 
                    min="1"
                />
            </div>
            <button className="button-action button-load" onClick={handleLoad}>
                LOAD 🐶
            </button>
            <button className="button-action button-clear" onClick={handleClear}>
                CLEAR ❌
            </button>
        </div>
    );
};

export default ChangeQuantityImage;
