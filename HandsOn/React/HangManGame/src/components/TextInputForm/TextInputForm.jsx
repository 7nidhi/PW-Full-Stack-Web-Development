import Button from "../Buttons/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({handleFormSubmit,handleTextInputChange}){

    return(
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
                    label={"Enter a word or phrase here"}
                    placeholder={"Enter a word or phase"}
                    onChangeHandler={handleTextInputChange}
                />
            </div>
            <div>
                <Button
                    styleType="warning"
                    text="Show / Hide"                  
                />
            </div>
            <div>
                <Button
                type="submit"
                styleType="primary"
                text="Submit"
                />
            </div>
        </form>

    );
}
export default TextInputForm;