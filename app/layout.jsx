import '@styles/global.css'
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: 'Promptly',
    description: 'Discover & Share AI Prompts'
}

export const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>
        </body>
        <main className='app'>
            <Nav />
            {children}
        </main>
    </html>
  )
}

export default RootLayout;