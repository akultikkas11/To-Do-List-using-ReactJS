
const AddButton = ({ handleAdd, disabled })=>{
    const style = {
        padding: "5px",
        borderRadius: "8px",
        border: "1px solid gray",
        width: "50px",
        height: "30px",

        cursor: disabled ? "not-allowed" : "pointer",
    }
    
    // The handleAdd function is passed as a prop from Input.js
    // It will be called when the button is clicked
    return (
        <button style={style} onClick={handleAdd} disabled={disabled}>Add </button>
    )
}

export default AddButton;