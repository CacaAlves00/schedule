interface LoginAPIAnswerInterface {
    successful: boolean,
    message?: string
}

export async function login(username: string, password: string): Promise<LoginAPIAnswerInterface> {
    return await {
        successful: true,
    }
}

export async function signIn(username: string, password: string): Promise<LoginAPIAnswerInterface> {
    return await {
        successful: false,
        message: 'E-mail already registered'
    }
}