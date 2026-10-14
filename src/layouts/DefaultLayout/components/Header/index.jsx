import styles from "./Header.module.scss";
import SearchForm from "../SearchForm";
import AppLogo from "../AppLogo";
import MyCourses from "../MyCourses";
import Notification from "../Notification";
import Usermenu from "../Usermenu";
function Header() {
    return (
        <header className={styles.header}>
            <AppLogo />

            <div className={styles.search}>
                <SearchForm />
            </div>

            <div className={styles.courses}>
                <MyCourses />
            </div>
            <div className={styles.Notification}>
                <Notification />
            </div>
            <div className={styles.Usermenu}>
                <Usermenu />
            </div>
        </header>
    );
}

export default Header;
