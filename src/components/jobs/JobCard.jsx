import { Bookmark, BriefcaseBusiness, MapPin } from 'lucide-react'
import CompanyLogo from './CompanyLogo'

export default function JobCard({ job, saved, onToggleSave }) {
  const { id, title, company, logo, location, experience, type, salary, posted } = job

  return (
    <article className="group rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 hover:border-blue-200 hover:shadow-md transition">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        {/* Company Logo & Job Details */}
        <div className="flex items-start sm:items-center gap-3.5 min-w-0">
          <CompanyLogo logo={logo} company={company} className="h-11 w-11 sm:h-12 sm:w-12 shrink-0" />
          
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between sm:block gap-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base truncate leading-snug">
                {title}
              </h3>
              
              {/* Mobile bookmark */}
              <button
                type="button"
                onClick={() => onToggleSave(id)}
                className="sm:hidden -mt-1 p-1 text-slate-400 hover:text-blue-600 transition cursor-pointer"
                aria-label={saved ? `Unsave ${title}` : `Save ${title}`}
              >
                <Bookmark size={18} fill={saved ? 'currentColor' : 'none'} className={saved ? 'text-blue-600' : ''} />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">{company}</p>

            <div className="mt-2 flex flex-wrap items-center gap-2.5 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1">
                <MapPin size={13} className="text-slate-400" />
                {location}
              </span>
              <span className="inline-flex items-center gap-1">
                <BriefcaseBusiness size={13} className="text-slate-400" />
                {experience}
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700 border border-emerald-100/60">
                {type}
              </span>
            </div>
          </div>
        </div>

        {/* Salary, Posted Time & Desktop Bookmark */}
        <div className="flex items-center justify-between sm:justify-end sm:gap-4 pt-2 sm:pt-0 border-t border-slate-100 sm:border-0 shrink-0">
          <div className="text-left sm:text-right">
            <p className="font-bold text-slate-900 text-sm sm:text-base">{salary}</p>
            <p className="text-xs text-slate-400 mt-0.5">{posted}</p>
          </div>

          <button
            type="button"
            onClick={() => onToggleSave(id)}
            className="hidden sm:flex rounded-lg p-2 text-slate-400 hover:text-blue-600 hover:bg-slate-50 transition cursor-pointer"
            aria-label={saved ? `Unsave ${title}` : `Save ${title}`}
          >
            <Bookmark size={18} fill={saved ? 'currentColor' : 'none'} className={saved ? 'text-blue-600' : ''} />
          </button>
        </div>
      </div>
    </article>
  )
}