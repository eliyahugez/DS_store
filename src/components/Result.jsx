import { calculateInvestmentResults, formatter } from "../util/investment";


export default function Result({ userInput4Result, initialInvestmentState }) {
    const dateAfterCalculate = calculateInvestmentResults(userInput4Result);

    const initialInvestment =
        dateAfterCalculate[0].valueEndOfYear -
        dateAfterCalculate[0].interest -
        dateAfterCalculate[0].annualInvestment;

    return <div id="result" className="center">
        <thead >
            <tr>
                <th>Year</th>
                <th>initialInvestment</th>
                <th>Investment Value</th>
                <th>Interest (Year) </th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {dateAfterCalculate.map((oneYearFromData) => {

                const totalInterest =
                    oneYearFromData.valueEndOfYear -
                    oneYearFromData.annualInvestment *
                    oneYearFromData.year - initialInvestment;
                const totalAmountInInterest = oneYearFromData.valueEndOfYear - totalInterest;
                return (<tr key={oneYearFromData.year} >
                    <td>{oneYearFromData.year}</td>
                    <td>{formatter.format(initialInvestmentState)}</td>
                    <td>{formatter.format(oneYearFromData.valueEndOfYear)}</td>
                    <td>{formatter.format(oneYearFromData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInInterest)}</td>
                </tr>
                )
            })}
        </tbody>
    </div>

}