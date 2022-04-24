
import s from './index.scss';
import { YMaps, Map, Placemark } from 'react-yandex-maps';


function YandexMap() {
    return (
        <YMaps className=''>

            <div id="map" className="yandexMap">
                <Map className='Ymap'
                    defaultState={{
                        center: [54.3282, 48.3866], zoom: 12
                    }}>
                        <Placemark geometry={[55.75, 37.57]} />

                </Map>

            </div>
        </YMaps>
    );
}


export default YandexMap;