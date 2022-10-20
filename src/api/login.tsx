interface LoginAPIAnswerInterface {
    successful: boolean,
    message?: string
}

export function login(email: string, password: string): LoginAPIAnswerInterface {
    return {
        successful: true,
    }
}

export function signIn(email: string, password: string): LoginAPIAnswerInterface {
    return {
        successful: false,
        message: 'E-mail already registered'
    }
}