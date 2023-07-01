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
            <div className={style.info}>
                <div className={style.logo}>
                    <div className={style.face}></div>
                    <div className={style.gt}></div>
                    <div className={style.youtube}></div>
                </div>
                <p>©2021 Hschool. Project for <span>Hschool</span>.</p>
            </div>
        </div>
    )
}

export default Footer