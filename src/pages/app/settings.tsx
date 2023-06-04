import type { NextPageWithLayout } from '@/pages/_app'
import { useAuthContext } from '@/contexts/AuthContext'
import Avatar from '@/components/atoms/Avatar'
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import AppLayout from '@/components/templates/AppLayout'

const SettingsPage: NextPageWithLayout = () => {
  const { user } = useAuthContext()

  return (
    <div>
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          marginTop: '2rem',
        }}
      >
        <Avatar
          name={user?.displayName ?? ''}
          src={user?.photoURL ?? ''}
          size="large"
        />
        <Button>Change</Button>
        <Button variant="text">Remove</Button>
      </section>

      <form
        style={{
          maxWidth: 'max-content',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '1.5rem',
          backgroundColor: 'var(--background-secondary)',
          borderRadius: '1rem',
          marginTop: '2rem',
          padding: '2rem',
        }}
      >
        <Input
          defaultValue={user?.displayName ?? ''}
          fullWidth={true}
          label="Name"
          placeholder="Your name"
        />

        <Input
          defaultValue={user?.email ?? ''}
          label="Email"
          placeholder="Your email"
        />

        <Button type="submit">Save</Button>
      </form>
    </div>
  )
}

SettingsPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>
}

export default SettingsPage
