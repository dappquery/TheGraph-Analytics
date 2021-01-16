export interface ISignup {
  name: string;
  email: string;
  password: string;
  termsAndCondition: boolean;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IContractDetails {
  name: string;
  contractAddess: string;
  isVerified: boolean;
  abiS3identifier: string;
}

export interface IUserDappDetails {
  id: number;
  userId: number;
  name: string;
  website: string;
  status: string;
  dashboardStatus: string;
  dashboardUrl: string;
  logoUrl: string;
  createdAt: string;
  updatedAt: string;
  protocolId: number;
  networkId: number;
  isDynamicDataSource: string
  inputDataSource: string;
  currentBlock: string;
  totalBlock: string;
  syncPercentage: number;
  logoS3Identifier: string;
}

export interface IContractDetailsMap {
  id?: number;
  address: string;
  contractName: string;
  protocolId?: number;
  protocol?: string;
  networkId?: number;
  network?: string;
  abiSource?: string;
  abiS3Identifier: string;
  isVerified?: boolean;
  contractNameWithNetwork?: string;
  etherscanUrl?: string;
  url?: string;
}

export interface ILoggedInUser {
  id: number;
  analyzerUserId: number
  email: string;
  name: string;
  isEmailVerified: boolean;
  status: number;
  createdAt: string;
  updatedAt: string;
}

export interface INetwroks {
  value: string;
  displayValue: string;
}

export interface IProtocols {
  value: string;
  displayValue: string;
}

export interface IRegisterDappDetails {
  success: boolean;
  data?: {
    redirectTo: string;
    responseType: string;
    userDappDetails?: IUserDappDetails;
    subgraphTrackerDetails?: subgraphTrackerDetails;
    contractDetailsMap?: {
      [key: string]: IContractDetailsMap;
    };
    protocols?: {
      [key: string]: IProtocols;
    };
    networks?: {
      [key: string]: INetwroks;
    };
    userAbis?: {
      [key: string]: IUserImages;
    };
    userImages?: {
      [key: string]: IUserImages;
    };
    userVideos?: {
      [key: string]: IUserImages;
    };
    categories: CategoriesDetails[];
    orderedDappDetails: DappsDetails[];
    loggedInUser?: ILoggedInUser;
  };
  debugOptions?: {
    errorCode: string;
  };
  errorData?: {
    general: string;
    query: string;
    name: string;
    networkId: string;
    protocolId: string;
    website: string;
    logoS3Identifier: string;
    email: string;
    password: string;
    termsAndCondition: string;
    contracts: string;
  };
}

export interface INgSelect {
  value: number;
  label: string;
}

export interface IRegisterUserDetails {
  id: number;
  name: string;
  networkId: number;
  protocolId: number;
  website: string;
  logoS3Identifier: string;
  contracts: IContractAddress[];
  isDynamicDataSource: string;
  externalSubgraphEndpoint: string;
}

export interface IContractAddress {
  address: string;
  isVerified: boolean;
  abiS3identifier: string;
}

export interface IShowErrorOnDappRegisterPage {
  isShowErrorOnContractAddress: boolean;
  isShowErrorOnAddressExists: boolean;
  isContractAddressAddedError: boolean;
  isAllNonVerifiedContractsAbisAddedError: boolean;
}

export interface IUserImages {
  postUrl: string;
  postFields: {
    key: string;
    bucket: string;
    'X-Amz-Algorithm': string;
    'X-Amz-Credential': string;
    'X-Amz-Date': string;
    Policy: string;
    'X-Amz-Signature': string;
    'Content-Type': string;
    'Cache-Control': string;
    acl: string;
    'Content-disposition': string;
  };
  s3Url: string;
  cdnUrl: string;
}

export interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

export interface IS3Error {
  Error?: {
    Code: string;
    HostId: string;
    Message: string;
    MinSizeAllowed: string;
    ProposedSize: string;
    RequestId: string;
  };
}

export interface CategoriesDetails {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  permalink: string;
  currentCategory: boolean;
}

export interface DappsDetails {
  id: number;
  name: string;
  title: string;
  logoUrl: string;
  dashboardUrl: string;
  permalink: string;
  position: number;
}

export type FileType = 'image' | 'abi';

export interface subgraphTrackerDetails {
  id: number;
  userDappId: number;
  status: string;
  properties: number;
  subgraphIpfsHash: string;
  subgraphNameInGraph: string;
  isExternalSubgraph: boolean;
  externalSubgraphEndpoint: string;
  createdAt: string;
  updatedAt: string;
}
