// Write your code here

const TodoItem = props => {
  const {details, delfun} = props
  const {id, title} = details
  const ondel = () => {
    delfun(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={ondel}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
