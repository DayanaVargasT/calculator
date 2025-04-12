import { useState, useEffect } from "react"
import "./Home.css"

import { CalculatorCard } from "../../components/calculatorCard/CalculatorCard"

export const Home = () => {

    const [operation, setOperation] = useState("")
    const [result, setResult] = useState("")

    const handlingResult = () => {
        if (operation === "") {
            alert("Por favor, selecciona una operación")
            return
        }
        const value1 = parseFloat((document.getElementById("value1") as HTMLInputElement).value);
        const value2 = parseFloat((document.getElementById("value2") as HTMLInputElement).value);

        if (isNaN(value1) || isNaN(value2)) {
            alert("Por favor, ingresa valores numéricos válidos");
            return;
        } else {
            if (operation === "suma") {
                setResult(`${value1}${value2}`)
            } else if (operation === "resta") {
                setResult("Hola mundo :D")
            } else if (operation === "multiplicacion") {
                const rest = value1 + value2;
                setResult(`${rest}`)
            } else if (operation === "division") {
                setResult("Error capa 8")
            }
        }
    }

    const renderIcon = () => {
        switch (operation) {
            case "suma":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg>
                )
            case "resta":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                    </svg>
                )
            case "multiplicacion":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                )
            case "division":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-slash-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0" />
                    </svg>
                )
            default:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-question-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14" />
                    </svg>
                )
        }
    }

    return (
        <div className="Home">
            <CalculatorCard setOperation={setOperation} />
            <div className="cardResult">
                <h1 className="res">RESULTADO</h1>
            </div>
            <div className="oper">
                <div className="input">
                    <input type="text" id="value1" />
                </div>
                <div className="operB">
                    {renderIcon()}
                </div>
                <div className="input">
                    <input type="text" id="value2" />
                </div>
                <div className="operB" onClick={() => handlingResult()}>
                    <button><span>=</span></button>
                </div>
                <div className="input">
                    <input type="text" readOnly value={result}/>
                </div>
            </div>
        </div>
    )
}

export default Home;