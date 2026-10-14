import Header from "../../layouts/DefaultLayout/components/Header";
import { Routes, Route } from "react-router";
import Home from "../../layouts/pages/Home";
import Profile from "../../layouts/pages/Profile";
import ModalDemo from "../../layouts/pages/ModalDemo";
import ScrollDemo from "../../layouts/pages/ScrollDemo";
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
               
                {/* <Route path="/" element={<SearchForm />}></Route> */}
            </Routes>
        </>
    );
}

export default AppRoutes;
