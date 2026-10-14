import imgf8 from "../../../../assets/images/f8-logo.png";
import styles from "./AppLogo.module.scss";
import { Link } from "react-router";
function AppLogo() {
    return (
        <>
            <Link to="/" className={styles.logo}>
                <img src={imgf8} alt="F8 Logo" />
                <h1>Học lập trình để đi làm</h1>
            </Link>
        </>
    );
}
export default AppLogo;
