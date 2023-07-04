import './globals.css';
import { Header } from './Components/header';
import { Saira } from 'next/font/google';
import { FilterContextProvider } from './Context/filter-context';

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'capputeeno',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <FilterContextProvider>
          <Header />
          {children}
        </FilterContextProvider>
      </body>
    </html>
  );
}
