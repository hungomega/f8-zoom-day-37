import { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import anhmacdinh from "../../../assets/images/anhmacdinh.jpg";
function Profile() {
    const [previewURL, setPreviewURL] = useState(null);

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(previewURL);
        };
    }, [previewURL]);
    const handleChange = (e) => {
        const img = e.target.files[0];
        const previewURL = URL.createObjectURL(img);

        setPreviewURL(previewURL);
    };

    return (
        <div className={styles.overview}>
            <h2>Profile</h2>
            <label className={styles.uploadLabel}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className={styles.fileInput}
                />

                <img
                    src={previewURL || anhmacdinh}
                    className={styles.defaultImg}
                    alt="Ảnh đại diện"
                />
            </label>
            <p>Đổi ảnh</p>
        </div>
    );
}

export default Profile;
