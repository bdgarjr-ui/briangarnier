import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "[Name]",
      handle: "[Role, Company]",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "[Add a quote about working with Brian]",
  },
  {
    author: {
      name: "[Name]",
      handle: "[Role, Company]",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "[Add a quote about working with Brian]",
  },
  {
    author: {
      name: "[Name]",
      handle: "[Role, Company]",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "[Add a quote about working with Brian]",
  },
]

export function Testimonials() {
  return (
    <TestimonialsSection
      title="What people say"
      description="Placeholder quotes: swap these for real feedback from professors, collaborators, or hiring managers."
      testimonials={testimonials}
    />
  )
}
