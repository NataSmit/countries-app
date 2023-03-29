import React, { useState, useLayoutEffect } from "react"

export const useTheme = () => {
  // можно явно указать тип для стейта, useState<string>. И этот файлик почему-то js, а не ts
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme)
  }, [theme])

  return {theme, setTheme}
}
