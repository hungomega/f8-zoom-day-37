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
                <li>
                    <Link to="/performance-demo">Performance Page</Link>
                </li>
                <li>
                    <Link to="/focus-demo">Focus Page</Link>
                </li>
                <li>
                    <Link to="/hoc-demo">HOCDemo Page</Link>
                </li>

                <li>
                    <Link to="/render-props-demo">Render Props Page</Link>
                </li>
                 <li>
                    <Link to="/custom-hooks-demo">Custom Hooks Page</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;
