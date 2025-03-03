import { createEvent, readEvent, updateEvent, deleteEvent, getCollectionSize } from "../config/firebase";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function AddEvent() {
    const [show, setShow] = useState(false);
    const [eventData, setEventData] = useState({ name: "", date: "" });
    const history = useHistory();

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleChange = (e) =>
        setEventData({ ...eventData, [e.target.name]: e.target.value });

    const handleSubmit = async () => {
        try {
            await createEvent(eventData);
            history.push("/events");
        } catch (error) {
            console.error("Error creating event:", error);
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Event
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a New Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={eventData.name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="date"
                                value={eventData.date}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Event
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddEvent;
