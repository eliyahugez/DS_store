import { useState } from "react"

export default function UserInput() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    function handelChange(inputIdentifier, newValue) {

        setUserInput(prevArrayFromInput => {
            return {
                ...prevArrayFromInput,
                [inputIdentifier]: newValue
            }
        })


    }

    return <>
        <section id="user-input" >
            <div className="input-group">
                <p>
                    <label htmlFor="input">INITIAL INVESTMENT</label>
                    <input onChange={(e) => handelChange("initialInvestment", e.target.value)}
                        required
                        type="number"
                        value={userInput.initialInvestment}
                    />
                </p>
                <p>
                    <label htmlFor="input">ANNUAL INVESTMENT</label>
                    <input onChange={() => handelChange("annualInvestment", e.target.value)}
                        required
                        type="number"
                        value={userInput.annualInvestment}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="input">EXPECTED RETURN</label>
                    <input onChange={() => handelChange("expectedReturn", e.target.value)}
                        required
                        type="number"
                        value={userInput.expectedReturn}
                    />
                </p>
                <p>
                    <label htmlFor="input">DURATION</label>
                    <input onChange={() => handelChange("duration", e.target.value)}
                        required
                        type="number"
                        value={userInput.duration}
                    />

                </p>
            </div>
        </section>
    </>
}