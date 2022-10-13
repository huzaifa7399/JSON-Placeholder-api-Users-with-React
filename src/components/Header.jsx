import Button from "./Button"

const Header = ({ onAdd, showAdd }) => {

    return (
        <header className="header">
            <h1 >REACT FETCH</h1>
            <Button color={showAdd ? 'RED' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}


export default Header