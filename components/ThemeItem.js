import Image from 'next/image'

const ThemeItem = ({ themes }) => {
    return (
        <div className="reference">
            {themes.map((theme, i) => (
                <div id={`refence-item-${i}`} key={i}>
                    <div className="image-container">
                        <Image
                            width={50}
                            height={50}
                            alt={theme.title}
                            src={theme.image}
                        />
                    </div>
                    <div className="container">
                        <div className="content">
                            <h2>{theme.title}</h2>
                            <h4>{theme.description}</h4>
                        </div>
                        <div className="button-wrapper">
                            <a className="button"
                                href={theme.link}
                            >
                                {theme.cta}
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ThemeItem