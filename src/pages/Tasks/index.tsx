import React, {useState, useEffect} from "react";
import {Table, Badge} from "react-bootstrap"
import api from '../../services/api'

interface ITask {
    id: number;
    title: string;
    description: string;
    finish: boolean;
    created_at: Date;
    updated_at: Date;

}

const Tasks: React.FC = () => {

    const [tasks, setTasks] = useState<ITask[]>([])

    useEffect(() => {
        loadTasks()
    }, [])

    async function loadTasks(){
        const response = await api.get('/tasks')
        console.log(response)
        setTasks(response.data)
    }

    return (
        <div className="container">
            < br/>
            <h1> Tarefas </h1>
            <br />
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TÍTULO</th>
                        <th>DATA DE ATUALIZAÇÃO</th>
                        <th>STATUS</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>{task.updated_at}</td>
                                <td>
                                    <Badge variant={task.finish ?  "success" : "warning"}>
                                        {task.finish ? "FINALIZADO" : "PENDENTE"}
                                    </Badge>
                                </td>
                                <td></td>
                            </tr>
                        ))
                    }
                    
                </tbody>
                </Table>

        </div>
    )
}

export default Tasks
