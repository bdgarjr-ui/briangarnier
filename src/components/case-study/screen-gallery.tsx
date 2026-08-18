export interface GalleryScreen {
  src: string
  label: string
}

export function ScreenGallery({ screens }: { screens: GalleryScreen[] }) {
  return (
    <div className="my-8 -mx-6 sm:-mx-16">
      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 sm:px-16">
        {screens.map((screen) => (
          <div key={screen.label} className="flex w-40 shrink-0 snap-start flex-col items-center gap-2">
            <div className="relative w-40 overflow-hidden rounded-[1.5rem] border-[5px] border-neutral-900 shadow-lg">
              <div className="absolute top-0 left-1/2 z-10 h-3 w-14 -translate-x-1/2 rounded-b-lg bg-neutral-900" />
              <img src={screen.src} alt={screen.label} className="block h-auto w-full" loading="lazy" />
            </div>
            <span className="text-center text-[11px] text-muted-foreground">{screen.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
