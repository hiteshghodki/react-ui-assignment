import { useRef } from 'react'
import { categories } from './data/jobs'
import { useJobFilters } from './hooks/useJobFilters'
import Header from './components/layout/Header'
import Hero from './components/layout/Hero'
import Sidebar from './components/layout/Sidebar'
import MobileBottomNav from './components/layout/MobileBottomNav'
import SearchBar from './components/search/SearchBar'
import JobList from './components/jobs/JobList'

export default function App() {
  const heroRef = useRef(null)
  const featuredJobsRef = useRef(null)
  const categoriesRef = useRef(null)

  const {
    category,
    setCategory,
    saved,
    activeTab,
    setActiveTab,
    loading,
    isFiltered,
    filteredJobs,
    runSearch,
    clearFilters,
    toggleSave
  } = useJobFilters()

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    if (tab === 'Jobs' || tab === 'Saved Jobs') {
      featuredJobsRef.current?.scrollIntoView({ behavior: 'smooth' })
    } else if (tab === 'Companies') {
      categoriesRef.current?.scrollIntoView({ behavior: 'smooth' })
    } else {
      heroRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSelectJob = (job) => {
    runSearch({ keyword: job.company, location: '', experience: '' })
    featuredJobsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#F7F9FC] pb-20 text-slate-900 md:pb-12 font-sans antialiased">
      <Header
        savedCount={saved.length}
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />

      <main className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <div ref={heroRef}>
          <Hero />
        </div>

        <SearchBar
          onSearch={runSearch}
          isFiltered={isFiltered}
        />

        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_340px] gap-6 sm:gap-7 items-start">
          <JobList
            ref={featuredJobsRef}
            activeTab={activeTab}
            isFiltered={isFiltered}
            filteredJobs={filteredJobs}
            loading={loading}
            saved={saved}
            onToggleSave={toggleSave}
            onClearFilters={clearFilters}
          />

          <div ref={categoriesRef} id="categories-section" className="scroll-mt-20">
            <Sidebar
              categories={categories}
              activeCategory={category}
              onCategory={(cat) => {
                setCategory(cat === category ? '' : cat)
                featuredJobsRef.current?.scrollIntoView({ behavior: 'smooth' })
              }}
              onSelectJob={handleSelectJob}
              saved={saved}
              onToggleSave={toggleSave}
            />
          </div>
        </div>
      </main>

      <MobileBottomNav
        activeTab={activeTab}
        onTabClick={handleTabClick}
        savedCount={saved.length}
      />
    </div>
  )
}