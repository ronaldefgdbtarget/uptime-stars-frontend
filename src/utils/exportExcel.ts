import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export function exportToExcel(data: any[], filename: string) {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');
    const blob = new Blob(
        [XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })],
        { type: 'application/octet-stream' }
    );
    saveAs(blob, `${filename}.xlsx`);
}