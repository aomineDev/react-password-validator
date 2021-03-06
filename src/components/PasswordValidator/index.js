import { useState } from 'react'

import Fill from '../Fill'

import { Wrapper, Message, Input, Button, Spin, Icon } from './styles'

const ANIMATION_TIME = 350
const SPIN_TIME = 520
const WAIT_TIME = 2000 + SPIN_TIME
const FINISH_TIME = WAIT_TIME + ANIMATION_TIME

function App () {
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const isValid = password === 'pass'

  function handleChange (e) {
    setPassword(e.target.value)
  }

  function handleClick () {
    setIsLoading(true)

    setTimeout(() => {
      setIsComplete(true)
    }, SPIN_TIME)

    setTimeout(() => {
      setPassword('')
      setIsComplete(false)
    }, WAIT_TIME)

    setTimeout(() => {
      setIsLoading(false)
    }, FINISH_TIME)
  }

  return (
    <Wrapper>
      <Message isComplete={isComplete}>
        {
          !isComplete
            ? ""
            : isValid
            ? "Welcome!"
            : "try Again!"
        }
      </Message>
      <Input
        type="password"
        placeholder="Password"
        onChange={handleChange}
        value={password}
      />
      <Button onClick={handleClick}>
        <Fill isComplete={isComplete} isValid={isValid} />
        { isLoading || isComplete ? (
            <Spin>
              <Icon>x</Icon>
            </Spin>
          ): null }
        {!isLoading && <Icon>→</Icon>}
      </Button>
    </Wrapper>
  )
}

export default App
