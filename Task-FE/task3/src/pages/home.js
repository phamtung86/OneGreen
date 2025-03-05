import { useState } from "react";
import ChangeQuantityImage from "../components/ChangeQuantityImage";
import ListImage from "../components/ListImage";
import Api from "../services/Api";

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async (quantity) => {
        try {
            setLoading(true);
            const response = await Api.getImagesByCount(quantity);

            if (response.status === "success") {
                setData((prevData) => [...prevData, ...response.message]); // Giữ dữ liệu cũ
            } else {
                console.error("Lỗi: API không trả về status success");
            }
        } catch (error) {
            console.error("Lỗi khi fetch dữ liệu:", error);
        } finally {
            setLoading(false);
        }
    };

    const resetData = () => {
        setData([]);
        setLoading(false);
    };

    return (
        <div>
            <ChangeQuantityImage fetchData={fetchData} resetData={resetData} />

            {loading ? <p>⏳ Đang tải hình ảnh...</p> : <ListImage data={data} />}
        </div>
    );
};

export default Home;
