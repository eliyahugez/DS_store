
export default function UserInput({ whileChange, userInput, initialInvestmentSet }) {
    // console.log(whileChange("initialInvestment", userInput.initialInvestment));


    return <>
        <section id="user-input" >
            <div className="input-group">
                <p>
                    <label htmlFor="input">INITIAL INVESTMENT</label>

                    <input
                        required
                        type="number"
                        value={userInput.initialInvestment}
                        onChange={(e) => {
                            whileChange("initialInvestment", e.target.value);
                            initialInvestmentSet(e.target.value);
                        }}
                    />
                </p>
                <p>
                    <label htmlFor="input">ANNUAL INVESTMENT</label>
                    <input
                        required
                        type="number"
                        value={userInput.annualInvestment}
                        onChange={(e) => whileChange("annualInvestment", e.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="input">EXPECTED RETURN</label>
                    <input
                        required
                        type="number"
                        value={userInput.expectedReturn}
                        onChange={(e) => whileChange("expectedReturn", e.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="input">DURATION</label>
                    <input
                        required
                        type="number"
                        value={userInput.duration}
                        onChange={(e) => whileChange("duration", e.target.value)}
                    />

                </p>
            </div>
        </section>
    </>
}