import ReferenceItem from "./ReferenceItem";

const ReferenceList = ({ references, }) => {
    return (
        <section id="references">
            <div className="container">
                <header className="section-header">
                    {references.sectionTitle}
                </header>
                <div className="references-container">
                    <div className="referenceItem-container">
                        <ReferenceItem
                            referees={references.referees}
                        />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ReferenceList;