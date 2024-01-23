import { FC, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Preview from './pages/Preview'
import Home from './pages/Home'
import { IThemeFormContext, ThemeFormContext } from './context/theme-form'
import { useThemeForm } from './hooks/useThemeForm'

const App: FC = () => {
  const { values, setField } = useThemeForm()
  const previewRef = useRef()

  const themeContextValue: IThemeFormContext = {
    values,
    setField,
    previewRef,
  }

  return (
    <ThemeFormContext.Provider value={themeContextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/preview/:templateId" element={<Preview />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeFormContext.Provider>
  )
}

export default App
