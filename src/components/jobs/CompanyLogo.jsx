import { useState } from 'react'

export default function CompanyLogo({ logo, company, name, className = "h-11 w-11" }) {
  const [hasError, setHasError] = useState(false)
  const companyName = company || name || 'Company'

  if (!logo || hasError) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100/90 text-blue-700 font-bold text-sm select-none shrink-0 ${className}`}
        aria-label={`${companyName} logo`}
      >
        {companyName.charAt(0)}
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-center rounded-xl bg-white border border-slate-200/80 p-1.5 shadow-xs shrink-0 overflow-hidden ${className}`}>
      <img
        src={logo}
        alt={`${companyName} logo`}
        className="h-full w-full object-contain"
        loading="lazy"
        onError={() => setHasError(true)}
      />
    </div>
  )
}
