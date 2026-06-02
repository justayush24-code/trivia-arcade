'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { QuizInterface } from '@/components/QuizInterface';
import { Question, QuizCategory } from '@/types';

/**
 * Quiz Play Page
 * Initializes quiz session and renders the quiz interface
 */
export default function PlayPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') as QuizCategory;
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch questions from Firestore for the selected category
    const mockQuestions: Question[] = [
      {
        id: '1',
        category,
        question_text: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        correct_option: 0,
        difficulty: 'easy',
        explanation: 'Paris has been the capital of France since the 12th century.',
        created_at: new Date(),
      },
      {
        id: '2',
        category,
        question_text: 'Who won the FIFA World Cup in 2022?',
        options: ['France', 'Argentina', 'Brazil', 'Germany'],
        correct_option: 1,
        difficulty: 'medium',
        explanation: 'Argentina won the 2022 FIFA World Cup, defeating France in the final.',
        created_at: new Date(),
      },
      {
        id: '3',
        category,
        question_text: 'What is the largest planet in our solar system?',
        options: ['Saturn', 'Mars', 'Jupiter', 'Neptune'],
        correct_option: 2,
        difficulty: 'easy',
        explanation: 'Jupiter is the largest planet in our solar system by a significant margin.',
        created_at: new Date(),
      },
      {
        id: '4',
        category,
        question_text: 'Which scientist developed the theory of relativity?',
        options: ['Isaac Newton', 'Albert Einstein', 'Stephen Hawking', 'Niels Bohr'],
        correct_option: 1,
        difficulty: 'easy',
        explanation: 'Albert Einstein developed both special and general relativity.',
        created_at: new Date(),
      },
      {
        id: '5',
        category,
        question_text: 'What is the most spoken language in the world by native speakers?',
        options: ['English', 'Spanish', 'Mandarin Chinese', 'Hindi'],
        correct_option: 2,
        difficulty: 'medium',
        explanation: 'Mandarin Chinese has the most native speakers globally.',
        created_at: new Date(),
      },
      {
        id: '6',
        category,
        question_text: 'Who painted the Mona Lisa?',
        options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Michelangelo', 'Raphael'],
        correct_option: 1,
        difficulty: 'easy',
        explanation: 'Leonardo da Vinci painted the Mona Lisa in the early 16th century.',
        created_at: new Date(),
      },
      {
        id: '7',
        category,
        question_text: 'What is the smallest prime number?',
        options: ['0', '1', '2', '3'],
        correct_option: 2,
        difficulty: 'easy',
        explanation: '2 is the smallest prime number and the only even prime.',
        created_at: new Date(),
      },
      {
        id: '8',
        category,
        question_text: 'In which year did the Titanic sink?',
        options: ['1912', '1915', '1920', '1905'],
        correct_option: 0,
        difficulty: 'medium',
        explanation: 'The Titanic sank on April 15, 1912, after hitting an iceberg.',
        created_at: new Date(),
      },
      {
        id: '9',
        category,
        question_text: 'What is the capital of Japan?',
        options: ['Osaka', 'Tokyo', 'Kyoto', 'Hiroshima'],
        correct_option: 1,
        difficulty: 'easy',
        explanation: 'Tokyo has been the capital of Japan since 1868.',
        created_at: new Date(),
      },
      {
        id: '10',
        category,
        question_text: 'Which element has the chemical symbol Au?',
        options: ['Silver', 'Aluminum', 'Gold', 'Argon'],
        correct_option: 2,
        difficulty: 'medium',
        explanation: 'Au is the chemical symbol for Gold, derived from its Latin name "aurum".',
        created_at: new Date(),
      },
    ];
    setQuestions(mockQuestions);
    setLoading(false);
  }, [category]);

  const handleQuizComplete = (finalScore: number) => {
    // TODO: Save quiz results to Firestore
    console.log('Quiz completed with score:', finalScore);
    // Redirect to results page
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-neon-purple"></div>
      </div>
    );
  }

  return <QuizInterface questions={questions} onQuizComplete={handleQuizComplete} />;
}
