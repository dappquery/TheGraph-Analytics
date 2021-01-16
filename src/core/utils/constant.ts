import { iIntegrationDetails } from '../models/common';

export class Constants {
  public static IndexerDashboard = `https://analytics.dappquery.com/public/dashboard/0f6f41d7-0a56-4b0a-ac1b-6112fc984f80`;
  public static DelegratorDashboard = `https://analytics.dappquery.com/public/dashboard/b6562bf4-b3a1-4642-a364-7f2ab6d3d867`;
  public static IndividualIndexerDashboard = `https://analytics.dappquery.com/public/dashboard/6940bd30-0cc7-40e7-ad20-c09e4664ddff`;

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
  };

  public static explorerList = [
    'popular',
    'defi',
    'governance',
    'games',
    'other',
    'nft',
  ];
  public static featureList = [
    'dashboard',
    'explorer',
    'integration',
    'privacy',
  ];

  public static integrationItemList = [
    'ens',
    'ipfs',
    'coinmarketcap',
    'etherscan',
    'graphprotocol',
    'ethereum',
    'poa',
    'xdai',
  ];
  public static integrationListDetails: iIntegrationDetails[] = [
    {
      title: 'Ethereum',
      route: 'ethereum',
      isActive: true,
      imageUrl: '',
      description:
        'Turn your ethereum smart contract interaction into powerful insights.',
    },
    {
      title: 'The Graph',
      route: 'graphprotocol',
      isActive: true,
      imageUrl: '',
      description:
        'Analyze and visualize your subgraph using dozens of chart support types.',
    },
    {
      title: 'POA',
      route: 'poa',
      isActive: true,
      imageUrl: '',
      description:
        'Connect POA network smart contracts to easily create powerful dashboards and share insights.',
    },
    {
      title: 'XDAI',
      route: 'xdai',
      isActive: true,
      imageUrl: '',
      description:
        'Utilize power of xDai fast, inexpensive transactions with Dappquery intelligent analytics.',
    },
    // {
    //     title: 'Coinmarketcap',
    //     route: 'coinmarketcap',
    //     isActive: false,
    //     imageUrl: '',
    //     description: "Enable this to get accurate real-time and historical data for cryptocurrency tokens."
    // },
    // {
    //     title: 'Etherscan',
    //     route: 'etherscan',
    //     isActive: false,
    //     imageUrl: '',
    //     description: 'Enable this to access balance tracker feature for tracking user token balances.'
    // },
    {
      title: 'IPFS',
      route: 'ipfs',
      isActive: false,
      imageUrl: '',
      description:
        'Extract and analyze your IPFS endpoints and build a complete visual of your smart contract data.',
    },
    {
      title: 'ENS',
      route: 'ens',
      isActive: false,
      imageUrl: '',
      description:
        'Map machine-readable identifiers to human-readable ENS details and display on dashboard.',
    },
  ];

  public static constValues = {
    general: {
      passwordStrengthColorArray: [
        '#e7003b',
        '#ff7a00',
        '#e6e664',
        '#a7d646',
        '#73a017',
      ],
      left: 'left',
      right: 'right',
      center: 'center',
    },
  };

  public static LABELS = {
    commonLables: {
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
    banerArea: {
      buildAnalytics: 'Build and Share',
      dashboardForDapps: 'Dapp Analytics',
      bannerDescription:
        'Connect smart contracts, build interactive charts and dashboards to visualize data, schedule reports and share with community',
      getADemo: 'Book Demo',
      getStarted: 'Get Started',
      subtext2: 'Analytics for Everyone',
    },
    featureArea: {
      featureHeader1: 'Dashboard for Visualization',
      featureDescription1:
        'Analyze and visualize your smart contracts using charts and dashboard. Choose from dozens of chart types to create the best visualization of your data.',
      featureHeader2: 'SQL for Advanced Analytics',
      featureDescription2:
        'Enjoy the power and comfort of SQL editor to build complex and advance analytics. Browse schemas and write queries in their natural syntax and build charts.',
      featureHeader3: 'Schedule Reports',
      featureDescription3:
        'Easily schedule reports of your charts and dashboards which will be emailed to your inbox. Include multiple charts and dashboards in a single report.',
      featureHeader4: 'Share Dashboards with Everyone',
      featureDescription4:
        'We believe in open community. Share dashboards on a URL anywhere you need. Export your charts in popular formats like CSV, XLS and JSON.',
      featureHeader5: 'Integrations',
      featureDescription5:
        'Dappquery offers integrations with popular blockchain protocol, network and services. Sync all your Dapp data at a single place for powerful analytics. .',
      featureHeader6: 'Intuitive Visual Interface',
      featureDescription6:
        'Intuitive visual interface let anyone query, filter and join data for awesome visualizations. It takes the pain out of exploring your data and writes queries for you.',
    },
    madeLifeArea: {
      viewDashboardButton: 'CREATE CHARTS',
      grapgQLApiDemoButton: 'CREATE DASHBOARD',
      createReportDemoButton: 'SCHEDULE REPORT',
      tabOneHeader1: 'Create charts with',
      tabOneHeader2: 'visual interface',
      tabOneDesc:
        'Browse your smart contract schema and create charts that require joins, multiple stages of filtering and group by methods.',
      tabOneContentButton: 'Get Started',
      tabTwoHeader1: 'Drag and drop ',
      tabTwoHeader2: 'charts to dashboard',
      tabTwoDesc:
        'Group multiple charts to dashboard and arrange them using drag and drop. Share the dashboard with community via public URL.',
      tabTwoContentButton: 'Get Started',
      tabThreeHeader1: 'Create reports',
      tabThreeHeader2: 'from charts',
      tabThreeDesc:
        'Schedule reports and receive regular updates of your charts to keep track of changes to the metrics that matter to you most.',
      tabThreeContentButton: 'Get Started',
      modalHeader: 'GraphQL Demo',
    },
    priceArea: {
      pricingDescription:
        'Do you need smart contracts advanced analytics for your blockchain project?',
      priceHeader: 'Analytics for every blockchain project',
      freeFeature1: 'Create unlimited charts and dashboards.',
      freeFeature2: 'Keep data history for 6 months.',
      freeFeature3: 'Limit on number of data sources and contracts.',
      freeFeature4: 'Support on discord and email.',
      freeFeature5: 'Public dashboards.',
      freeFeature6: 'Current and historical token pricing.',
      customFeature1: 'All of the Free plan features, plus',
      customFeature2: 'No limit on data history.',
      customFeature3: 'Sync unlimited data sources and contracts.',
      customFeature4: 'Factory contracts decoding and support.',
      customFeature9: 'Support of custom integrations for data intelligence.',
      customFeature5:
        'Priority support on private discord and email. Skip the queue.',
      customFeature6: 'New feature requests.',
      customFeature7: '',
      priceButton: 'TALK TO US',
    },
    contactArea: {
      contactPageHeader: 'GET IN TOUCH',
      formSuccessMessage:
        'Thank you for contacting us. Our support representative will contact you soon.',
      supportEmail: 'support@dappquery.com',
      supportDescription:
        'Contact us for question, demo and premium solutions!',
      nameValidationErrorMessage: `Come on, you have a name, don't you?`,
      emailValidationErrorMessage: 'Oops..!! Please enter a correct email.',
      subjectValidationErrorMessage: `Come on, you have a subject, don't you?`,
      bodyValidationErrorMessage:
        'Please enter valid message with more than 50 characters!',
      contactButton: 'Send Message',
      minBodySize: '50',
      newCustomerEnquiry: 'New Customer Enquiry',
      supportCase: 'Support Case',
      billing: 'Billing',
      feedbackAndFeaturesRequest: 'Feedback & Features Request',
      others: 'Others',
    },
    footerArea: {
      footerHeader1: 'Our Vision',
      footerDescription1:
        'Blockchain is not designed to perform advanced analytics on smart contracts data. We aim to change this with empowering everyone to easily understand the smart contract data, do analysis and easily build beautiful charts and dashboards.',
      copyright1: 'Copyright',
      copyright2: 'DappQuery Inc. All rights reserved',
      footerHeader2: 'Newsletter',
      footerDescription2:
        'Join our mailing list and stay updated with technology updates, community resources and more!',
      emailValidationErrorMsg:
        'Ahh...Invalid Email. Please enter correct email id.',
      footerHeader3: 'Join us',
      termsAndCondition: 'Terms And Condition',
      privacyPolicy: 'Privacy Policy',
      allRightsReservedText1: '2020 Dappquery Inc.',
      allRightsReservedText2: '- All Rights Reserved',
    },
    termsOfService: {
      termsOfServiceHeader: 'TERMS OF SERVICE',
    },
    privacy: {
      privacyPolicy: 'Privacy Policy',
    },
    testimonyPage: {
      feedbackfromCustomers: 'Feedback from Customers',
      customerFeedbackDescription1:
        'The Dappquery team were a breeze to work with. They turned out a production ready dashboard for the Colony Network in a matter of days and have been constantly improving it ever since.',
      customerName1: 'Auryn Macmillan',
      customerPos1: 'Community Builder',
      customerFeedbackDescription2: `Mintbase is a smart contract factory. The setup is complex and Dappquery did an excellent job in building a dashboard.
            They built an analytics overview where it can easily be seen how many tokens were created, sold and many more data insights that we use on a daily basis.
            We highly recommend Dappquery.`,
      customerName2: 'Carolin Wend',
      customerPos2: ' Director of Business Development',
    },
    errorPage: {
      errorCode: '404',
      errorMsg: 'OOPS! we are sorry, but the page you requested was not found',
      goHome: 'GO HOME',
      contactUs: 'CONTACT US',
    },
    loginForm: {
      loginToappquery: 'Login to Dappquery',
      emailAddress: 'EMAIL ADDRESS',
      password: 'PASSWORD',
      forgotPassword: 'Forgot Password?',
      login: 'Login',
      createAnAccount: 'Create an account',
    },
    signupForm: {
      name: 'NAME',
      emailAddress: 'EMAIL ADDRESS',
      password: 'PASSWORD',
      signupHeader: 'Signup to Dappquery',
      termsAndConditionMsg:
        'By checking this box, you agree to our Terms of Service and acknowledge and consent to our',
      policyLink: 'Acceptable Use Policy',
      privacyMsg: 'Privacy Policy',
      signup: 'Signup',
      capitalSignup: 'SIGNUP FREE',
      loginUrlMsg: 'I have an account',
    },
    forgetPassword: {
      emailAddress: 'EMAIL ADDRESS',
      recover: 'Recover',
      returnToLogin: 'Return to Login',
      message:
        'Enter your email address to receive the link to reset your password',
      forgetPassword: 'Forgot Password',
      emailSentMsg1:
        'We have sent password recovery instructions to your email',
      emailSentMsg2:
        'Please check your spam folder if your email doesn’t arrive soon',
    },
    resetPassword: {
      resetPasswordHeader: 'Reset Your Password',
      resetPasswordMsg1: 'Enter your new password.',
      enterPassword: 'ENTER PASSWORD',
      resetPassword: 'Reset Password',
    },
    errorMessages: {
      email: 'Please enter correct email',
      name: 'please enter a correct name',
      password: 'Password is too short, length must be minimum 8 characters',
      loginPagePassword: 'Please enter correct passoword',
      termsAndCondition:
        'Please check the terms and condition checkbox to proceed',
      formInvalid: 'Please complete the form',
      technicalError: 'There is some technical issue',
      inValidContractAddress:
        'Invalid contract address, Please add a valid contract address.',
      contractAddressExists: 'contract address already exists.',
      errorCode: '404',
      errorMsg: 'OOPS! we are sorry, but the page you requested was not found',
      goHome: 'GO HOME',
      contactUs: 'CONTACT US',
      inValidUrl: 'Invalid URL',
      projectName: 'please enter a correct project name',
      invalidProtocol: 'please select a protocol',
      invalidNetwork: 'please select a network',
      NoContractAddressAdded: 'add atleast one contract address.',
      fileSizeMax5Mb: 'File size exceeds limit, maximum 5 MB allowed',
      fileSizeMax50Mb: 'File size exceeds limit, maximum 50 MB allowed',
      allowedImageType: 'only image(PNG, JPEG, JPG) are allowed',
      allowedAbisFileTypeMsg: 'only json file allowed',
      invalidSubgraphEndpoint: 'invalid Subgraph Endpoint',
    },
    registerDappForm: {
      warningMsg1:
        'If you update contract, protocol, network or factory option, system will delete your data and start syncing again.',
      warningMsg2: 'Do you want to continue?',
      header: 'Just A Step Away',
      subHeader: 'Few more details needed to get you started',
      viewModeHeader: 'Your Project Details',
      projectName: 'Project Name',
      projectNameTooltipMsg:
        'Your dapp/contract name by which your project is known by your users e.g. Compound, Uniswap.',
      protocol: 'Platform',
      protocolTooltipMsg:
        'Please select blockchain platform where your project contracts are deployed.   ',
      network: 'Network',
      networkTooltipMsg:
        'Please select mainnet/testnet network where your project contracts are deployed.',
      contractAddress: 'Contract Addresses',
      contractTooltipMsg:
        'Search one or more contract addresses of your project which emit events. Works best with event data.',
      subgraphEndpointTooltipMsg:
        'You can get your subgraph http query endpoint from TheGraph explorer: https://thegraph.com/explorer/',
      protocolDropdownPlaceholder: 'Select protocol',
      networkDropdownPlaceholder: 'Select network',
      website: 'Please enter your website',
      uploadLogo: 'Please upload your logo',
      uploadLogoTooltipMsg:
        'Supported image types: png,jpg,jpeg. Project logo will be used in dashboard header for branding. Recommended size: 300x300',
      contractsLoadingMsg: 'contracts loading...',
      noContractsFound: 'No matching contracts found',
      register: 'Register',
      clickToUpload: 'Click to upload',
      uploadAbisFileForNonVerifiedContract:
        'Please add Abis file for all non verified contracts',
      uploadLogoForViewMode: 'your uploaded logo',
      viewLogo: 'View Logo',
      contractAddressPlaceholder:
        'Enter contract name or address(minimum 2 characteres)',
      websitePlaceholder: 'Please enter your website',
      projectNamePlaceholder: 'Enter your project name',
      clickToOpen: 'Click to view contract details in explorer',
      selectPlatform: 'Select platform',
      protipHeader: 'ProTips!',
      tip1:
        'You can get your project contract addresses from the block explorers like <b>Etherscan</b>.',
      tip2:
        'You can just type in the name/address of the contract in "CONTRACT ADDRESS" field and it will be auto-populated.',
      tip3:
        'We also support "FACTORY CONTRACT" which deploys many instances of same contract with the same bytecode.',
      tip4:
        "Follow our <a href='https://docs.dappquery.com/dapp-registration/register-dapp-using-smart-contract' target='_blank'>documentation</a> for step by step guide.",
      connectSubgraphTip1:
        'Go to <a href="https://thegraph.com/explorer" target=_blank>TheGraph explorer<a>. Copy the api endpoint from your dApp subgraph and paste in "SUBGRAPH ENDPOINT" textbox.',
      connectSubgraphTip2:
        'We recommend to update subgraph with latest Dapp logic. Subgraph data is pulled in regular intervals. So your dashboard is always up to date.',
      connectSubgraphTip3:
        "Follow our <a href='https://docs.dappquery.com/dapp-registration/register-dapp-using-subgraph' target='_blank'>documentation</a> for step by step guide.",
      dynamicSourcePointTooltipMsg:
        'If there are many instances of the same contract with the same bytecode we can detect and put them all in the same table. Often relevant when a factory deploys contracts.',
      dynamicDataSourceTitle: 'Several instances of same contract?',
    },
    loggedInDashboard: {
      msg1: 'Data syncing process has started.',
      msg2:
        'It can take anywhere between few minutes to few hours for the process to complete.',
      msg3: 'We will email you at ',
      msg4: ' as the data syncing is complete.',
      msg5:
        'Meanwhile you can browse charts and start analytics on popular blockchain projects.',
    },
    userHeader: {
      dappDetails: 'DAPP DETAILS',
      contactUs: 'HELP',
      logout: 'LOGOUT',
      sendQueries: 'Please send your queries...',
      dashboard: 'MY PROJECT',
      myActivity: 'MY ACTIVITY',
      docs: 'DOCS',
      analyzeLabel: 'ANALYZE',
      myProject: 'MY PROJECT',
      integrationLabel: 'INTEGRATION',
      explorerLabel: 'EXPLORER',
      createChart: 'CREATE CHART',
    },
    verifyEmail: {
      header: 'Verify Email',
      returnToLogin: 'Return to Login',
      message: 'Your email has been verified successfully.',
      emailNotVarifiedmessage: 'URL is broken or expired.',
    },
    integrationDetailsPage: {
      tryItFree: 'Try it free',
      emailValidationErrorMsg:
        'Ahh...Invalid Email. Please enter correct email id.',
      featureHeader: 'Features + Benefits',
      ensLabel: 'ens',
      ipfsLabel: 'ipfs',
      coinmarketcapLabel: 'coinmarketcap',
      etherscanLabel: 'etherscan',
      graphprotocolLabel: 'graphprotocol',
      ethereumLabel: 'ethereum',
      poaLabel: 'poa',
      ethereum: {
        title: 'Ethereum + Dappquery',
        name: 'ethereum',
        description:
          'Analyze and Visualize Ethereum Smart Contracts with Dappquery',
        para1: `Easily visualize your ethereum smart contract data in various formats and gather it into dashboards from multiple sources.
                Share the story your data tells with your team or with your community.
                <b>Share dashboard</b> insights via URL wherever you need to make your organization truly data driven.
                Analyze your data with <b>intuitive visual interface </b>which writes queries for you..`,
        para2: `Supported ethereum networks:<b> Mainnet, Rinkeby, Ropsten, Goerli, Kovan</b>. You can blend multiple blockchain protocols like <b>IPFS, ENS etc.</b> in one chart and create powerful dashboards that can be shared across your organization for seamless collaboration.`,
        feature1: `Supported visualizations: Line, Bar, Area, Pie, Gauge, Trends and others. Combine multiple metrics in one chart.`,
        feature2: `Weekly/monthly/yearly graphs and charts let you analyze & monitor your Dapp growth.`,
        feature3: `Set refresh interval for your dashboards and be updated with latest data and metrics.`,
        feature4: `Auto updating dashboard which is in sync with new blocks produced.`,
        signupDescription: `Get started and build a more data-driven web3 future`,
        pageRedirectTo: '/connect-smart-contract/',
        isSmartContract: true,
        isSubgraph: false,
        isAnalyzer: true,
        buttonLabelSubgraph: 'Connect Subgraph',
        buttonLabelConnectSmartContract: 'Connect Smart Contract',
        buttonLabelBrowseCharts: 'Create a Chart',
      },
      graphprotocol: {
        title: 'The Graph + Dappquery',
        name: 'graphprotocol',
        description: 'Analyze and Visualize Subgraph Open Apis with Dappquery',
        para1: `Easily visualize your subgraph data in various formats and gather it into dashboards from multiple sources.
                Share the story your data tells with your team or with your community.
                <b>Share dashboard</b> insights via URL wherever you need to make your organization truly data driven.
                Analyze your data with <b>intuitive visual interface </b>which writes queries for you..`,
        para2: `Dappquery is the perfect complement to <b>Subgraph open APIs</b> by helping you make sense of subgraph entities without having to rely on an engineer or analyst. You can blend multiple blockchain services like <b>IPFS, ENS etc.</b> in one chart and create powerful dashboards that can be shared across your organization for seamless collaboration.`,
        feature1: `Supported visualizations: Line, Bar, Area, Pie, Gauge, Trends and others. Combine multiple metrics in one chart.`,
        feature2: `Weekly/monthly/yearly graphs and charts let you analyze & monitor your Dapp growth.`,
        feature3: `Set refresh interval for your dashboards and be updated with latest data and metrics.`,
        feature4: `Auto updating dashboard in which is in sync with new blocks produced.`,
        signupDescription: `Get started and build a more data-driven web3 future`,
        pageRedirectTo: '/connect-subgrabh/',
        isSmartContract: false,
        isSubgraph: true,
        isAnalyzer: true,
        buttonLabelSubgraph: 'Connect Subgraph',
        buttonLabelConnectSmartContract: 'Connect Smart Contract',
        buttonLabelBrowseCharts: 'Create a Chart',
      },
      poa: {
        title: 'POA + Dappquery',
        name: 'poa',
        description: 'Analyze and Visualize POA Smart Contracts with Dappquery',
        para1: `Easily visualize your POA smart contract data in various formats and gather it into dashboards from multiple sources.
              Share the story your data tells with your team or with your community.
              <b>Share dashboard</b> insights via URL wherever you need to make your organization truly data driven.
              Analyze your data with <b>intuitive visual interface </b>which writes queries for you..`,
        para2: `Supported POA networks: <b>POA-Core, POA Sokol</b>. You can blend multiple blockchain services like <b>IPFS, ENS etc.</b> in one chart and create powerful dashboards that can be shared across your organization for seamless collaboration.`,
        feature1: `Supported visualizations: Line, Bar, Area, Pie, Gauge, Trends and others. Combine multiple metrics in one chart.`,
        feature2: `Weekly/monthly/yearly graphs and charts let you analyze & monitor your Dapp growth.`,
        feature3: `Set refresh interval for your dashboards and be updated with latest data and metrics.`,
        feature4: `Auto updating dashboard in which is in sync with new blocks produced.`,
        signupDescription: `Get started and build a more data-driven web3 future`,
        pageRedirectTo: '/connect-smart-contract/',
        isSmartContract: true,
        isSubgraph: false,
        isAnalyzer: true,
        buttonLabelSubgraph: 'Connect Subgraph',
        buttonLabelConnectSmartContract: 'Connect Smart Contract',
        buttonLabelBrowseCharts: 'Create a Chart',
      },
      xdai: {
        title: 'XDai + Dappquery',
        name: 'xdai',
        description:
          'Analyze and Visualize xDai Smart Contracts with Dappquery',
        para1: `Easily visualize your xDai smart contract data in various formats and gather it into dashboards from multiple sources.
              Share the story your data tells with your team or with your community.
              Share dashboard insights via URL wherever you need to make your organization truly data driven.
              Analyze your data with <b>intuitive visual interface </b>which writes queries for you..`,
        para2: `Dappquery is the perfect complement to xDai network by helping you make sense of xDai smart contracts without having to rely on an engineer or analyst. You can blend multiple blockchain services like <b>IPFS, ENS etc.</b> in one chart and create powerful dashboards that can be shared across your organization for seamless collaboration.`,
        feature1: `Supported visualizations: Line, Bar, Area, Pie, Gauge, Trends and others. Combine multiple metrics in one chart.`,
        feature2: `Weekly/monthly/yearly graphs and charts let you analyze & monitor your Dapp growth.`,
        feature3: `Set refresh interval for your dashboards and be updated with latest data and metrics.`,
        feature4: `Auto updating dashboard in which is in sync with new blocks produced.`,
        signupDescription: `Get started and build a more data-driven web3 future`,
        pageRedirectTo: '/connect-smart-contract/',
        isSmartContract: true,
        isSubgraph: false,
        isAnalyzer: true,
        buttonLabelSubgraph: 'Connect Subgraph',
        buttonLabelConnectSmartContract: 'Connect Smart Contract',
        buttonLabelBrowseCharts: 'Create a Chart',
      },
      ens: {
        title: 'ENS',
        name: 'ens',
        description:
          'Analyze and Visualize Ethereum Smart Contract Data with Dappquery',
        para1: `   When you connect your Zoom account with Calendly, video conferencing is made simple. Choosing Zoom as your
              event location will automatically create video conference details and save them to your Calendly event. Providing
              your invitees instant access to these details will save you time and help reduce meeting no-shows.`,
        para2: `Once an event is scheduled, the Zoom details will be automatically included in the confirmation
              notifications
              and calendar event sent to your invitees.`,
        feature1: `Automatically generate unique Zoom video conference details for every meeting you
              schedule.`,
        feature2: `Eliminate the need to set up and remember video conferencing details for all your
              meetings.`,
        feature3: `Have meeting details update in real time when rescheduling or canceling.`,
        signupDescription: `Requires Zoom trial or subscription`,
        pageRedirectTo: '/connect-subgrabh/',
        isSmartContract: true,
        isSubgraph: true,
        isAnalyzer: true,
        buttonLabelSubgraph: 'Connect Subgraph',
        buttonLabelConnectSmartContract: 'Connect Smart Contract',
        buttonLabelBrowseCharts: 'Create a Chart',
      },
      ipfs: {
        title: 'IPFS',
        name: 'ipfs',
        description:
          'Analyze and Visualize Ethereum Smart Contract Data with Dappquery',
        para1: `   When you connect your Zoom account with Calendly, video conferencing is made simple. Choosing Zoom as your
              event location will automatically create video conference details and save them to your Calendly event. Providing
              your invitees instant access to these details will save you time and help reduce meeting no-shows.`,
        para2: `Once an event is scheduled, the Zoom details will be automatically included in the confirmation
              notifications
              and calendar event sent to your invitees.`,
        feature1: `Automatically generate unique Zoom video conference details for every meeting you
              schedule.`,
        feature2: `Eliminate the need to set up and remember video conferencing details for all your
              meetings.`,
        feature3: `Have meeting details update in real time when rescheduling or canceling.`,
        signupDescription: `Requires Zoom trial or subscription`,
        pageRedirectTo: '/connect-subgrabh/',
        isSmartContract: true,
        isSubgraph: true,
        isAnalyzer: true,
        buttonLabelSubgraph: 'Connect Subgraph',
        buttonLabelConnectSmartContract: 'Connect Smart Contract',
        buttonLabelBrowseCharts: 'Create a Chart',
      },
      coinmarketcap: {
        title: 'Coinmarketcap',
        name: 'Coinmarketcap',
        description:
          'Analyze and Visualize Ethereum Smart Contract Data with Dappquery',
        para1: `   When you connect your Zoom account with Calendly, video conferencing is made simple. Choosing Zoom as your
              event location will automatically create video conference details and save them to your Calendly event. Providing
              your invitees instant access to these details will save you time and help reduce meeting no-shows.`,
        para2: `Once an event is scheduled, the Zoom details will be automatically included in the confirmation
              notifications
              and calendar event sent to your invitees.`,
        feature1: `Automatically generate unique Zoom video conference details for every meeting you
              schedule.`,
        feature2: `Eliminate the need to set up and remember video conferencing details for all your
              meetings.`,
        feature3: `Have meeting details update in real time when rescheduling or canceling.`,
        signupDescription: `Requires Zoom trial or subscription`,
        pageRedirectTo: '/connect-subgrabh/',
        isSmartContract: true,
        isSubgraph: true,
        isAnalyzer: true,
        buttonLabelSubgraph: 'Connect Subgraph',
        buttonLabelConnectSmartContract: 'Connect Smart Contract',
        buttonLabelBrowseCharts: 'Create a Chart',
      },
      etherscan: {
        title: 'Etherscan',
        name: 'etherscan',
        description:
          'Analyze and Visualize Ethereum Smart Contract Data with Dappquery',
        para1: `   When you connect your Zoom account with Calendly, video conferencing is made simple. Choosing Zoom as your
              event location will automatically create video conference details and save them to your Calendly event. Providing
              your invitees instant access to these details will save you time and help reduce meeting no-shows.`,
        para2: `Once an event is scheduled, the Zoom details will be automatically included in the confirmation
              notifications
              and calendar event sent to your invitees.`,
        feature1: `Automatically generate unique Zoom video conference details for every meeting you
              schedule.`,
        feature2: `Eliminate the need to set up and remember video conferencing details for all your
              meetings.`,
        feature3: `Have meeting details update in real time when rescheduling or canceling.`,
        signupDescription: `Requires Zoom trial or subscription`,
        pageRedirectTo: '/connect-subgrabh/',
        buttonLabelSubgraph: 'Connect Subgraph',
        buttonLabelConnectSmartContract: 'Connect Smart Contract',
        isSmartContract: true,
        isSubgraph: true,
        isAnalyzer: true,
        buttonLabelBrowseCharts: 'Create a Chart',
      },
    },

    integration: {
      integrationHeader: 'Integration',
      integrationDescription: `Dappquery offers integrations with popular blockchain protocol, network and services`,
    },
  };
  public static patterns = {
    numberValidator: /^[0-9]*$/,
    onlyTextWithoutSpace: /[a-zA-Z]+([\s][a-zA-Z]+)*/,
    email: /^[A-Z0-9]+[A-Z0-9_%+-]*(\.[A-Z0-9_%+-]{1,})*@(?:[A-Z0-9](?:[A-Z0-9-]*[A-Z0-9])?\.)+[A-Z]{2,24}$/i,
    website: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]*.[a-z0-9]+\.[a-z/]+(\/[-_a-zA-Z0-9#]+\/?)*$/,
  };

  public static pageRedirectTo = {
    registerDapp: '/connect-smart-contract/',
    home: '/',
    login: '/login/',
    dashboard: '/dashboard/',
    integration: '/integration/',
    signup: '/signup',
    explorer: '/explorer/',
    registerSubgraph: '/connect-subgrabh/',
    analyzer: '/analyzer/',
    'integration/ethereum': 'integration/ethereum',
    'integration/graphprotocol': 'integration/graphprotocol',
    'integration/poa': 'integration/poa',
    'integration/xdai': 'integration/xdai',
    chart: '/chart/',
    dapp: '/dapp/',
  };
}
