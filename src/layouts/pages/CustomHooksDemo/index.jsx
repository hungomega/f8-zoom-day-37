import useApi from "../../../hooks/useApi";
import useToggle from "../../../hooks/useToggle";
import styles from "./CustomHooksDemo.module.scss";

function CustomHooksDemo() {
    const [showPosts, togglePosts, setShowPosts] = useToggle(true);
    const [showUsers, toggleUsers, setShowUsers] = useToggle(true);
    const [isDark, toggleTheme] = useToggle(false);
    const {
        data: posts,
        loading: postsLoading,
        error: postsError,
        refetch: refetchPosts,
    } = useApi("https://jsonplaceholder.typicode.com/posts?_limit=5");

    const {
        data: users,
        loading: usersLoading,
        error: usersError,
        refetch: refetchUsers,
    } = useApi("https://jsonplaceholder.typicode.com/users?_limit=5");

    if (postsLoading) {
        return <div>Loading posts...</div>;
    }

    if (postsError) {
        return <div>Error: {postsError}</div>;
    }

    if (usersLoading) {
        return <div>Loading users...</div>;
    }

    if (usersError) {
        return <div>Error: {usersError}</div>;
    }

    return (
        <>
            <div
                className={styles.container}
                style={{
                    backgroundColor: isDark ? "#222" : "#f4f6f9",
                    color: isDark ? "#fff" : "#222",
                }}
            >
                <h1 className={styles.title}>Custom Hooks Demo</h1>{" "}
                <button
                    className={`${styles.button} ${styles.themeButton}`}
                    onClick={toggleTheme}
                >
                    {isDark ? "Giao diện sáng" : "Giao diện tối"}
                </button>
                <div className={styles.section}>
                    <h2>Posts</h2>

                    <button className={styles.button} onClick={refetchPosts}>
                        Refetch Posts
                    </button>

                    {showPosts &&
                        posts?.map((item) => (
                            <div className={styles.item} key={item.id}>
                                {item.title}
                            </div>
                        ))}

                    <button className={styles.button} onClick={togglePosts}>
                        {showPosts ? "Ẩn Posts" : "Hiện Posts"}
                    </button>

                    <button
                        className={styles.button}
                        onClick={() => setShowPosts(true)}
                    >
                        Force Show
                    </button>
                </div>
                <br />
                <br />
                <div className={styles.section}>
                    <h2>Users</h2>

                    <button className={styles.button} onClick={refetchUsers}>
                        Refetch Users
                    </button>

                    {showUsers &&
                        users?.map((item) => (
                            <div className={styles.item} key={item.id}>
                                {item.name}
                            </div>
                        ))}

                    <button className={styles.button} onClick={toggleUsers}>
                        {showUsers ? "Ẩn Users" : "Hiện Users"}
                    </button>

                    <button
                        className={styles.button}
                        onClick={() => setShowUsers(true)}
                    >
                        Force Show
                    </button>
                </div>
            </div>
        </>
    );
}

export default CustomHooksDemo;
