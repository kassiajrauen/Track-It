import axios from "axios";
import React, { useState } from 'react';
import { Container, StyledLink } from './styles';
import { useNavigate } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    function handleLogin(e) {
        setLoading(false);
        e.preventDefault();

        const promise = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", { email: email, password: password, }
        );

        setTimeout(() => {
            promise.then(() => {
                navigate("/hoje");
            });
        }, 3000);
        promise.catch((error) => {
            setLoading(true);
            alert(error.response.data.message);
        });
    }

    return (
        <Container>
            <img src="../../assets/big-logo.jpg" alt="" />
            <form onSubmit={handleLogin}>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Senha" />
                <button type="submit">{loading ? "Entrar" : <Loading />}</button>
            </form>
            <StyledLink to="/cadastro">
                <span>Não tem uma conta? Cadastre-se!</span>
            </StyledLink>
        </Container>
    );

    function Loading() {
        return (
            <Loader
                type="ThreeDots"
                color="#FFFFFF"
                height={50}
                width={50}
            />
        );
    }
}

export default LoginPage;