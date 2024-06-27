import styled from 'styled-components'

interface DividerProps {
  thickness?: string
  type?: string
  color?: string
  margin?: string
}

const Divider = styled.hr<DividerProps>`
  border: none;
  border-top: ${({ thickness = '0.5px', type = 'solid', color = '#bbb' }) =>
    `${thickness} ${type} ${color}`};
  margin: ${({ margin = '20px 0' }) => margin};
  width: 100%;
`

export default Divider
