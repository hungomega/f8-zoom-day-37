import CustomInput from "@/components/CustomInput";
import { useState, useRef } from "react";
import styles from "./FocusDemo.module.scss";
function FocusDemo() {
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const customInputRef1 = useRef(null);
    const customInputRef2 = useRef(null);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Focus Demo</h1>

            <div className={styles.inputGroup}>
                <CustomInput
                    ref={customInputRef1}
                    placeholder="Tên của bạn"
                    label="Tài khoản"
                    value={inputValue1}
                    onChange={(e) => setInputValue1(e.target.value)}
                />
            </div>

            <div className={styles.inputGroup}>
                <CustomInput
                    ref={customInputRef2}
                    placeholder="Mật khẩu"
                    label="Mật khẩu"
                    value={inputValue2}
                    onChange={(e) => setInputValue2(e.target.value)}
                />
            </div>

            <div className={styles.buttons}>
                <button
                    className={styles.button}
                    onClick={() => customInputRef1.current.focus()}
                >
                    Focus 1
                </button>

                <button
                    className={styles.button}
                    onClick={() => customInputRef2.current.focus()}
                >
                    Focus 2
                </button>

                <button
                    className={styles.button}
                    onClick={() => customInputRef1.current.blur()}
                >
                    Blur
                </button>

                <button
                    className={styles.button}
                    onClick={() =>
                        alert(
                            `Tài khoản: ${customInputRef1.current.getValue()}\n` +
                                `Mật khẩu: ${customInputRef2.current.getValue()}`,
                        )
                    }
                >
                    Get Values
                </button>

                <button
                    className={styles.button}
                    onClick={() => {
                        setInputValue1("");
                        setInputValue2("");
                    }}
                >
                    Clear Both
                </button>
            </div>
        </div>
    );
}

export default FocusDemo;
