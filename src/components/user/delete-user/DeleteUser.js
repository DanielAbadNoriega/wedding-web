

function DeleteUser ({id, onDeleteContact}) {
    return(
        <i className="fa fa-times text-danger" role="button" onClick={() => onDeleteContact(id)}></i>
    )
}

export default DeleteUser;