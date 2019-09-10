import React from 'react'
import styled from 'styled-components'

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #2f8e89;
`

class ErrorBoundary extends React.Component {

    constructor() {
        super()

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        console.log(error)
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png" />
                    <ErrorImageText>Houston, the page got lost in space... Something went wrong, try reloading the page or go to another page. :(</ErrorImageText>
                </ErrorImageOverlay>
                )
        }
        return this.props.children
    }

}

export default ErrorBoundary