import { Link } from 'react-router-dom'
import style from './style.module.css'

function Footer() {
    return (
        <div className={style.content}>
            <div className={style.navigation}>
                <div className={style.menu}>
                    <Link>Home</Link>
                    <Link>Textbook</Link>
                    <Link>Statistics</Link>
                    <Link>Sprint</Link>
                </div>
                <div>
                    <Link>Alex</Link>
                    <Link>Gabriel</Link>
                    <Link>Marcus</Link>
                </div>
            </div>
            <div className={style.line}></div>
            <div></div>
        </div>
    )
}

export default Footer