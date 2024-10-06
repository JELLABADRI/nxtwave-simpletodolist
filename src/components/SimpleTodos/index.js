import TodoItem from '../TodoItem'
import {Component} from 'react'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todoslist: initialTodosList}
  delfun = id => {
    const {todoslist} = this.state
    const up = todoslist.filter(each => each.id !== id)
    this.setState({todoslist: up})
  }

  render() {
    const {todoslist} = this.state
    return (
      <div>
        <div>
          <h1>Simple Todos</h1>
          <div>
            <ul>
              {todoslist.map(each => (
                <TodoItem details={each} key={each.id} delfun={this.delfun} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

// Write your code here

export default SimpleTodos
