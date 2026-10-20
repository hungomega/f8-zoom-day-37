import Header from "../../layouts/DefaultLayout/components/Header";
import { Routes, Route } from "react-router";
import Home from "../../layouts/pages/Home";
import Profile from "../../layouts/pages/Profile";
import ModalDemo from "../../layouts/pages/ModalDemo";
import ScrollDemo from "../../layouts/pages/ScrollDemo";
import PerformanceDemo from "../../layouts/pages/PerformanceDemo";
import FocusDemo from "../../layouts/pages/FocusDemo";
import HOCDemo from "../../layouts/pages/HOCDemo";
import RenderPropsDemo from "../../layouts/pages/RenderPropsDemo";
import CustomHooksDemo from "../../layouts/pages/CustomHooksDemo";
function AppRoutes() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Home />
                        </>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <>
                            <Header />
                            <Profile />
                        </>
                    }
                />
                <Route
                    path="/modal-demo"
                    element={
                        <>
                            <Header />
                            <ModalDemo />
                        </>
                    }
                />
                <Route
                    path="/scroll-demo"
                    element={
                        <>
                            <Header />
                            <ScrollDemo />
                        </>
                    }
                />
                <Route
                    path="/performance-demo"
                    element={
                        <>
                            <Header />
                            <PerformanceDemo />
                        </>
                    }
                />

                <Route
                    path="/focus-demo"
                    element={
                        <>
                            <Header />
                            <FocusDemo />
                        </>
                    }
                />
                <Route
                    path="/hoc-demo"
                    element={
                        <>
                            <Header />
                            <HOCDemo />
                        </>
                    }
                />
                <Route
                    path="/render-props-demo"
                    element={
                        <>
                            <Header />
                            <RenderPropsDemo />
                        </>
                    }
                />
                <Route
                    path="/custom-hooks-demo"
                    element={
                        <>
                            <Header />
                            <CustomHooksDemo />
                        </>
                    }
                />
            </Routes>{" "}
        </>
    );
}

export default AppRoutes;
