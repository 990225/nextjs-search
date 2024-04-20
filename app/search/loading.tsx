export default function SearchPageLoading() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => {
        return (
          <div className="flex items-center gap-1 animate-pulse" key={i}>
            <div className="w-1/2 aspect-square bg-gray-300 rounded-md" />

            <div className="space-y-1 w-[calc(50%-0.25rem)]">
              <div className="w-4/5 h-6 bg-gray-300 rounded-md"></div>
              <div className="h-4 bg-gray-300 rounded-md"></div>
              <div className="h-4 bg-gray-300 rounded-md"></div>
              <div className="w-1/2 h-5 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        );
      })}
    </>
  );
}
