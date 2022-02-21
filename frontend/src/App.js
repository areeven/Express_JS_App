import React from 'react'
import appStyle from './App.module.css'

function App() {
    return (
        <div id={appStyle.wrapper}>
            <header className={appStyle.header}>
                <h2 className={appStyle.headingLogo}>Easy Working</h2>
            </header>
            <article className={appStyle.Grid}>
                <section className={appStyle.sectionSide}>
                    sidebar
                </section>
                <section className={appStyle.sectionMid}>
                    main
                </section>
                <section className={appStyle.sectionSide}>
                    <ul>
                        <li>home</li>
                        <li>profile</li>
                        <li>shared</li>
                        <li>call</li>
                        <li>chat</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
                </section>
            </article>
        </div>
    )
}

export default App
