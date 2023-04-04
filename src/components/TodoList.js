import React, {useState} from 'react'
import {Row, Col, Button, FormControl} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrash, faEdit, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

function TodoList({todo, setTodo}) {
    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('')
    function deleteTodo(id) {
        let newTodo = [...todo].filter( item => item.id!=id)
        setTodo(newTodo);
    }
    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id == id){
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }
    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }
    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if(item.id == id) {
                item.title = value
            }
            return item
    })
        setTodo(newTodo)
        setEdit(null)
    }
    return(
        <div>
            {
            todo.map( item => (
            <div key={item.id} className='listItems'>
                { edit == item.id ? <div>
                    <input onChange={(e) => setValue(e.target.value)} value={value} />
                    </div> : 
                    <div className={ !item.status ? "close" : ''}>{item.title}</div>
                } 
                { edit == item.id ? <div> 
                        
                    <Button variant='success' onClick={() => saveTodo(item.id)}><FontAwesomeIcon icon={faSave} /></Button>
                    </div> : <div>
                        <Button variant='success' onClick={() => deleteTodo(item.id)}><FontAwesomeIcon icon={faTrash} /></Button>
                        <Button variant='success' className="btn" onClick={() => editTodo(item.id, item.title)}><FontAwesomeIcon icon={faEdit} /></Button>
                        <Button variant='success' className="btn" onClick={() => statusTodo(item.id)}>
                            { item.status ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faLockOpen} />}
                        </Button>
                    </div>
                }
            </div>
        ))
    }
    </div>
    )
}
export default TodoList