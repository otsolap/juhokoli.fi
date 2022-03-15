import Header from './Header'

export default function Layout({ children, ...props }) {
    return (
        <>
            <section className="layout">
                <Header />
                <div className="content">{children}</div>
            </section>
            <footer>Built by me!</footer>
        </>
    )
}