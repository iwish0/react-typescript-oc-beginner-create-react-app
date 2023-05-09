import { FunctionComponent, useState, useEffect } from 'react';
import './ShoppingItem.css';

type Props = {
    productName: string;
    isBestSale: boolean;
    isSpecialOffer: boolean;
}

export const ShoppingItem: FunctionComponent<Props> = ({ productName, isBestSale }) => {
    const [item, setItem] = useState<string>('');

    const bestSeller: JSX.Element | null = isBestSale ? <span className='solde'>Soldes</span> : null;
    const handleSelectItem = (name: string, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        alert(`Vous avez sélectionné le produit: ${name}`);
        setItem(name);
    }

    useEffect(() => {
        document.title = item;
    }, [item])

    return (
        <div onClick={(e) => handleSelectItem(productName, e)}>
            <span>{productName}</span>
            {isBestSale && <span className='levelSaleEmoji'>🔥</span>}
            {bestSeller}
        </div>
    );
}