function withLoading(WrappedComponent) {
    function Loading(props) {
        const { isLoading, ...restProps } = props;
        if (isLoading) {
            return <p>Loading</p>;
        }
        return <WrappedComponent {...restProps} />;
    }
    return Loading;
}
export default withLoading;
