import styles from "./Usermenu.module.scss";
import { useState } from "react";

const userMenuDatas = [
    {
        title: "Trang Cá Nhân",
    },
    {
        title: "Cài đặt",
    },
    {
        title: "Đăng xuất",
    },
];

function Usermenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.logo}>
            <button onClick={() => setIsOpen(!isOpen)}>
                <img
                    className={styles.imgUserName}
                    src="https://avatars.githubusercontent.com/u/171345927?v=4"
                    alt=""
                />
            </button>

            {isOpen && (
                <div className={styles.dropdow}>
                    <div className={styles.userInfo}>
                        <div className={styles.userInfo2}>
                            <img
                                className={styles.imgUserName}
                                src="https://avatars.githubusercontent.com/u/171345927?v=4"
                                alt=""
                            />
                            <div>
                                <h3>Nguyễn Hữu Hùng</h3>
                                <p>nguyenhuuuhung2005hn@gmaiil.com</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.menuList}>
                        {userMenuDatas.map((userMenuData,index) => (
                            <div key={index}>{userMenuData.title}</div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
export default Usermenu;
