export interface IError {
    isError: boolean;
    isSuccess: boolean;
    errorMsg: string;
    successMsg: string;
    isTechnicalError: boolean;
    tecnicalErrorMsg: string;

}

export interface IApiRespose {
    success: boolean;
    data: {
        redirectTo: string;
        msg: string;
        userLoginCookieValue: string;
    };
    // msg: string
    errorData: IErrorResponseData;
}

export interface IErrorResponseData {
    general: string;
    email: string;
    password: string;
    termsAndCondition: string;
}
