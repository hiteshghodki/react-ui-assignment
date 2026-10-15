import { useState } from 'react'
import { BriefcaseBusiness, ChevronDown, Menu, Bell } from 'lucide-react'
import { navItems } from '../../constants/navigation'
import MobileDrawer from './MobileDrawer'
import profileImage from '../../assets/profile.png'

function Brand() {
  return (
    <a href="#home" className="flex items-center gap-2 font-bold tracking-tight text-slate-900 group whitespace-nowrap shrink-0">
      <span className="flex h-8 w-8 sm:h-8.5 sm:w-8.5 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs transition group-hover:bg-blue-700">
        <BriefcaseBusiness size={18} />
      </span>
      <span className="text-lg font-bold text-slate-900">
        Job<span>Board</span>
      </span>
    </a>
  )
}

export default function Header({ savedCount, activeTab, onTabClick }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [avatarError, setAvatarError] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-5 lg:px-8">
          {/* Mobile hamburger */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>

          {/* Brand */}
          <div className="flex items-center justify-center md:justify-start">
            <Brand />
          </div>

          {/* Nav Items with responsive padding and whitespace-nowrap to prevent wrapping on tablet/iPad Mini */}
          <nav className="hidden items-center gap-0.5 lg:gap-1.5 md:flex" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = activeTab === item
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => onTabClick(item)}
                  className={`whitespace-nowrap rounded-lg px-2 md:px-2.5 lg:px-3.5 py-1.5 text-xs lg:text-sm font-medium transition cursor-pointer ${
                    isActive
                      ? 'text-blue-600 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span>{item}</span>
                  {item === 'Saved Jobs' && savedCount > 0 && (
                    <span className="ml-1.5 rounded-full bg-blue-50 px-1.5 py-0.5 text-xs font-semibold text-blue-600">
                      {savedCount}
                    </span>
                  )}
                </button>
              )
            })}
          </nav>

          {/* Right section: Notification & Profile */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <button
              type="button"
              className="relative rounded-lg p-2 text-slate-600 hover:bg-slate-100 transition cursor-pointer"
              aria-label="Notifications"
            >
              <Bell size={18} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-600 ring-2 ring-white" />
            </button>

            {/* Profile Dropdown */}
            <div className="hidden sm:flex items-center gap-1.5 lg:gap-2 pl-1 cursor-pointer select-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-700 overflow-hidden ring-1 ring-slate-200 shrink-0">
                {avatarError ? (
                  <span className="font-semibold text-xs text-slate-700">RS</span>
                ) : (
                  <img
                    src={profileImage}
                    alt="Ajay Sharma"
                    className="h-full w-full object-cover"
                    onError={() => setAvatarError(true)}
                  />
                )}
              </div>
              <span className="text-xs lg:text-sm font-semibold text-slate-800 whitespace-nowrap">
                Ajay sharma
              </span>
              <ChevronDown size={14} className="text-slate-400 shrink-0" />
            </div>
          </div>
        </div>
      </header>

      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        navItems={navItems}
        activeTab={activeTab}
        onTabClick={onTabClick}
        savedCount={savedCount}
      />
    </>
  )
}
