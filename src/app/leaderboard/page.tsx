'use client';

import { useState } from 'react';
import { Leaderboard } from '@/components/Leaderboard';

export default function LeaderboardPage() {
  const [timeframe, setTimeframe] = useState<'all-time' | 'weekly'>('all-time');

  return (
    <Leaderboard timeframe={timeframe} onTimeframeChange={setTimeframe} />
  );
}
