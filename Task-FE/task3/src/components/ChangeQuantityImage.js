import { useState } from "react";
import "../assets/styles/changequantityimage.css";

const ChangeQuantityImage = ({ fetchData, resetData }) => {
    const [count, setCount] = useState(1);
    
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
            <button className="button-action button-load" onClick={() => fetchData(count)}>
                LOAD 🐶
            </button>
            <button className="button-action button-clear" onClick={resetData}>
                CLEAR
            </button>
        </div>
    );
};

export default ChangeQuantityImage;
