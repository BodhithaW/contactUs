export const metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://esoft.lk'
      : 'http://localhost:3000'
  ),
  title: 'ESOFT Metro Campus',
  description: 'ESOFT Metro Campus - Leading Higher Education Institute in Sri Lanka',
  keywords: 'education, university, sri lanka, higher education, courses, ESOFT',
  openGraph: {
    title: 'ESOFT Metro Campus',
    description: 'Leading Higher Education Institute in Sri Lanka',
    url: 'https://esoft.lk',
    siteName: 'ESOFT Metro Campus',
    images: [
      {
        url: '/images/esu1.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}; 