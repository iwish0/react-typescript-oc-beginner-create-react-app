import { FunctionComponent } from 'react';
import { ShoppingItem } from '../ShoppingItem/ShoppingItem';
import { PLANT_LIST } from '../../mocks/plantList';

export const ShoppingList: FunctionComponent = () => {
    return <ul>
        {PLANT_LIST.map(({ id, name, isBestSale, isSpecialOffer }) => (
            <li key={id}><ShoppingItem productName={name} isBestSale={isBestSale} isSpecialOffer={isSpecialOffer} /></li>
        ))}
    </ul>
}