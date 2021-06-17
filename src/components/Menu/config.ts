import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Exchange',
    icon: 'ExchangeIcon',
    href: 'https://swap.fenixfinance.net/#/swap/',
  },
  {
     label: 'Add Liquidity',
     icon: 'LiquidityIcon',
     href: 'https://swap.fenixfinance.net/#/pool',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'LaunchPad IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'IFO Partnership',
    icon: 'ReferralIcon',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfaQSC3teN0k8dOnDp8ra6Q7SxCbzjSRFrdrIPHjAL8srLX9A/viewform?usp=sf_link',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: '/',
  },
  {
    label: 'Heco Chain',
    icon: 'TradeIcon',
    href: '/',
  },
  {
    label: 'Docs',
    icon: 'GitbookIcon',
    href: 'https://fenixfinance.gitbook.io/fenix-finance/',
  },
  {
    label: 'Audit by TechRate',
    icon: 'AuditIcon',
    href: 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/Fam.pdf/', // TODO a remplacer par le vrai FENIX
  },
  {
    label: 'RugDoc Check',
    icon: 'AuditIcon',
    href: 'https://rugdoc.io/project/fenix-finance/', // TODO a remplacer par le vrai FENIX
  },
  {
    label: 'Buy Fenix',
    icon: 'FenixIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x8F8a854865c7B16F75f2b8f251475558045D29A3',
      },
      {
        label: 'JulSwap',
        href: 'https://julswap.com/#/swap?outputCurrency=0x8F8a854865c7B16F75f2b8f251475558045D29A3',
      },
      {
        label: 'Dex Guru',
        href: 'https://dex.guru/token/0x8f8a854865c7b16f75f2b8f251475558045d29a3-bsc',
      },
      {
        label: 'GoSwapp Chart',
        href: 'https://goswappcharts.web.app/?isbsc=true&tokenId=0x8F8a854865c7B16F75f2b8f251475558045D29A3',
      },
      {
        label: 'BSC Scan',
        href: 'https://bscscan.com/token/0x8F8a854865c7B16F75f2b8f251475558045D29A3',
      },
    ],
  },
  {
    label: 'Farm Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'MasterChef',
        href: 'https://bscscan.com/address/0x72C5a911f65c2d3a360529c260e4ae9E2C9Eab39#code',
      },
      {
        label: 'No Migrator code',
        href: 'https://fenixfinance.gitbook.io/fenix-finance/security/migrator-code',
      },
      {
        label: 'LP Calculator',
        href: 'https://lp-calc.web.app/',
      },
    ],
  },
  {
    label: 'Listings',
    icon: 'ListingsIcon',
    items: [
      {
        label: 'Dappradar',
        href: 'https://dappradar.com/binance-smart-chain/defi/fenix-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/fenix-finance/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/fenix-finance',
      },
    ],
  },
]

export default config