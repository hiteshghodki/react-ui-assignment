import { Search } from 'lucide-react'

export default function EmptyState({
  title = 'No jobs found',
  description = "We couldn't find any job matches. Try searching for a different keyword or adjusting your filters.",
  actionText = 'Clear all filters',
  onAction
}) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        <Search size={22} />
      </div>
      <h3 className="mt-3.5 text-base font-bold text-slate-900">{title}</h3>
      <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
        {description}
      </p>
      {onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-4 rounded-xl bg-blue-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-blue-700 transition cursor-pointer"
        >
          {actionText}
        </button>
      )}
    </div>
  )
}
