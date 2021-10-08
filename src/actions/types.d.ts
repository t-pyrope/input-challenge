interface AddInputInterface {
    type: string,
}

interface DeleteInputInterface {
    id: string,
}

export type AddInputAction = {
    type: string,
    payload: AddInputInterface
}

export type DeleteInputAction = {
    type: string,
    payload: DeleteInputInterface
}

export type DeleteAllAction = {
    type: string
}
