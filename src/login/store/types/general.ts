

export type User = {}
export type ApiError = {}


export type LoginState = {
    status?: 'idle' | 'logged' | 'logging';
    profile?: User;
}