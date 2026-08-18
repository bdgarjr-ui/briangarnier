export function FinalScreen({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <div className="my-8 flex flex-col items-center">
      <div className="relative w-64 overflow-hidden rounded-[2rem] border-[6px] border-neutral-900 shadow-xl sm:w-72">
        <div className="absolute top-0 left-1/2 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-neutral-900" />
        <img src={src} alt={alt} className="block h-auto w-full" />
      </div>
      <p className="mt-4 max-w-sm text-center text-xs italic text-muted-foreground">{caption}</p>
    </div>
  )
}
