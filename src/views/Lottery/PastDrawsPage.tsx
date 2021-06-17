import React from 'react'
import styled from 'styled-components'
import { BaseLayout } from '@pancakeswap-libs/uikit'
import PastLotteryRoundViewer from './components/PastLotteryRoundViewer'
import PastDrawsHistoryCard from './components/PastDrawsHistory/PastDrawsHistoryCard'

const Cards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 12;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const SecondCardColumnWrapper = styled.div<{ isAWin?: boolean }>`
  display: flex;
  flex-direction: column;
`

const BunnyImageWrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
  justify-content: center;
`

const PastDrawsPage: React.FC = () => (
  <Cards>
    <PastLotteryRoundViewer />
    <SecondCardColumnWrapper>
      <BunnyImageWrapper>
        <img src="/images/ticket.svg" alt="ticket" style={{ height: '55px' }} />
        <img src="/images/ticket.svg" alt="ticket" style={{ height: '55px' }} />
        <img src="/images/ticket.svg" alt="ticket" style={{ height: '55px' }} />
        <img src="/images/ticket.svg" alt="ticket" style={{ height: '55px' }} />
        <img src="/images/ticket.svg" alt="ticket" style={{ height: '55px' }} />
        <img src="/images/ticket.svg" alt="ticket" style={{ height: '55px' }} />
        <img src="/images/ticket.svg" alt="ticket" style={{ height: '55px' }} />
        <img src="/images/ticket.svg" alt="ticket" style={{ height: '55px' }} />
      </BunnyImageWrapper>
      <PastDrawsHistoryCard />
    </SecondCardColumnWrapper>
  </Cards>
)

export default PastDrawsPage
