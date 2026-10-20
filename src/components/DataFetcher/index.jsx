import { useState, useEffect } from "react";

function DataFetcher({ url, children }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Lỗi khi tải dữ liệu"); // , xử lý lỗi và truyền dữ liệu qua children
                }
                return res.json();
            })
            .then((data) => {
                setData(data); //  lưu dữ liệu API trả về
                setLoading(false); // báo rằng đã tải xong dữ liệu
            })
            .catch((err) => {
                setError(err.message); // Lấy nội dung lỗi để lưu vào error
                setLoading(false); // dừng trạng thái loading vì đã xảy ra lỗi
            });
    }, [url]);

    return children({ data, loading, error });
}

export default DataFetcher;
