import styled from 'styled-components'

export const MenuItemStyle = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 30%;
  height: ${({ size }) => (size ? '380px' : '240px')};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    }

    & .content {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ imageUrl }) => `url(${imageUrl}) no-repeat center/cover`};
`

export const ContentContainer = styled.div`
  position: absolute;
  height: 90px;
  padding: 0 25px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: #fff;
  opacity: 0.7;
`
export const ContentTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  margin-top: 0;
  font-size: 22px;
  color: #4a4a4a;
`

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`
