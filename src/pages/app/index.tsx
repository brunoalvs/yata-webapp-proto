import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import type { NextPageWithLayout } from '../_app'
import App from '@/layouts/App'
import { TaskProvider } from '@/contexts/task'
import { FiPlus } from 'react-icons/fi'

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 'xxx-large'
  } as React.CSSProperties,
}

const AppPage: NextPageWithLayout = () => {
  const { status } = useSession()
  const { push } = useRouter()

  if (status === 'loading') {
    return (
      <div style={ styles.container }>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (status === 'unauthenticated') {

    setTimeout(() => {
      push('/signin')
    }, 3000)

    return (
      <div
        style={ styles.container }>
        <p>You are not signed in.</p>
        <p>Redirecting to Sign In...</p>
      </div>
    )
  }

  return (
    <div style={ styles.container }>
      <h1>App Page</h1>
      <p>When user is Logged!</p>
      <label
        style={{ display: 'flex', backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem' }}
      >
        <FiPlus />
        <input type='text' placeholder='Add a task' />
      </label>
    </div>
  )
}

AppPage.getLayout = function getLayout (page) {
  return (
    <TaskProvider>
      <App>
        { page }
      </App>
    </TaskProvider>
  )
}

export default AppPage
