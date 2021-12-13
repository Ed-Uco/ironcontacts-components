import { useState } from 'react';
import SortByName from './SortByName';
const RandomContact = ({random})=>{
    return (
        <div>
            <tbody>
                {random.map(elemento => {
                    return (
                        <tr key={elemento.id}>
                            <td>
                                <img src={elemento.pictureUrl} width="150" />
                            </td>
                            <td>
                                <h2>{elemento.name}</h2>
                            </td>
                            <td>{elemento.popularity}</td>
                        </tr>
                    );
                })}
            </tbody>
        </div>
    );
};

export default RandomContact;
