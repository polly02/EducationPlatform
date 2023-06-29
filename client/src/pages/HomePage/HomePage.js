import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import style from "./style.module.css"

function HomePage() {
    return (
        <>
            <Header></Header>

            <div className={style.preview}>
                <div className={style.content}>
                    <p className={style.textPlatform}>E-COURSE PLATFORM</p>
                    <h1>Learning and teaching online, made easy.</h1>
                    <p className={style.textAdditional}>Any subject, in any language, on any device, for all ages!</p>
                    <div className={style.btn}>About platform</div>
                    <div className={style.statistic}>
                        <p className={style.studentsCount}><span className={style.lightning}></span> 600 <span className={style.plus}>+</span></p>
                        <p className={style.studentsText}>Students</p>
                    </div>
                </div>
                <div className={style.img}></div>
            </div>

            <div className={style.playing}>
                <div className={style.img}></div>
                <div className={style.content}>
                    <h2>Learn a language in a playful way</h2>
                    <p>Make learning programming languages more fun with mini-games</p>
                    <div className={style.modals}>
                        <div className={style.sprint}>
                            <div className={style.shoes}></div>
                            Sprint →</div>
                        <div className={style.task}>
                            <div className={style.megaphone}></div>
                            Tasks →</div>
                    </div>
                </div>
            </div>

            <div className={style.textbook}>
                <div className={style.content}>
                    <h2>Increase your knowledge</h2>
                    <p>Traditional and new effective approaches to learning languages</p>
                    <div className={style.btn}>Textbook →</div>
                </div>
                <div className={style.img}></div>
            </div>

            <div className={style.statistics}>
                <div className={style.img}></div>
                <div className={style.content}>
                    <h2>Watch your progress every day</h2>
                    <p>Save statistics on your achievements and mistakes</p>
                    <div className={style.btn}>Statistics →</div>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default HomePage