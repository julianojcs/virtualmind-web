import * as Styled from './Styled'

const Radio = ({ choice, order, index, checked }) => {
  return (
    <Styled.Wrapper>
      <input
        id={`radio${order}${index}`}
        name={`radio${order}`}
        type='radio'
        checked={checked}
        onChange={() => {}}
      />
      <Styled.Label htmlFor={`radio${order}${index}`}>{choice}</Styled.Label>
    </Styled.Wrapper>
  )
}

export default Radio
