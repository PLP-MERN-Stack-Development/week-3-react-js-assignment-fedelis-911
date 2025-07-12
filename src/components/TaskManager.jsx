import { useState, useEffect } from 'react'
import { Plus, Trash2, Check, Filter } from 'lucide-react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Checkbox } from './ui/checkbox'

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('all') // 'all', 'active', 'completed'

  // Generate unique ID for new tasks
  const generateId = () => Date.now().toString()

  // Add new task
  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: generateId(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      }
      setTasks(prev => [...prev, task])
      setNewTask('')
    }
  }

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  // Filter tasks based on current filter
  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'active':
        return !task.completed
      case 'completed':
        return task.completed
      default:
        return true
    }
  })

  // Handle Enter key press in input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask()
    }
  }

  // Get task statistics
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  const activeTasks = totalTasks - completedTasks

  const filterOptions = [
    { value: 'all', label: 'All', count: totalTasks },
    { value: 'active', label: 'Active', count: activeTasks },
    { value: 'completed', label: 'Completed', count: completedTasks }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6" id="tasks">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Task Manager
          </CardTitle>
          <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
            <span>Total: {totalTasks}</span>
            <span>Active: {activeTasks}</span>
            <span>Completed: {completedTasks}</span>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Add Task Section */}
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Add a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button onClick={addTask} disabled={!newTask.trim()}>
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>

          {/* Filter Section */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <Button
                key={option.value}
                variant={filter === option.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(option.value)}
                className="flex items-center space-x-2"
              >
                <Filter className="h-3 w-3" />
                <span>{option.label}</span>
                <Badge variant="secondary" className="ml-1">
                  {option.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Tasks List */}
          <div className="space-y-2">
            {filteredTasks.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                {filter === 'all' 
                  ? 'No tasks yet. Add one above!' 
                  : `No ${filter} tasks.`
                }
              </div>
            ) : (
              filteredTasks.map((task) => (
                <Card key={task.id} className="transition-all hover:shadow-md">
                  <CardContent className="flex items-center space-x-3 p-4">
                    <Checkbox
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)}
                      className="flex-shrink-0"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm ${
                        task.completed 
                          ? 'line-through text-muted-foreground' 
                          : 'text-foreground'
                      }`}>
                        {task.text}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Created: {new Date(task.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 flex-shrink-0">
                      {task.completed && (
                        <Badge variant="secondary" className="text-xs">
                          <Check className="h-3 w-3 mr-1" />
                          Done
                        </Badge>
                      )}
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteTask(task.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Task Summary */}
          {totalTasks > 0 && (
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <div className="flex justify-between items-center text-sm">
                <span>Progress:</span>
                <span>{completedTasks} of {totalTasks} completed</span>
              </div>
              <div className="w-full bg-background rounded-full h-2 mt-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0}%` }}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default TaskManager

