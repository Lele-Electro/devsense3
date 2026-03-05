import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortBy',
    standalone: true,
})
export class SortByPipe implements PipeTransform {
    /**
     * Sorts an array of objects by a given property.
     * @param value  - The array to sort.
     * @param key    - The property name to sort by.
     * @param order  - 'asc' (default) or 'desc'.
     */
    transform<T>(value: T[] | null | undefined, key: keyof T, order: 'asc' | 'desc' = 'asc'): T[] {
        if (!value || !key) {
            return value ?? [];
        }

        return [...value].sort((a, b) => {
            const aVal = a[key] ?? undefined;
            const bVal = b[key] ?? undefined;

            if (aVal == null && bVal == null) return 0;
            if (aVal == null) return 1;
            if (bVal == null) return -1;

            const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
            return order === 'asc' ? comparison : -comparison;
        });
    }
}
