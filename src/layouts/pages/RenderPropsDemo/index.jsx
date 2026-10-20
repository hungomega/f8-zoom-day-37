import styles from "./RenderPropsDemo.module.scss";
import DataFetcher from "@/components/DataFetcher";
function RenderPropsDemo() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Render Props Demo</h1>

            <div className={styles.content}>
                <div className={styles.card}>
                    <DataFetcher url="https://jsonplaceholder.typicode.com/posts?_limit=5">
                        {({ data, loading, error }) => {
                            if (loading)
                                return (
                                    <p className={styles.message}>
                                        Loading posts...
                                    </p>
                                );

                            if (error)
                                return (
                                    <p className={styles.error}>
                                        Error: {error}
                                    </p>
                                );

                            return (
                                <>
                                    <h3 className={styles.heading}>Posts</h3>

                                    {data?.map((post) => (
                                        <div
                                            className={styles.item}
                                            key={post.id}
                                        >
                                            {post.title}
                                        </div>
                                    ))}
                                </>
                            );
                        }}
                    </DataFetcher>
                </div>

                <div className={styles.card}>
                    <DataFetcher url="https://jsonplaceholder.typicode.com/users?_limit=5">
                        {({ data, loading, error }) => {
                            if (loading)
                                return (
                                    <p className={styles.message}>
                                        Loading users...
                                    </p>
                                );

                            if (error)
                                return (
                                    <p className={styles.error}>
                                        Error: {error}
                                    </p>
                                );

                            return (
                                <>
                                    <h3 className={styles.heading}>Users</h3>

                                    {data?.map((user) => (
                                        <div
                                            className={styles.item}
                                            key={user.id}
                                        >
                                            {user.name} - {user.email}
                                        </div>
                                    ))}
                                </>
                            );
                        }}
                    </DataFetcher>
                </div>
            </div>
        </div>
    );
}

export default RenderPropsDemo;
