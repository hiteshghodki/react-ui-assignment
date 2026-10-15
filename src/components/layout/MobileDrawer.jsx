import { useState, useEffect } from 'react'
import { BriefcaseBusiness, X } from 'lucide-react'
import { navItems as defaultNavItems } from '../../constants/navigation'
import profileImage from '../../assets/profile.png'

export default function MobileDrawer({
  isOpen,
  onClose,
  navItems = defaultNavItems,
  activeTab,
  onTabClick,
  savedCount
}) {
  const [avatarError, setAvatarError] = useState(false)
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="drawer-backdrop fixed inset-0 z-50 bg-slate-950/40 md:hidden backdrop-blur-xs"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="drawer-panel h-full w-[min(82vw,320px)] bg-white p-5 shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5 font-bold tracking-tight text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs">
                <BriefcaseBusiness size={18} />
              </span>
              <span className="text-lg font-bold text-slate-900">
                Job<span>Board</span>
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 transition cursor-pointer"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* User Profile Card */}
          <div className="mt-4 flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700 overflow-hidden ring-1 ring-slate-200">
              {avatarError ? (
                <span>RS</span>
              ) : (
                <img
                  src={profileImage}
                  alt="Ajay Sharma"
                  className="h-full w-full object-cover"
                  onError={() => setAvatarError(true)}
                />
              )}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Ajay sharma</p>
              <p className="text-xs text-slate-500">ajay.sharma@example.com</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mt-5 space-y-1" aria-label="Mobile drawer navigation">
            {navItems.map((item) => {
              const isActive = activeTab === item
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    onTabClick(item)
                    onClose()
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm font-medium transition cursor-pointer ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item}</span>
                  {item === 'Saved Jobs' && savedCount > 0 && (
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-700">
                      {savedCount}
                    </span>
                  )}
                </button>
              )
            })}
          </nav>
        </div>

        <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 text-center">
          JobBoard UI Assignment · v1.0
        </div>
      </div>
    </div>
  )
}
