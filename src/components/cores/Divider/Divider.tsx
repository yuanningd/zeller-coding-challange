import styled from 'styled-components';

interface DividerProps {
  color?: string;
  thickness?: string;
  margin?: string;
  type?: 'solid' | 'dotted' | 'dashed';
}

const Divider = styled.hr<DividerProps>`
  border: none;
  border-top: ${props => props.thickness || '0.5px'} ${props => props.type || 'solid'} ${props => props.color || '#bbb'};
  margin: ${props => props.margin || '20px 0'};
  width: 100%;
`;

export default Divider;
