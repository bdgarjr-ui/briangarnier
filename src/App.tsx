import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import GreenChangeCaseStudy from "@/pages/GreenChangeCaseStudy"
import IndeedCaseStudy from "@/pages/IndeedCaseStudy"
import ReadyForRepairCaseStudy from "@/pages/ReadyForRepairCaseStudy"
import { useGlowPointer } from "@/hooks/use-glow-pointer"

function App() {
  useGlowPointer()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/green-change" element={<GreenChangeCaseStudy />} />
        <Route path="/work/indeed-research" element={<IndeedCaseStudy />} />
        <Route path="/work/ready-for-repair" element={<ReadyForRepairCaseStudy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
