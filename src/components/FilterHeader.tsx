export const FilterHeader = () => (
    <div className="flex flex-wrap gap-2 items-center p-2">
        <button className="bg-green-400 text-white px-3 py-1 rounded">+ Add new monitor</button>
        <select className="border rounded px-2 py-1">
            <option>Status</option>
            <option>Functional</option>
            <option>Down</option>
            <option>Pending</option>
        </select>
        <select className="border rounded px-2 py-1">
            <option>Active</option>
            <option>Working</option>
            <option>Paused</option>
        </select>
        <input type="text" placeholder="Search..." className="border px-2 py-1 rounded" />
    </div>
);