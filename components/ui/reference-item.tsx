"use client";

type Props = {
  title: string;
  url: string;
  summary: string;
};

export default function ReferenceItem({ title, url, summary }: Props) {
  return (
    <details className="group rounded-lg border border-red-500/30 bg-red-500/5 open:bg-red-500/10 transition">
      <summary className="cursor-pointer list-none px-4 py-3 flex items-start justify-between gap-3">
        <span className="text-sm sm:text-base text-gray-200 font-medium">
          {title}
        </span>

        {/* icon external link */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-1 text-red-400 hover:text-red-300 text-xs sm:text-sm"
          onClick={(e) => e.stopPropagation()}
          title="Mở bài gốc"
        >
          Đọc bài gốc
          <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-90">
            <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"/>
            <path fill="currentColor" d="M5 5h6v2H7v10h10v-4h2v6H5z"/>
          </svg>
        </a>
      </summary>

      <div className="px-4 pb-4 pt-0 text-gray-300 text-sm leading-relaxed border-t border-red-500/20">
        {summary}
      </div>
    </details>
  );
}
