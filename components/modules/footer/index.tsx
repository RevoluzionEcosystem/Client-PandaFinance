import general from "../../../data/lang/en/general.json"

export default function Footer() {
    return (        
        <footer className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
            <div className="text-center">
                <div className="mt-3">
                    <p className="text-muted-foreground">
                        {`${general.project_copyright}.`}
                    </p>
                    <p className="text-muted-foreground font-semibold">
                        {`${general["terms"].powered_by}`} <a href={general["development"].link} title={general["development"].title} target="_blank">{general["development"].name}</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}