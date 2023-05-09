import { FunctionComponent, useState, useEffect } from 'react';
import { Array } from '../../helpers/array';
import { PLANT_LIST } from '../../mocks/plantList';

export const Categories: FunctionComponent = () => {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const listCategories: string[] = Array.getUniqElement(PLANT_LIST, 'category');
        setCategories(listCategories);
    }, []);

    return (
        <ul>
            {categories.map((category: string, index: number) => (
                <li key={`${category}-${index}`}>{category}</li>
            ))}
        </ul>
    );
}