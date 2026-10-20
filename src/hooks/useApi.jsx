import { useState, useEffect } from "react";
function useApi(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function fetchData() {
        setLoading(true);
        setError(null);
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Lỗi khi tải dữ liệu");
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }
    const refetch = () => fetchData();
    useEffect(() => {
        fetchData();
    }, [url]);
    return { data, loading, error, refetch };
}
export default useApi;
