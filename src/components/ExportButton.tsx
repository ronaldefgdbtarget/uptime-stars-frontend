import { exportToExcel } from '@/utils/exportExcel';

export const ExportButton = ({ data }: { data: any[] }) => (
    <button
        onClick={() => exportToExcel(data, 'uptime-events')}
        className="bg-blue-600 text-white px-3 py-1 rounded"
    >
        Download Excel
    </button>
);