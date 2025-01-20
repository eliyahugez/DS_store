import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"
import { useState } from "react"

function App() {

  const [userInputState, setUserInputState] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValid = userInputState.duration >= 1;

  const [initialInvestmentState, setInitialInvestmentState] = useState(userInputState.initialInvestment)


  function handelChange(inputIdentifier, newValue) {
    setUserInputState(prevArrayFromInput => {
      return {
        ...prevArrayFromInput,
        [inputIdentifier]: +newValue
      }
    })
  }

  return <>
    <Header />

    <UserInput
      initialInvestmentSet={setInitialInvestmentState}
      whileChange={handelChange} userInput={userInputState}
    />
    {!inputIsValid && <p className="center" >Please enter a valid number for Duration</p>}
    {inputIsValid &&
      <Result
        initialInvestmentState={initialInvestmentState}
        userInput4Result={userInputState}
      />
    }
  </>

}

export default App
