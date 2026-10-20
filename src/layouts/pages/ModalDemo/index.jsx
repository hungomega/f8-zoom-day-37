import { useState } from "react";
import Modal from "../../../components/Modal";
import styles from "./ModalDemo.module.scss";

const demos = [
    {
        id: "basic",
        title: "Basic Modal",
        description: "Modal đơn giản với nút mở và đóng.",
        content: "Đây là Modal cơ bản.",
    },
    {
        id: "animation",
        title: "Modal với Animation",
        description: "Kiểm tra hiệu ứng đóng sau 300ms.",
        content: "Modal có thời gian đóng 300ms.",
        closeTimeoutMS: 300,
    },
    {
        id: "overlay",
        title: "Không đóng khi click overlay",
        description: "Click vùng nền tối sẽ không đóng modal.",
        content: "Bạn phải nhấn nút Đóng để thoát.",
        shouldCloseOnOverlayClick: false,
    },
    {
        id: "esc",
        title: "Không đóng bằng Esc",
        description: "Nhấn Esc sẽ không làm modal đóng.",
        content: "Bạn hãy thử nhấn phím Esc.",
        shouldCloseOnEsc: false,
    },
    {
        id: "custom",
        title: "Custom className",
        description: "Truyền className riêng để tùy chỉnh style.",
        content: "Modal có giao diện tùy chỉnh.",
        className: "customModal",
        overlayClassName: "customOverlay",
    },
    {
        id: "callbacks",
        title: "Modal với Callbacks",
        description: "Kiểm tra onAfterOpen và onAfterClose trong Console.",
        content: "Mở Console để kiểm tra callback.",
        callbacks: true,
    },
];

function ModalDemo() {
    const [activeDemo, setActiveDemo] = useState(null);

    const handleClose = () => {
        setActiveDemo(null);
    };

    return (
        <div className={styles.page}>
            <h1 className={styles.heading}>Modal Demo</h1>

            <div className={styles.grid}>
                {demos.map((demo) => (
                    <div className={styles.card} key={demo.id}>
                        <h2>{demo.title}</h2>
                        <p>{demo.description}</p>

                        <button
                            className={styles.openButton}
                            onClick={() => setActiveDemo(demo)}
                        >
                            Mở Modal
                        </button>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={Boolean(activeDemo)}
                onRequestClose={handleClose}
                closeTimeoutMS={activeDemo?.closeTimeoutMS ?? 0}
                shouldCloseOnOverlayClick={
                    activeDemo?.shouldCloseOnOverlayClick ?? true
                }
                shouldCloseOnEsc={activeDemo?.shouldCloseOnEsc ?? true}
                className={
                    activeDemo?.className === "customModal"
                        ? styles.customModal
                        : ""
                }
                overlayClassName={
                    activeDemo?.overlayClassName === "customOverlay"
                        ? styles.customOverlay
                        : ""
                }
                // onAfterOpen={() => {
                //     if (activeDemo?.callbacks) {
                //         console.log("Modal đã mở");
                //     }
                // }}
                // onAfterClose={() => {
                //     if (activeDemo?.callbacks) {
                //         console.log("Modal đã đóng");
                //     }
                // }}
            >
                <h2>{activeDemo?.title}</h2>
                <p>{activeDemo?.content}</p>

                <button className={styles.openButton} onClick={handleClose}>
                    Đóng
                </button>
            </Modal>
        </div>
    );
}

export default ModalDemo;
