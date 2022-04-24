import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";

import s from './index.scss'

export const Autocomplete = () => {

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        initOnMount:false,
        requestOptions: {
        },
        debounce: 300,
    });
    const ref = useOnclickOutside(() => {
        clearSuggestions();
    });

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect =
        ({ description }) =>
            () => {
                
                setValue(description, false);
                clearSuggestions();

            
                getGeocode({ address: description })
                    .then((results) => getLatLng(results[0]))
                    .then(({ lat, lng }) => {
                        console.log("📍 Coordinates: ", { lat, lng });
                    })
                    .catch((error) => {
                        console.log("😱 Error: ", error);
                    });
            };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <li key={place_id} onClick={handleSelect(suggestion)}>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            );
        });

    return (

        <div className='autocomplete_container' ref={ref}>
            <input type='text' className='autocomplete_container_input'
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Where are you going?" />
            {status === "OK" && <ul>{renderSuggestions()}</ul>}

        </div>

    );
}


