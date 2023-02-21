import styles from './Header.module.css';

function Header({text}){
    return (
        <header>
            <div className = {styles.container} >
                Header {text}
            </div>
        </header>
    )
}
export default Header;