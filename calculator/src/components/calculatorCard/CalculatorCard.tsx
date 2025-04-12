import "./CalculatorCard.css"

export const CalculatorCard = ({setOperation }) => {

    const handleClick = (operation: string) => {
        setOperation(operation);
    }

    return (
        <div className="container">
            <h1 className="">SELECCIONE UNA <span className="title2">OPERACIÓN</span></h1>
           <div className="cajaBotones">
           <div className="grupoB"> 
                <button className="button" onClick={() => handleClick("suma")}>
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                        </svg>
                    </div>
                    SUMA
                </button>
                <button className="button" onClick={() => handleClick("resta")}>
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg>
                    </div>
                    RESTA
                </button>
            </div>
            <div className="grupoB">
                <button className="button" onClick={() => handleClick("multiplicacion")}>
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                    MULTIPLICACIÓN
                </button>
                <button className="button" onClick={() => handleClick("division")}>
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-slash-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0" />
                        </svg>
                    </div>
                    DIVISIÓN
                </button>
            </div>
           </div>
           
        </div>
    )

}

export default CalculatorCard;