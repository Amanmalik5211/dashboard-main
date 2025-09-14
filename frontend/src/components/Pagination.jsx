const Pagination = ({ page, totalPages, onPrev, onNext }) => {
  return (
    <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
      <span>Page {page} of {totalPages}</span>
      <div className="space-x-2">
        <button
          className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-900"
          onClick={onPrev}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-900"
          onClick={onNext}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
