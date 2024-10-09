import getButtonStyling from "./getButtonStyling";
function Button({text, onClickHandler,styleType="primary"}){
    console.log(text);

    return(
        
        <button onClick={onClickHandler}
        className="{`px-4 py-2 ${getButtonStyling(styleType)} texr-white`}"
        >
            {text}
        </button>
    );
}
export default Button;