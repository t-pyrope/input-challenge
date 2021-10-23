export interface InputInterface {
    type: string,
    id: string,
    label: string
}

export type InputState = {
    inputs: InputInterface[]
}

export interface RootState {
    input: InputState
}
