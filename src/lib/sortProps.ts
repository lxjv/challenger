export function sortProps<T>(
    array: T[],
    getProperty: (item: T) => number | string | Date,
    descending: boolean = true,
): T[] {
    return array.sort((a, b) => {
        const aValue = getProperty(a);
        const bValue = getProperty(b);

        if (aValue < bValue) {
            return descending ? 1 : -1;
        } else if (aValue > bValue) {
            return descending ? -1 : 1;
        } else {
            return 0;
        }
    });
}
