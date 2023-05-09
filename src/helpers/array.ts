export class Array {

    public static getUniqElement<T, K extends keyof T>(
        list: T[],
        key: K
    ): T[K][] {
        const array: T[K][] = [];
        for (const item of list) {
            if (!array.includes(item[key])) {
                array.push(item[key]);
            }
        }
        return array;
    }
}