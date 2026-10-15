import { Bookmark, BriefcaseBusiness, Code2, Database, MapPin, Palette, Smartphone, Cloud } from 'lucide-react'
import CompanyLogo from '../jobs/CompanyLogo'
import { recommendedJob } from '../../data/jobs'

const categoryIcons = [Code2, Database, Smartphone, Palette, Cloud]

export default function Sidebar({ categories, activeCategory, onCategory, onSelectJob, saved, onToggleSave }) {
  const isRecommendedSaved = saved?.includes(recommendedJob.id)

  return (
    <aside className="space-y-5" aria-label="Sidebar information">
      {/* Job Categories */}
      <section className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
        <h2 className="font-bold text-slate-900 text-base">Job Categories</h2>
        
        <div className="mt-3.5 space-y-1">
          {categories.map((category, index) => {
            const Icon = categoryIcons[index % categoryIcons.length]
            const isActive = activeCategory === category.name
            
            return (
              <button
                key={category.name}
                type="button"
                onClick={() => onCategory(category.name)}
                className={`flex w-full items-center justify-between rounded-xl px-2.5 py-2.5 text-left transition cursor-pointer ${
                  isActive ? 'bg-blue-50 text-blue-700 font-semibold' : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${isActive ? 'bg-blue-100/70 text-blue-700' : 'bg-slate-100/80 text-slate-500'}`}>
                    <Icon size={16} />
                  </span>
                  <span className="text-sm truncate">{category.name}</span>
                </div>
                <span className="text-xs text-slate-400 shrink-0 font-medium ml-2">
                  {category.count}
                </span>
              </button>
            )
          })}
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 text-center">
          <button
            type="button"
            onClick={() => onCategory('')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition cursor-pointer"
          >
            View all categories
          </button>
        </div>
      </section>

      {/* Recommended for you */}
      <section className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
        <h2 className="font-bold text-slate-900 text-base">Recommended for you</h2>
        
        <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50/50 p-3.5 transition hover:border-blue-200 hover:bg-blue-50/20">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-3">
              <CompanyLogo logo={recommendedJob.logo} company={recommendedJob.company} className="h-10 w-10 shrink-0" />
              <div>
                <h3 className="font-bold text-slate-900 text-sm leading-snug">
                  {recommendedJob.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {recommendedJob.company}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onToggleSave(recommendedJob.id)}
              aria-label={isRecommendedSaved ? `Unsave ${recommendedJob.title}` : `Save ${recommendedJob.title}`}
              className={`rounded-lg p-1.5 transition cursor-pointer ${
                isRecommendedSaved ? 'text-blue-600' : 'text-slate-400 hover:text-blue-600'
              }`}
            >
              <Bookmark size={17} fill={isRecommendedSaved ? 'currentColor' : 'none'} />
            </button>
          </div>

          <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1">
              <MapPin size={12} className="text-slate-400" />
              <span>{recommendedJob.location}</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <BriefcaseBusiness size={12} className="text-slate-400" />
              <span>{recommendedJob.experience}</span>
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-slate-200/60 pt-2.5">
            <span className="font-bold text-slate-900 text-sm">{recommendedJob.salary}</span>
            <button
              type="button"
              onClick={() => onSelectJob?.(recommendedJob)}
              className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
            >
              Apply now
            </button>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 text-center">
          <button
            type="button"
            onClick={() => onCategory('')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition cursor-pointer"
          >
            View all
          </button>
        </div>
      </section>
    </aside>
  )
}