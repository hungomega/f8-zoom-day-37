import { useEffect, useState } from "react";
import styles from "./GoToTop.module.scss";
function GoToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 300) {
                // window.scrollY: số pixel đã cuộn xuống.
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button className={styles.goToTop} onClick={handleClick}>
                    ↑
                </button>
            )}
        </>
    );
}

export default GoToTop;