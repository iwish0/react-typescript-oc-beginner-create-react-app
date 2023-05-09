import { FunctionComponent } from 'react';

type Props = {
    careType: string;
    scaleValue: number;
}

export const CareScale: FunctionComponent<Props> = ({ careType, scaleValue }) => {
    const listeRange: number[] = [1, 2, 3];
    const scaleType: string = careType === 'light' ? '☀️' : '💧';

    return null

}