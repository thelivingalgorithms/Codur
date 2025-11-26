export const Logo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

export const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export const CentralIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    <circle cx="50" cy="50" r="40" fill="#10b981" />
    <circle cx="50" cy="35" r="12" fill="white" />
    <path
      d="M30 65c0-11.046 8.954-20 20-20s20 8.954 20 20v10H30v-10z"
      fill="white"
    />
  </svg>
);

export const GreenIcon = ({ className }: { className?: string }) => (
  <div
    className={`${className} flex items-center justify-center rounded-full bg-green-500`}
  >
    <svg className="h-1/2 w-1/2" fill="white" viewBox="0 0 24 24">
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
    </svg>
  </div>
);

export const YellowIcon = ({ className }: { className?: string }) => (
  <div
    className={`${className} flex items-center justify-center rounded-full bg-yellow-500`}
  >
    <svg className="h-1/2 w-1/2" fill="white" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  </div>
);

export const PinkIcon = ({ className }: { className?: string }) => (
  <div
    className={`${className} flex items-center justify-center rounded-full bg-pink-500`}
  >
    <svg className="h-1/2 w-1/2" fill="white" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  </div>
);

export const BlueIcon = ({ className }: { className?: string }) => (
  <div
    className={`${className} flex items-center justify-center rounded-full bg-blue-500`}
  >
    <svg className="h-1/2 w-1/2" fill="white" viewBox="0 0 24 24">
      <path d="M7 10l5 5 5-5z" />
    </svg>
  </div>
);

export const ProfessionalAvatar = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    <circle cx="50" cy="50" r="50" fill="#3b82f6" />
    <circle cx="50" cy="35" r="15" fill="white" />
    <path
      d="M25 75c0-13.807 11.193-25 25-25s25 11.193 25 25v15H25V75z"
      fill="white"
    />
  </svg>
);
