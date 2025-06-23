import {statusMap} from "../constants";


export const StatusBadge = ({ status }: { status: keyof typeof statusMap }) => (
    <span className={`text-white text-xs px-2 py-1 rounded-full ${statusMap[status]}`}>
    {status}
  </span>
);