import Container from "@/components/atoms/container"
import Location from "@/components/moleculs/location"
import LocationDetail from "@/components/organisme/location/location-detail"

const LocationPage = () => {
    return (
        <div>
            <Container className="grid grid-cols-1 md:grid-cols-2 pt-20 pb-20 gap-4">
                <Location />
                <LocationDetail />
            </Container>
        </div>
    )
}

export default LocationPage