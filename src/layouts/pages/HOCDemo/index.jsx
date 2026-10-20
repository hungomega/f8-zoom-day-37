import UserProfile from "@/components/UserProfile";
import ProductList from "@/components/ProductList";
import styles from "./HOCDemo.module.scss";
import { useState } from "react";
function HOCDemo()  {
    const [userLoading, setUserLoading] = useState(false);
    const [productLoading, setProductLoading] = useState(false);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>HOC Demo</h2>

            <div className={styles.section}>
                <UserProfile isLoading={userLoading} />

                <button
                    className={styles.button}
                    onClick={() => setUserLoading(!userLoading)}
                >
                    Toggle User Loading
                </button>
            </div>

            <div className={styles.section}>
                <ProductList isLoading={productLoading} />

                <button
                    className={styles.button}
                    onClick={() => setProductLoading(!productLoading)}
                >
                    Toggle Product Loading
                </button>
            </div>
        </div>
    );
}
export default HOCDemo;
