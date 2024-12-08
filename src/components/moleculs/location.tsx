import { SiGooglemaps } from "react-icons/si";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Button } from '../atoms/button';

const Location = () => {
    const position: [number, number] = [-6.640663283754504, 106.83441077590246]; // koordinat untuk marker

    // URL Google Maps dengan koordinat
    const googleMapsUrl = `https://www.google.com/maps?q=${position[0]},${position[1]}`;

    return (
        <div className='relative'>
            <MapContainer className="" center={position} zoom={13} style={{ width: '100%', height: '400px' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} />

            </MapContainer>
            <Button
                id="location-button"
                className='bg-blue-600 mt-2 hover:bg-blue-400'
                onClick={() => window.open(googleMapsUrl, "_blank")}
            >
                <SiGooglemaps /> Lihat di Google Maps
            </Button>
        </div>
    );
}

export default Location;
