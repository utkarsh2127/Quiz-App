import Logo from "../assets/quiz-logo.png";


export default function Header() {
    return (
        <header>
            <img src={Logo} alt="Quiz Logo" />
            <h1> Quiz </h1>
        </header>
        
    );
}