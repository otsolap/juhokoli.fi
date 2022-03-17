import Image from 'next/image'

const ThemeBlock = ({ themes }) => {
    return (
        <>
            {themes.themes.map((theme, i) => {
                const bgStyle = []
                if (i % 2 === 0) {
                    bgStyle.push('white-bg')
                } else {
                    bgStyle.push('gray-bg')
                }
                return (
                    <section
                        key={i}
                        id={theme.title}
                        className={bgStyle}
                    >
                        <div className="container">
                            <div className="image-container">
                                <Image
                                    src={theme.image}
                                    alt={theme.title}
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className="content">
                                <h2>{theme.title}</h2>
                                <p>{theme.description}</p>
                            </div>
                        </div>
                    </section>
                )
            })}
        </>
    )
}

export default ThemeBlock