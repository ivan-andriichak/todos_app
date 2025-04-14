
function LoadingSkeleton() {
  return (
    <div>
      <div className="p-4 bg-white rounded-lg shadow-md animate-pulse">
        <div className="h-5 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

export default LoadingSkeleton;