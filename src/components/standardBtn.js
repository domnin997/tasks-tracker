import '../assets/styles/standardBtn.css';

function StandardBtn (props) {

    const {btnText, clickHandler} = props;

    return (
        <button className="standard-btn"
                onClick={clickHandler}>
            {btnText}
        </button>
    )
}

export default StandardBtn;