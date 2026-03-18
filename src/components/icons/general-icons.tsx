interface IconProps {
  size: string;
}

export const CopyIcon = ({ size }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <g fill="#0F0F0F">
        <path
          fillRule="evenodd"
          d="M21 8a3 3 0 0 0-3-3h-8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8Zm-2 0a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8Z"
          clipRule="evenodd"
        />
        <path d="M6 3h10a1 1 0 1 0 0-2H6a3 3 0 0 0-3 3v14a1 1 0 1 0 2 0V4a1 1 0 0 1 1-1Z" />
      </g>
    </svg>
  );
};

export const LoginIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      stroke="#0f172b"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.75}
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="m10 17 5-5-5-5M15 12H3M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    </svg>
  );
};
