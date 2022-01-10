import axios from "axios";
import React, { useState } from 'react';
import { Container, StyledLink } from './styles';
import { useNavigate } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');
    const [loading, setLoading] = useState('true');

    const navigate = useNavigate();

    function handleSignUp(e) {
        setLoading(false);
        e.preventDefault();

        const promise = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
            {
                email: email,
                name: name,
                image: picture,
                password: password,
            }
        );
        setTimeout(() => {
            promise.then(() => {
                navigate("/cadastro");
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
            <form onSubmit={handleSignUp}>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" required />
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Senha" required />
                <input type="name" onChange={(e) => setName(e.target.value)} value={name} placeholder="Nome" required />
                <input type="picture" onChange={(e) => setPicture(e.target.value)} value={picture} placeholder="Foto" required />
                <button type="submit">{loading ? "Cadastrar" : <Loading />}</button>
            </form>
            <StyledLink to="/">
                <span>Já tem uma conta? Faça login!</span>
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
                timeout={3000}
            />
        );
    }
}

export default SignUpPage;