interface Props {
    page: number;
    pageCount: number;
    onPageChange: (p: number) => void;
}

export default function Pagination({ page, pageCount, onPageChange }: Props) {
    return (
        <div className="flex items-center gap-2">
            <button
                className="btn"
                disabled={page === 1}
                onClick={() => onPageChange(page - 1)}
            >
                ← Prev
            </button>
            <span>{page}/{pageCount}</span>
            <button
                className="btn"
                disabled={page === pageCount}
                onClick={() => onPageChange(page + 1)}
            >
                Next →
            </button>
        </div>
    );
}