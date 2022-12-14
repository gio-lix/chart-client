import React, {FC, memo} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input, Row, Col, FormGroup
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {ChangeEvent, UserType} from "../types/typing";

interface Props {
    title: string
    modalCreateOrUpdate: UserType
    setModalCreateOrUpdate: Function
    handleSubmit: () => void
}


const ModalComp: FC<Props> = ({
                                  modalCreateOrUpdate,
                                  setModalCreateOrUpdate,
                                  title,
                                  handleSubmit
                              }) => {

    const toggle = () => setModalCreateOrUpdate(null);


    const handleChange = (e: ChangeEvent) => {
        const {name, value} = e.target
        setModalCreateOrUpdate({...modalCreateOrUpdate, [name]: value})
    }

    const handleChangeAddress = (e: ChangeEvent) => {
        const {name, value} = e.target
        setModalCreateOrUpdate({...modalCreateOrUpdate, address: {...modalCreateOrUpdate?.address, [name]: value}})
    }

    const handleChangeSelector = (e: ChangeEvent) => {
        const {value} = e.target
        setModalCreateOrUpdate({...modalCreateOrUpdate, gender: value.toLowerCase()})
    }


    return (
        <>
            <Modal isOpen={!!modalCreateOrUpdate} toggle={toggle}>
                <ModalHeader toggle={toggle}/>
                <ModalBody>
                    <article>
                        <div>
                            <Input
                                invalid={!modalCreateOrUpdate?.name}
                                name="name"
                                className="mb-3"
                                placeholder="Full name"
                                value={modalCreateOrUpdate?.name || ""}
                                onChange={handleChange}
                            />

                            <Input
                                invalid={!modalCreateOrUpdate?.email}
                                name="email"
                                className="mb-3"
                                placeholder="Email"
                                value={modalCreateOrUpdate?.email || ""}
                                onChange={handleChange}
                            />
                            <Input
                                name="phone"
                                className="mb-3"
                                type="tel"
                                placeholder="Phone"
                                value={modalCreateOrUpdate?.phone || ""}
                                onChange={handleChange}
                            />
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input
                                            invalid={!modalCreateOrUpdate?.address?.city}
                                            name="city"
                                            className="mb-3"
                                            type="text"
                                            placeholder="City"
                                            value={modalCreateOrUpdate?.address?.city || ""}
                                            onChange={handleChangeAddress}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input
                                        name="street"
                                        className="mb-3"
                                        type="text"
                                        placeholder="Street"
                                        value={modalCreateOrUpdate?.address?.street || ""}
                                        onChange={handleChangeAddress}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        className="mb-3"
                                        type="select"
                                        placeholder="Gender"
                                        name="Gender"
                                        onChange={handleChangeSelector}
                                    >
                                        <option hidden>
                                            {modalCreateOrUpdate?.gender ? modalCreateOrUpdate?.gender : "Gender"}
                                        </option>
                                        <option>
                                            Female
                                        </option>
                                        <option>
                                            Male
                                        </option>
                                    </Input>
                                </Col>
                            </Row>


                        </div>
                    </article>
                </ModalBody>
                <ModalFooter>
                    <Button
                        disabled={!modalCreateOrUpdate?.address?.city
                            || !modalCreateOrUpdate?.email
                            || !modalCreateOrUpdate?.name
                        }
                        color="primary" onClick={handleSubmit}>
                        {title === "save" ? "Save Changes" : "Create"}
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
};

export default memo(ModalComp);