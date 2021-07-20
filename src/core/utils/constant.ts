import { iIntegrationDetails } from '../models/common';

export class Constants {
  public static IndexerDashboard = `https://analytics.dappquery.com/public/dashboard/0f6f41d7-0a56-4b0a-ac1b-6112fc984f80`;
  public static DelegratorDashboard = `https://analytics.dappquery.com/public/dashboard/b6562bf4-b3a1-4642-a364-7f2ab6d3d867`;
  public static IndividualIndexerDashboard = `https://analytics.dappquery.com/public/dashboard/6940bd30-0cc7-40e7-ad20-c09e4664ddff`;
  public static IndividualDelegatorDashboard = `https://analytics.dappquery.com/public/dashboard/f0323b61-7f96-4591-bde2-69c52676bd40`;
  public static curatorDashboard = `https://analytics.dappquery.com/public/dashboard/aed96cfe-5de5-4b46-85bb-5324f3bc785d`;
  public static individualcuratorDashboard = `https://analytics.dappquery.com/public/dashboard/a16e7dd8-c0c0-4f57-9c0d-dec5419d8f6a`;
  public static subgraphDashboard = `https://analytics.dappquery.com/public/dashboard/ecee9e7c-8f90-4932-9a61-7aa6c22bcc1b`;
  public static individualSubgraphDashboard = `https://analytics.dappquery.com/public/dashboard/5bf2f8f3-e8e9-4b12-8098-f6092374077c`;


  public static GENERAL = {
    GA_TRACKING_ID: 'UA-150439015-2',
  };

  public static URLs = {
    DEV: {
      COOKIE_DOMAIN: 'dqdev.com',
      RESTFUL_API_ENDPOINT: 'http://dqdev.com:8080',
      ANALYZER: 'https://analytics.dqdev.com:8080/question/new',
      ANALYZER_HOME: 'https://analytics.dqdev.com:8080/',
    },
    PROD: {
      COOKIE_DOMAIN: 'dappquery.com',
      RESTFUL_API_ENDPOINT: 'https://dappquery.com',
      ANALYZER: 'https://analytics.dappquery.com/question/new',
      ANALYZER_HOME: 'https://analytics.dappquery.com/',
    },
    TWITTER_ID: 'dappquery',
    S3_BASE_URL: '//dappquery.s3.amazonaws.com',
    CLOUDFRONT_BASE_URL: 'https://duhy7tdvrc6v6.cloudfront.net',
    DEMO_ANALYTICS_DASHBOARD: 'https://dashboard.dappquery.com/livepeer',
    SOCIAL_NETWORK_TWITTER: 'https://twitter.com/teamdappquery',
    DISCORD: 'https://discord.gg/wTAf85T',
    MEDIUM_BLOG: 'https://medium.com/dappquery',
    DOCS: 'https://docs.dappquery.com',
    SCHEDULE_DEMO: 'https://calendly.com/dappquery',
    ONBOARDING_GOOGLE_FORM: 'https://forms.gle/7qe2fGvoXHhWc1Vx9',
    dappqueryDocs: 'https://docs.dappquery.com/',
    EXPLORER: 'https://dappquery.com/explorer/',
    DAPPQUERY_WEBSITE: 'https://dappquery.com/',
    DAPPQUERY_DELEGATION_LINK:
      'https://network.thegraph.com/profile?id=0x4bc2e066fb0857493a1fbe48462bb34ff6ea731f&view=Indexing',
    DAPPQUERY_INDEXER:
      'https://thegraph.dappquery.com/indexer?indexer_address=0x4bc2e066fb0857493a1fbe48462bb34ff6ea731f',
  };

  public static LABELS = {
    commonLables: {
      indexerStats: 'Our Indexer Status',
      delegateToUs: 'Delegate To Us',
      features: 'FEATURES',
      demo: 'DEMO',
      explorer: 'EXPLORER',
      integration: 'INTEGRATION',
      pricing: 'PRICING',
      contact: 'CONTACT',
      technicalErrorMessage: 'There is some technical issue, please try later.',
      termsOfService: 'Terms of Service',
      privacy: 'Privacy',
      space: '&nbsp;',
      dash: '-',
      FIFTYMB: 50000000, //50mb
      FIVEMB: 5250000, //5MB,
      IMAGETYPEALLLOWED: ['png', 'jpeg', 'jpg'],
      MAINNET: 'MAINNET',
      etherscanUrl: 'https://etherscan.io/address/',
      SMART_CONTRACT: 'SMART_CONTRACT',
      EXTERNAL_SUBGRAPH: 'EXTERNAL_SUBGRAPH',
      comingSoon: 'COMING SOON',
      needHelpLabel: 'NEED HELP?',
      emailNotConfirmedText:
        'Your account is not verified yet. Please check your inbox and verify your email.',
    },
    headerArea: {},
    theGraphDashboard: {
      delegator: '/delegator',
      indexer: '/indexer',
      indexer_address: 'indexer_address',
      indexerLabel: 'Indexer ',
      curatorLabel: 'Curator ',
      delegatorLabel: 'Delegator',
      curator: '/curator',
      subgraph: '/subgraph',
      more: 'More',
      subgraphLabel: 'Subgraph'
    },
  };
}
