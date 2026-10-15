import { useState, useMemo } from 'react'
import { jobs as allJobs } from '../data/jobs'

const EXPERIENCE_MAP = {
  '2': '2-4 Yrs',
  '3': '3-5 Yrs',
  '4': '4-6 Yrs'
}

export function useJobFilters() {
  const [filters, setFilters] = useState({ keyword: '', location: '', experience: '' })
  const [category, setCategory] = useState('')
  const [saved, setSaved] = useState([1]) // Default saved job id (Meta)
  const [activeTab, setActiveTab] = useState('Home')
  const [loading, setLoading] = useState(false)

  const isFiltered = Boolean(filters.keyword || filters.location || filters.experience || category)

  const filteredJobs = useMemo(() => {
    let result = allJobs

    if (activeTab === 'Saved Jobs') {
      result = result.filter((job) => saved.includes(job.id))
    }

    return result.filter((job) => {
      const query = filters.keyword.trim().toLowerCase()
      const loc = filters.location.trim().toLowerCase()
      const exp = filters.experience

      const matchesQuery =
        !query ||
        [job.title, job.company, job.category, job.description].some((v) =>
          v.toLowerCase().includes(query)
        )

      const matchesLocation = !loc || job.location.toLowerCase().includes(loc)
      const matchesExperience = !exp || job.experience === (EXPERIENCE_MAP[exp] || exp)
      const matchesCategory = !category || job.category === category

      return matchesQuery && matchesLocation && matchesExperience && matchesCategory
    })
  }, [filters, category, saved, activeTab])

  const runSearch = (nextFilters) => {
    setFilters(nextFilters)
    setLoading(true)
    setTimeout(() => setLoading(false), 450)
  }

  const clearFilters = () => {
    setFilters({ keyword: '', location: '', experience: '' })
    setCategory('')
    setLoading(false)
  }

  const toggleSave = (id) => {
    setSaved((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
    )
  }

  return {
    filters,
    setFilters,
    category,
    setCategory,
    saved,
    activeTab,
    setActiveTab,
    loading,
    isFiltered,
    filteredJobs,
    totalJobsCount: allJobs.length,
    runSearch,
    clearFilters,
    toggleSave
  }
}
