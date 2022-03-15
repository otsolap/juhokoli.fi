export default function Layout({ children, ...props }) {
    return (
        <section className="layout">
            <div className="content">{children}</div>
        </section>
    )
}