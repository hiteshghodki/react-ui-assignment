import { useState, useEffect } from 'react'
import { Search, MapPin, ChevronDown } from 'lucide-react'

export default function SearchBar({ onSearch, isFiltered }) {
  const [keyword, setKeyword] = useState('')
  const [location, setLocation] = useState('')
  const [experience, setExperience] = useState('')

  useEffect(() => {
    if (!isFiltered) {
      setKeyword('')
      setLocation('')
      setExperience('')
    }
  }, [isFiltered])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch({ keyword, location, experience })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-10 -mt-6 sm:-mt-8 mx-auto max-w-5xl rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-lg shadow-slate-900/5"
      role="search"
    >
      <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr_1.15fr_auto] gap-3 sm:gap-0 sm:items-center">
        {/* Keyword input */}
        <div className="px-1 sm:px-2.5 lg:px-3">
          <label className="block text-[11px] font-semibold text-slate-500 mb-1">
            Job title or keyword
          </label>
          <div className="flex items-center gap-2 rounded-xl sm:rounded-none border sm:border-0 border-slate-200 px-3 py-2 sm:px-0 sm:py-0 text-slate-400">
            <Search size={16} className="shrink-0 text-slate-400" />
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="e.g. React Developer"
              className="w-full bg-transparent text-xs lg:text-sm text-slate-800 outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Location input */}
        <div className="px-1 sm:px-2.5 lg:px-3 sm:border-l sm:border-slate-200/80">
          <label className="block text-[11px] font-semibold text-slate-500 mb-1">
            Location
          </label>
          <div className="flex items-center gap-2 rounded-xl sm:rounded-none border sm:border-0 border-slate-200 px-3 py-2 sm:px-0 sm:py-0 text-slate-400">
            <MapPin size={16} className="shrink-0 text-slate-400" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Remote or Bangalore"
              className="w-full bg-transparent text-xs lg:text-sm text-slate-800 outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Experience dropdown */}
        <div className="px-1 sm:px-2.5 lg:px-3 sm:border-l sm:border-slate-200/80">
          <label className="block text-[11px] font-semibold text-slate-500 mb-1">
            Experience
          </label>
          <div className="relative flex items-center rounded-xl sm:rounded-none border sm:border-0 border-slate-200 px-3 py-2 sm:px-0 sm:py-0">
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full appearance-none bg-transparent text-xs lg:text-sm text-slate-800 outline-none pr-5 cursor-pointer"
            >
              <option value="">Select experience</option>
              <option value="2">2-4 Yrs</option>
              <option value="3">3-5 Yrs</option>
              <option value="4">4-6 Yrs</option>
            </select>
            <ChevronDown size={14} className="pointer-events-none absolute right-3 sm:right-1 text-slate-400" />
          </div>
        </div>

        {/* Search button */}
        <div className="pt-1 sm:pt-0 sm:pl-2.5 lg:pl-3">
          <button
            type="submit"
            className="w-full sm:w-auto whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4.5 lg:px-6 py-2.5 text-xs lg:text-sm font-semibold text-white shadow-xs hover:bg-blue-700 transition cursor-pointer select-none"
          >
            <Search size={16} />
            <span>Search Jobs</span>
          </button>
        </div>
      </div>
    </form>
  )
}
