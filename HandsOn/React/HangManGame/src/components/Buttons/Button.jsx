function Button({text, onClickHandler}){
    console.log(text);

    return(
        
        <button onClick={onClickHandler}
        style={{'backgroundColor':'Red','color':'white'}}
        >
            {text}
        </button>
    );
}
export default Button;