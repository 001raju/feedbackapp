import PropTypes from 'prop-types';
import styles from './Header.module.css';

function Header({text='default'}){
    return (
        <header>
            <div className = {styles.container} >
               {text}
            </div>
        </header>
    );
}
Header.propTypes = {
    text: PropTypes.string.isRequired,
};
export default Header;