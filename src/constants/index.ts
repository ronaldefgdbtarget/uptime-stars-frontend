export const statusMap = {
    Functional: 'bg-green-500',
    Down: 'bg-red-500',
    Pending: 'bg-yellow-500',
    Maintenance: 'bg-blue-500',
    Unknown: 'bg-gray-400',
    Paused: 'bg-purple-500',
} as const;

export type Status = keyof typeof statusMap;