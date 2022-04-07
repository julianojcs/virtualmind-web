import * as Styled from './Styled'
import Choices from '../Choices'

const Question = ({ question }) => {
  const orderedQuestion = `${question.order} - ${question.question}`

  return (
    <>
      <Styled.Wrapper>
        <Styled.Question>{orderedQuestion}</Styled.Question>
        <Choices question={question} />
        {question?.textQuestion && (
          <Styled.TextQuestion>{question?.textQuestion}</Styled.TextQuestion>
        )}
        {question?.textAnswer && (
          <Styled.TextAnswer>{question?.textAnswer}</Styled.TextAnswer>
        )}
      </Styled.Wrapper>
    </>
  )
}

export default Question
