import styles from "./SearchForm.module.scss";
import { useEffect, useState } from "react";

const searchDatas = [
    {
        icon: "📘",
        title: "KHOÁ HỌC",
        items: [
            {
                icon: "📘",
                title: "HTML & CSS",
                description: "Học xây dựng giao diện website",
            },
            {
                icon: "🟨",
                title: "JavaScript",
                description: "Học lập trình tương tác với website",
            },
            {
                icon: "⚛️",
                title: "ReactJS",
                description: "Xây dựng giao diện với React",
            },
        ],
    },
    {
        title: "BÀI VIẾT",
        items: [
            {
                icon: "📝",
                title: "Cách học lập trình hiệu quả",
                description: "Phương pháp học code nhanh và ghi nhớ lâu",
            },
            {
                icon: "🗺️",
                title: "Lộ trình IT cho người mới",
                description: "Định hướng học tập dành cho người mới bắt đầu",
            },
            {
                icon: "💰",
                title: "Cách thu nhập cao trong ngành IT",
                description: "Kỹ năng và kinh nghiệm phát triển sự nghiệp IT",
            },
        ],
    },
    {
        title: "VIDEO",
        items: [
            {
                icon: "🎬",
                title: "HTML Record",
                description: "Video hướng dẫn thực hành HTML cơ bản",
            },
            {
                icon: "▶️",
                title: "JavaScript Record",
                description: "Video học JavaScript qua các ví dụ thực tế",
            },
        ],
    },
];

function SearchForm() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className={styles.logo}>
                {/* <h1> SearchForm</h1> */}
                <input
                    type="text"
                    placeholder="Search..."
                    onFocus={() => setIsOpen(!isOpen)}
                />
                {isOpen && (
                    <div className={styles.dropdown}>
                        {searchDatas.map((searchData) => (
                            <div
                                className={styles.section}
                                key={searchData.title}
                            >
                                <h3 className={styles.sectionTitle}>
                                    {searchData.title}
                                </h3>

                                {searchData.items.map((item) => (
                                    <div
                                        className={styles.item}
                                        key={item.title}
                                    >
                                        <span className={styles.icon}>
                                            {item.icon}
                                        </span>

                                        <div className={styles.content}>
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}

                                <button
                                    className={styles.moreButton}
                                    type="button"
                                >
                                    Xem thêm →
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
export default SearchForm;
