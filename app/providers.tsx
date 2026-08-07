"use client"

import { Provider } from "react-redux"
import { store } from "@/store"
import { useEffect } from "react"
import { tokenUtils } from "@/lib/tokenUtils"
import { fetchUserProfile } from "@/store/thunks/authThunks"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

/**
 * Inner component to handle auth hydration after the Provider is mounted.
 */
function AuthHydrator({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch()
  const { isAuthenticated } = useAppSelector((state) => state.auth)

  useEffect(() => {
    // On app boot, if access token exists in cookies but Redux state isn't hydrated, fetch profile
    const accessToken = tokenUtils.getAccessToken()
    if (accessToken && !isAuthenticated) {
      dispatch(fetchUserProfile())
    }
  }, [dispatch, isAuthenticated])

  return <>{children}</>
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthHydrator>{children}</AuthHydrator>
    </Provider>
  )
}
