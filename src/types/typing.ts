import React from "react";

export interface AddressType {
    street: string
    city: string
}

export interface UserType {
    id: string
    name: string
    email: string
    gender: string
    address: AddressType
    phone: string
}


export type RowType = {} & Omit<UserType, 'id'>

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>

