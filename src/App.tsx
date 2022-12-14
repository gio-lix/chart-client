import React, {useEffect, useState, useCallback} from 'react';

import {ChartContainer, TableContainer} from "./styles/custom/global";

import usersStore from "./store";
import ModalComp from "./components/Modal";

import DataTableComp from "./components/DataTableComp";
import Chart from "./components/Chart";

import {UserType} from "./types/typing";
import {Container} from "reactstrap";


function App() {
    const {addUsers, updateUser,createUser} = usersStore(state => state)

    const [modalCreateOrUpdate, setModalCreateOrUpdate] = useState<UserType | null>()
    const [modalTitle, setModalTitle] = useState<string>("")


    const handleUpdate = (row: UserType) => {
        setModalCreateOrUpdate(row)
    }

    const handleSubmit = useCallback(() => {
        if (modalTitle === "save") {
            updateUser(modalCreateOrUpdate!)
        } else {
            createUser(modalCreateOrUpdate!)
        }
        setModalCreateOrUpdate(null)
    },[modalCreateOrUpdate])



    useEffect(() => {
        let mounted = true;

        fetch("http://localhost:9008")
            .then(res => res.json())
            .then(data => {
                if (mounted) {
                    addUsers(data)
                }
            })
            .catch(err => console.log("err -> ", err))

        return () => {mounted = false}
    },[addUsers])



    return (
        <Container>
            <ModalComp
                title={modalTitle}
                handleSubmit={handleSubmit}
                setModalCreateOrUpdate={setModalCreateOrUpdate}
                modalCreateOrUpdate={modalCreateOrUpdate!}
            />

            <TableContainer>
                <DataTableComp
                    handleUpdate={handleUpdate}
                    setModalTitle={setModalTitle}
                />
            </TableContainer>

            <ChartContainer >
                <Chart />
            </ChartContainer>
        </Container>
    );
}

export default App;
