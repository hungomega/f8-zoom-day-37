import styles from "./MyCourses.module.scss";
import { useEffect, useState } from "react";

const courseDatas = [
    {
        title: "KHÓA HỌC CỦA TÔI",
        items: [
            {
                icon: "📘",
                title: "Fullstack Web",
                description:
                    "Lộ trình phát triển website từ Frontend đến Backend",
            },
            {
                icon: "🎨",
                title: "Frontend Developer",
                description: "Học HTML, CSS, JavaScript và ReactJS",
            },
            {
                icon: "⚙️",
                title: "Backend Developer",
                description: "Học Node.js, Express và xây dựng API",
            },
        ],
    },
];

function MyCourse() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.logo}>
            <p onClick={() => setIsOpen(!isOpen)}>Khóa học của tôi</p>
            {isOpen && (
                <div className={styles.dropdown}>
                    {courseDatas.map((courseData) => (
                        <div className={styles.section} key={courseData.title}>
                            <h3 className={styles.sectionTitle}>
                                {courseData.title}
                            </h3>

                            {courseData.items.map((item) => (
                                <div className={styles.item} key={item.title}>
                                    <span className={styles.icon}>
                                        {item.icon}
                                    </span>

                                    <div className={styles.content}>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default MyCourse;
