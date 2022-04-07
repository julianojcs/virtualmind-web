import { useEffect, useState } from 'react'
import * as Styled from './Styled'
import Checkbox from '../Checkbox'
import Radio from '../Radio'

const Choices = ({ question }) => {
  const { choices, order, type, answerIndexes } = question
  const [isChecked, setIsChecked] = useState(Array(choices.length).fill(0))

  useEffect(() => {
    setIsChecked(choices?.map((_, index) => !!answerIndexes.includes(index)))
  }, [answerIndexes, choices])

  return (
    <Styled.Wrapper>
      {choices?.map((choice, index) => {
        if (type === 'checkbox')
          return (
            <Checkbox
              key={index}
              choice={choice}
              order={order}
              index={index}
              checked={isChecked[index]}
            />
          )
        else if (type === 'radio')
          return (
            <Radio
              key={index}
              choice={choice}
              order={order}
              index={index}
              checked={isChecked[index]}
            />
          )
        else return null
      })}
    </Styled.Wrapper>
  )
}

export default Choices
