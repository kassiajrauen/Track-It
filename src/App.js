import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Today from "./components/Today";
import Habits from "./components/Habits";
import Historic from "./components/Historic";
import UserGlobal from "./global/UserGlobal"
import HabitsCheckGlobal from "./global/HabitsCheckGlobal";
import TokenGlobal from "./global/TokenGlobal";

function App() {
    const [token, setToken] = useState("");
    const [user, setUser] = useState("");
    const [habitsCheck, setHabitsCheck] = useState(0);

    return (
        <TokenGlobal.Provider value={{ token, setToken }}>
            <UserGlobal.Provider value={{ user, setUser }}>
                <HabitsCheckGlobal.Provider value={{ habitsCheck, setHabitsCheck }}>
                    <BrowserRouter>
                        <Routes>
                            <Route exact path="/" element={<LoginPage />} />
                            <Route path="/cadastro" element={<SignUpPage />} />
                            <Route path="/hoje" element={<Today />}></Route>
                            <Route path="/habitos" element={<Habits />}></Route>
                            <Route path="/historico" element={<Historic />}></Route>
                        </Routes>
                    </BrowserRouter>
                </HabitsCheckGlobal.Provider>
            </UserGlobal.Provider>
        </TokenGlobal.Provider>
    );
}

export default App;