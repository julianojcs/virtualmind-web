import * as Styled from './Styled'

const Checkbox = ({ choice, order, index, checked }) => {
  return (
    <Styled.Wrapper>
      <input
        id={`checkbox${order}${index}`}
        type='checkbox'
        checked={checked}
        onChange={() => {}}
      />
      <Styled.Label htmlFor={`checkbox${order}${index}`}>{choice}</Styled.Label>
    </Styled.Wrapper>
  )
}

export default Checkbox
