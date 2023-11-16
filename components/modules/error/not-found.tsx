import GoHomeButton from "../button/go-home"
import GoBackButton from "../button/go-back"

import general from "../../../data/lang/en/general.json"
    
export default function NotFound() {
    return (            
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
            <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
                <h1 className="flex justify-center text-7xl font-bold text-primary sm:text-9xl">
                    404
                </h1>
                <p className="mt-3 text-muted-foreground">
                    {`${general["terms"].something_wrong}.`}
                    <br />
                    {`${general["terms"].couldnt_find}.`}
                </p>
                <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                    <GoHomeButton type="primary" />
                    <GoBackButton type="basic" />
                </div>
            </div>
        </div>
    )
}