import styled from 'styled-components'

export const RadioWrapper = styled.label<{ checked: boolean | undefined }>`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  background-color: ${({ checked }) => (checked ? '#e6f7ff' : 'transparent')};
  transition: background-color 0.3s;
`

export const RadioInput = styled.input`
  margin-right: 5px;
`
