import './DeleteUser.css'

function DeleteUser({ id, onDeleteUser }) {
  return (
    <div className="DeleteUser">
      <i
        role="button"
        className="fa fa-trash-o mt-2"
        aria-hidden="true"
        onClick={() => onDeleteUser(id)}
      > Delete</i>
    </div>
  );
}

DeleteUser.defaultProps = {
  onDeleteUser: () => {},
};

export default DeleteUser;