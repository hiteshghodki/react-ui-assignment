import { forwardRef } from 'react'
import JobCard from './JobCard'
import JobSkeleton from './JobSkeleton'
import EmptyState from '../ui/EmptyState'

const JobList = forwardRef(function JobList(
  {
    activeTab,
    isFiltered,
    filteredJobs,
    loading,
    saved,
    onToggleSave,
    onClearFilters
  },
  ref
) {
  return (
    <section ref={ref} id="featured-jobs" className="min-w-0 scroll-mt-20">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
            {activeTab === 'Saved Jobs' ? 'Saved Jobs' : 'Featured Jobs'}
          </h2>
          {isFiltered && (
            <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
              {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={onClearFilters}
          className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 transition cursor-pointer"
        >
          View all
        </button>
      </div>

      {loading ? (
        <div className="space-y-3 sm:space-y-3.5" aria-live="polite">
          {[1, 2, 3, 4].map((n) => (
            <JobSkeleton key={n} />
          ))}
        </div>
      ) : filteredJobs.length > 0 ? (
        <div className="space-y-3 sm:space-y-3.5">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              saved={saved.includes(job.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      ) : (
        <EmptyState onAction={onClearFilters} />
      )}
    </section>
  )
})

export default JobList
