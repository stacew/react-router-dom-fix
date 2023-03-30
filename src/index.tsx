/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, ReactNode, useCallback, useContext } from 'react'
import {
  BrowserRouter,
  NavigateFunction,
  Route,
  Routes,
  useLocation,
  useNavigate
} from 'react-router-dom'

const navigateFix = createContext<NavigateFunction>(() => {})

/**
 * I haven't had any problems yet, but you have to be careful.
 */
const useNavigateFix = (): NavigateFunction => useContext(navigateFix)

const BrowserRouterFix = (props: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <ProviderNavigateFix>{props.children}</ProviderNavigateFix>
    </BrowserRouter>
  )
  function ProviderNavigateFix(props: { children: ReactNode }) {
    const navigate = useNavigate()
    return (
      <navigateFix.Provider value={useCallback(navigate, [])}>
        {props.children}
      </navigateFix.Provider>
    )
  }
}

export {
  BrowserRouterFix,
  useNavigateFix,
  Routes,
  Route,
  useLocation,
  useNavigate
}
