import React from 'react';
import TaskList from './TaskList';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var {categories, 
                tasks, 
                onDeleteTask,
                onEditTaskDesc, 
                onToggleComplete, 
                onEditTask, 
                onToggleEdit,
                onDragover,
                onDrag,
                onDrop
        } = this.props;
        
        var taskLists = categories.map((cat) => {
            var filteredTasks = tasks.filter((task) => {
                if(task.category == cat) return task;
            });
            return (
                <div 
                    className="category"
                    key ={cat}
                    onDragOver={(e) => { onDragover(e)}}
                    onDrop={(e) =>{onDrop(e, cat)}}>
                    {cat}
                    <TaskList tasks= {filteredTasks}
                        onDeleteTask={onDeleteTask}
                        onToggleComplete={onToggleComplete}
                        onToggleEdit={onToggleEdit}
                        onEditTaskDesc={onEditTaskDesc}
                        onEditTask={onEditTask}
                        onDrag={onDrag}
                    />
                </div>
            )
        });
        return (
            taskLists
        );
    }
}
