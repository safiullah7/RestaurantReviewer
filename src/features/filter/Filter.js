import React, { useState } from 'react'
import { Dropdown, Divider, Button } from 'semantic-ui-react';

const Filter = ({minRating, setMinRating, maxRating, setMaxRating, filterRestaurants}) => {

    // const [mindd, setMindd] = useState(false);
    // const [maxdd, setMaxdd] = useState(false);
    
    const options = [
        {
            key: '0star',
            text: '0 Star',
            value: '0',
        },
        {
            key: '1star',
            text: '1 Star',
            value: '1',
        },
        {
            key: '2star',
            text: '2 Star',
            value: '2',
        },
        {
            key: '3star',
            text: '3 Star',
            value: '3',
        },
        {
            key: '4star',
            text: '4 Star',
            value: '4',
        },
        {
            key: '5star',
            text: '5 Star',
            value: '5',
        }
    ];
    
    const handleChangeMin = (e, { value }) => {
        setMinRating(value);
        // filterRestaurants();
        // setMindd(true);
    }
    const handleChangeMax = (e, { value }) => {
        setMaxRating(value);
        // filterRestaurants();
        // setMaxdd(true);
    }
    return (
        <div style={{marginTop: '1em'}}>
            <Dropdown
                placeholder='Minimum Rating'
                compact
                closeOnEscape
                selection
                options={options}
                onChange={handleChangeMin}
                
                value={minRating}
                // selectedLabel={minRating}
            />{' '}
            <Dropdown
                placeholder='Maximum Rating'
                compact
                closeOnEscape
                selection
                options={options}
                onChange={handleChangeMax}
                value={maxRating}
                // selectedLabel={maxRating}
            /> <br/>
            <Button
                style={{marginTop: '1em'}}
                positive
                icon="checkmark"
                labelPosition="right"
                content="Apply"
                onClick={filterRestaurants}
                // disabled={!(mindd && maxdd)}
            />
            <Divider />
        </div>
    )
}

export default Filter
