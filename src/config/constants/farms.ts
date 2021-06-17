import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'FAM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x65CC938c8908d81b801563d7100c29A5F31f1Aa2', // TODO a remplacer par le vrai FAM
    },
    tokenSymbol: 'FAM',
    tokenAddresses: {
      97: '',
      56: '0x5E7414411DC698a344b8061Ce33896AC24666883', // TODO a remplacer par le vrai FAM
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'FAM-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x309D81C9F835A5Fb2b0679BF549F491ce6212e74', // TODO a remplacer par le vrai FAM
    },
    tokenSymbol: 'FAM',
    tokenAddresses: {
      97: '',
      56: '0x5E7414411DC698a344b8061Ce33896AC24666883', // TODO a remplacer par le vrai FAM
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'FENIX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd9DD7024119e5f3DC6025fcdb88DC394A0aBF844', // TODO a remplacer par le vrai FENIX
    },
    tokenSymbol: 'FENIX',
    tokenAddresses: {
      97: '',
      56: '0x8F8a854865c7B16F75f2b8f251475558045D29A3', // TODO a remplacer par le vrai FENIX
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'FENIX-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xbdfb8e9Bc83Fa427932B0EE272c6E1Cc1551dB36', // TODO a remplacer par le vrai FENIX
    },
    tokenSymbol: 'FENIX',
    tokenAddresses: {
      97: '',
      56: '0x8F8a854865c7B16F75f2b8f251475558045D29A3', // TODO a remplacer par le vrai FENIX
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'FAM-FENIX LP',
    lpAddresses: {
      97: '',
      56: '0x39b848c8B9D6b65bA98A8554aFCfdE4eF10ECC8d', // TODO a remplacer par le vrai FAM
    },
    tokenSymbol: 'FAM',
    tokenAddresses: {
      97: '',
      56: '0x5E7414411DC698a344b8061Ce33896AC24666883', // TODO a remplacer par le vrai FAM
    },
    quoteTokenSymbol: QuoteToken.FENIX,
    quoteTokenAdresses: contracts.fam,
  },
  {
    pid: 5,
    risk: 3,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    risk: 3,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x804678fa97d91B974ec2af3c843270886528a9E6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 3,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 8,
    risk: 3,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 11,
    risk: 3,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 18,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'FAM',
    lpAddresses: {
      97: '',
      56: '0x65CC938c8908d81b801563d7100c29A5F31f1Aa2', //  FAM-BNB LP
    },
    tokenSymbol: 'FAM',
    tokenAddresses: {
      97: '',
      56: '0x5E7414411DC698a344b8061Ce33896AC24666883',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 17,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'FENIX',
    lpAddresses: {
      97: '',
      56: '0xd9DD7024119e5f3DC6025fcdb88DC394A0aBF844', //  FENIX-BNB LP
    },
    tokenSymbol: 'FENIX',
    tokenAddresses: {
      97: '',
      56: '0x8F8a854865c7B16F75f2b8f251475558045D29A3',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 16,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x65CC938c8908d81b801563d7100c29A5F31f1Aa2', //  FAM-BNB LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },  
]

export default farms
