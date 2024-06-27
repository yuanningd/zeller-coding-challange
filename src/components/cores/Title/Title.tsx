import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface TitleProps {
  color?: string
  align?: 'left' | 'center' | 'right'
  tag: 'h1' | 'h2' | 'h3'
  children: ReactNode
}

const BaseTitle = styled.span<Omit<TitleProps, 'tag'>>`
  margin: 0.5em 0;
  padding: 0;
  color: ${(props) => props.color || 'black'};
  text-align: ${(props) => props.align || 'left'};
`

const StyledComponents = {
  h1: styled(BaseTitle).attrs({ as: 'h1' })`
    font-size: 2.5em;
    font-weight: bold;
  `,
  h2: styled(BaseTitle).attrs({ as: 'h2' })`
    font-size: 2em;
    font-weight: normal;
  `,
  h3: styled(BaseTitle).attrs({ as: 'h3' })`
    font-size: 1.5em;
    font-weight: lighter;
  `,
}

const Title = ({ tag, children, ...props }: TitleProps) => {
  const Component = StyledComponents[tag] || StyledComponents['h1']
  return <Component {...props}>{children}</Component>
}

export default Title
