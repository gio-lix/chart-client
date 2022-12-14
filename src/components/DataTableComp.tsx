import React, {FC, memo} from 'react';
import DataTable from "react-data-table-component";

import {Button} from "../styles/custom/Button";

import {UserType} from "../types/typing";
import {useColumn} from "../utils/column";

import usersStore from "../store";


interface Props {
    setModalTitle: (t: string) => void
    handleUpdate: Function
}

const DataTableComp:FC<Props> = ({setModalTitle,handleUpdate}) => {
    const {users} = usersStore(state => state)

    const {column} = useColumn()


    return (
        <DataTable
            columns={column}
            data={users}
            fixedHeader
            fixedHeaderScrollHeight="350px"
            selectableRowsHighlight
            highlightOnHover
            onRowDoubleClicked={(row) => {
                setModalTitle("save")
                handleUpdate(row)
            }}
            subHeader
            subHeaderComponent={
                <Button bg="#00cc00" onClick={() => {
                    setModalTitle("create")
                    handleUpdate({} as UserType)
                }} >
                    Add Row
                </Button>
            }
        />
    );
};

export default memo(DataTableComp);