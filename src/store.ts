import create from "zustand"

import {UserType} from "./types/typing";

interface IUsers {
    users: UserType[]
    addUsers: (items: UserType[]) => void
    updateUser: (row: UserType) => void
    createUser: (row: UserType) => void
    deleteUser: (id: string) => void
}

const usersStore = create<IUsers>(set => ({
    users: [],
    addUsers: (value: UserType[]) => set(() => ({
        users: value
    })),
    deleteUser: (id:string) => set((state) => ({
        ...state, users: state.users.filter(item => item.id !== id)
    })),
    updateUser: (row: UserType) => set((state) => ({
        ...state, users: state.users.map(user => (
            user.id === row.id ? row : user
        ))
    })),
    createUser: (row: UserType) => set((state) => ({
        ...state, users: [
            {...row, id: new Date().toISOString()},
            ...state.users
        ]
    }))
}))

export default usersStore