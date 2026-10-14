import { Link } from "react-router";
import styles from "./Home.module.scss";

function Home() {
    return (
        <div className={styles.home}>
            <h1>Trang chủ</h1>

            <ul>
                <li>
                    <Link to="/profile">Profile - Upload Avatar</Link>
                </li>

                <li>
                    <Link to="/modal-demo">Modal Demo</Link>
                </li>

                <li>
                    <Link to="/scroll-demo">ScrollDemo Page</Link>
                </li>
                
            </ul>
        </div>
    );
}

export default Home;
