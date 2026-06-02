import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quiz Arcade | Play Trivia, Top the Leaderboard & Earn Rewards',
  description:
    'The ultimate neon trivia stadium. Challenge your mind across Sports, Tech, Cinema, and Space. Beat the clock, crush the global leaderboard, and unlock epic premium badges!',
  keywords:
    'trivia, quiz game, arcade trivia, leaderboard, earn rewards, tech quiz, movie trivia',
  openGraph: {
    type: 'website',
    url: 'https://quizarcade.gg/',
    title: 'Quiz Arcade | Play Trivia, Top the Leaderboard & Earn Rewards',
    description:
      'The ultimate neon trivia stadium. Challenge your mind across Sports, Tech, Cinema, and Space.',
    images: [
      {
        url: 'https://quizarcade.gg/assets/social-preview.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quiz Arcade | Play Trivia, Top the Leaderboard & Earn Rewards',
    description:
      'The ultimate neon trivia stadium. Challenge your mind across Sports, Tech, Cinema, and Space.',
    images: ['https://quizarcade.gg/assets/social-preview.png'],
  },
  icons: {
    icon: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
