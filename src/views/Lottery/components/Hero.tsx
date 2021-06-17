import React from 'react'
import styled from 'styled-components'
import { Heading, Text, Image } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Container from 'components/layout/Container'
import LotteryProgress from './LotteryProgress'

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: #ffffff;
`

const Blurb = styled(Text)`
  color: #c8efff;
  font-size: 20px;
  font-weight: 600;
`

const StyledHero = styled.div`
  background: ${({ theme }) => (theme.isDark ? '#07060c' : '#20c0ff')};
  padding-bottom: 36px;
  padding-top: 36px;
`

const StyledContainer = styled(Container)`
  display: flex;

  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`

const LeftWrapper = styled.div`
  flex: 1;
  padding-right: 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-right: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-right: 32px;
  }
`

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-left: 0;
  margin-top: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 0;
    padding-left: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 32px;
  }
`

const StyledImage = styled(Image)`
  align-self: center;
  margin-right: 10px;
`

const Hero = () => {
  const TranslateString = useI18n()

  return (
    <StyledHero>
      <StyledContainer>
        <StyledImage src="/images/fenix-bae.png" alt="Fenix bae" width={110} height={110} />
        <LeftWrapper>
          <Title>{TranslateString(999, 'The Fenix Lottery')}</Title>
          <Blurb>{TranslateString(999, 'Buy Fenix tickets and win $FAM')}</Blurb>
          <Blurb>{TranslateString(999, 'If you match 2, 3 or 4 numbers you win')}</Blurb>
        </LeftWrapper>
        <RightWrapper>
          <LotteryProgress />
        </RightWrapper>
      </StyledContainer>
    </StyledHero>
  )
}

export default Hero
