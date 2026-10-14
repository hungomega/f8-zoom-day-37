import styles from "./Notification.module.scss";
import { useEffect, useState } from "react";

const notificationDatas = [
    {
        title: "THÔNG BÁO MỚI",
        items: [
            {
                id: 1,
                icon: "🎉",
                title: "Chào mừng bạn đến với F8",
                description:
                    "Chúc bạn học tập tốt và sớm trở thành Web Developer!",
                time: "5 phút trước",
            },
            {
                id: 2,
                icon: "📚",
                title: "Có bài học mới",
                description: "Bạn có bài học mới trong khóa học Fullstack Web.",
                time: "30 phút trước",
            },
            {
                id: 3,
                icon: "💬",
                title: "Bình luận mới",
                description: "Giảng viên vừa phản hồi bình luận của bạn.",
                time: "1 giờ trước",
            },
            {
                id: 4,
                icon: "🏆",
                title: "Chúc mừng bạn!",
                description: "Bạn đã hoàn thành một bài học.",
                time: "Hôm qua",
            },
        ],
    },
];

function MyCourse() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.logo}>
            <p onClick={() => setIsOpen(!isOpen)}>🔔</p>
            {isOpen && (
                <div className={styles.dropdown}>
                    {notificationDatas.map((notificationData) => (
                        <div
                            className={styles.section}
                            key={notificationData.title}
                        >
                            <h3 className={styles.sectionTitle}>
                                {notificationData.title}
                            </h3>

                            {notificationData.items.map((item) => (
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
