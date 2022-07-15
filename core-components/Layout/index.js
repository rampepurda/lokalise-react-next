import {useRouter} from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  const {asPath} = router

  return (
    <main>
      {children}
    </main>
  )
}
