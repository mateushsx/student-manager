import { Routes, Route } from 'react-router-dom'
import { Dashboard } from '@renderer/pages/dashboard'
import { Classroom } from '@renderer/pages/classroom'
import { Frequency } from '@renderer/pages/frequency'
import { CreateStudent } from '@renderer/pages/createStudent'

export function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/createStudent" element={<CreateStudent />} />
      <Route path="/classroom" element={<Classroom />} />
      <Route path="/frequency" element={<Frequency />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}
