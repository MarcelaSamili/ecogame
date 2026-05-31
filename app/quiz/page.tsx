import { Suspense } from 'react';
import QuizContent from './QuizContent';

export default function QuizPage() {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <QuizContent />
    </Suspense>
  );
}
