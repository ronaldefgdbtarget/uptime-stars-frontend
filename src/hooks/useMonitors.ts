import { useQuery } from '@tanstack/react-query';
import { getMonitors, MonitorDto, Paginated } from '@/api/monitors';

export function useMonitors(
    pageNumber: number,
    pageSize = 10,
    lastEventsLimit = 3
) {
    return useQuery<Paginated<MonitorDto>, Error>({
        queryKey: ['monitors', pageNumber, pageSize, lastEventsLimit],
        queryFn: () => getMonitors(pageNumber, pageSize, lastEventsLimit),
        placeholderData: previousData => previousData,
    });
}
