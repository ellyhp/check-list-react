import React from 'react';


function TodoSearch(
    {
    searchValue,
    setSeachValue,
    }
) {

        return (
            <input className="inputContent" 
            placeholder="Cortar cebolla"
            value={searchValue}  
            onChange={(event) => {
                setSeachValue(event.target.value);
                }
            }
            />
        );
    }


export { TodoSearch };