export function smartJoin(array: string[]) {
    if (array.length > 2) {
        return array.join(', ');
    }
    return array.join(' ');
}
