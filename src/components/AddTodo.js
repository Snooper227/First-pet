import React, {useState} from 'react';
import uuid from 'react-uuid';
import {Row, Col, Button, FormControl} from 'react-bootstrap';


function AddTodo({todo, setTodo}) {
    const [value, setValue] = useState('')

    function saveTodo() {
        setTodo(
            [...todo, {
                id: uuid(),
                title: value,
                status: true
            }]
        )
        setValue('')
    }

    return(
        <Row>
            <Col className='addTodoForm'>
                <FormControl placeholder='Enter your task' value = {value} onChange = {(e) => setValue(e.target.value)} />
                <Button className="btn" onClick={saveTodo} type='submit' variant='success'>Save</Button>
            </Col>
        </Row>
    )
}
export default AddTodo