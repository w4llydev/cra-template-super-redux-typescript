import Styled from 'styled-components'

export const ImageFloat = Styled.img`
  height: 40vmin;
  pointer-events: none;


  @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-float infinite 3s ease-in-out;
  }

  @keyframes App-logo-float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px)
    }
    100% {
      transform: translateY(0px)
    }
  }
`
