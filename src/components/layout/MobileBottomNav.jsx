import { navTabs } from '../../constants/navigation'

export default function MobileBottomNav({ activeTab, onTabClick, savedCount }) {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 border-t border-slate-200/90 bg-white/95 px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden"
      aria-label="Mobile bottom navigation"
    >
      {navTabs.map(({ label, Icon, tab }) => {
        const isActive = activeTab === tab
        return (
          <button
            key={label}
            type="button"
            onClick={() => onTabClick(tab)}
            className={`flex flex-col items-center justify-center gap-1 py-1 text-[11px] font-semibold transition cursor-pointer ${
              isActive ? 'text-blue-600' : 'text-slate-400 hover:text-slate-700'
            }`}
          >
            <div className="relative">
              <Icon size={19} />
              {label === 'Saved' && savedCount > 0 && (
                <span className="absolute -top-1 -right-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-blue-600 text-[9px] font-bold text-white">
                  {savedCount}
                </span>
              )}
            </div>
            <span>{label}</span>
          </button>
        )
      })}
    </nav>
  )
}
