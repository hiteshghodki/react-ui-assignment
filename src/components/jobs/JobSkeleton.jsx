export default function JobSkeleton() {
  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-4.5" aria-label="Loading job">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 flex-1 min-w-0">
          <div className="skeleton-shimmer h-11 w-11 sm:h-12 sm:w-12 rounded-xl shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="skeleton-shimmer h-4 w-40 rounded" />
            <div className="skeleton-shimmer h-3 w-24 rounded" />
            <div className="skeleton-shimmer h-3 w-52 rounded" />
          </div>
        </div>
        <div className="hidden sm:flex flex-col items-end gap-2">
          <div className="skeleton-shimmer h-4 w-24 rounded" />
          <div className="skeleton-shimmer h-3 w-14 rounded" />
        </div>
      </div>
    </div>
  )
}