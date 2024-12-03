const LocationDetail = () => {
    return (
        <div className="space-y-2">
            <header>
                <h1 className="text-h1 font-montserrat-alt font-semibold text-foreground">Address</h1>
            </header>
            <div>
                <p className="text-base font-semibold">
                    <span>Country</span>
                    <span>{" "}:{" "}</span>
                    <span>Indonesia</span>
                </p>
                <p className="text-base font-semibold">
                    <span>City</span>
                    <span>{" "}:{" "}</span>
                    <span>Bogor</span>
                </p>
                <p className="text-base font-semibold">
                    <span>Address</span>
                    <span>{" "}:{" "}</span>
                    <span>Kp.Tajur, RT.04, RW.03, Kel.Muarasari, Kec.Bogor Selatan</span>
                </p>
                <p className="text-base font-semibold">
                    <span>Postal Code</span>
                    <span>{" "}:{" "}</span>
                    <span>16137</span>
                </p>
                <p className="text-base font-semibold">
                    <span>Details</span>
                    <span>{" "}:{" "}</span>
                    <span>Lokasi sebrang pom bensin pertamina, di samping shop n drive</span>
                </p>
            </div>
        </div>
    )
}

export default LocationDetail