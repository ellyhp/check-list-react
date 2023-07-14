 function CreateTodoButton() 
 {
    return (
        <button className="btn" onClick={
            (event) => console.log('le diste click')}
            >+</button>
    );
 }

export {  CreateTodoButton };