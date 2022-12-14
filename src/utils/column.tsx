import {TableColumn} from "react-data-table-component";
import {RowType, UserType} from "../types/typing";

import {Button} from "../styles/custom/Button";

import usersStore from "../store";

export const useColumn = () => {
    const {deleteUser} = usersStore(state => state)

    const column: TableColumn<RowType>[] = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Phone',
            selector: row => row.phone,
        },
        {
            name: 'Gender',
            selector: row => row.gender,
        },
        {
            name: 'Address',
            cell: row => <div>
                <div>{row.address.city}</div>
                <div>{row.address.street}</div>
            </div>,
        },
        {
            name: "Delete",
            cell:  (row) => <Button  bg="#5e5e91" onClick={() => deleteUser((row as UserType).id)}>delete</Button>
        }
    ];

    return {column}
}


