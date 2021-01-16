export interface iIntegrationDetails {
    imageUrl: string;
    route: string;
    isActive: boolean;
    title: string;
    description: string;
}

export interface iItemDetails {
    title: string;
    description: string;
    para1: string;
    para2: string;
    feature1?: string;
    feature2?: string;
    feature3?: string;
    name: string;
    signupDescription: string;
    pageRedirectTo: string;
    isSmartContract: boolean;
    isSubgraph: boolean;
    isAnalyzer: boolean;
    buttonLabelSubgraph: string;
    buttonLabelConnectSmartContract: string;
    buttonLabelBrowseCharts: string;

}
