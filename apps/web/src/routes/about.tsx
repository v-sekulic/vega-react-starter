import { createFileRoute } from '@tanstack/react-router';
import { Title } from '@/routes/index';

export const Route = createFileRoute('/about')({
  component: About,
});

function About() {
  return (
    <div className="p-2 h-full flex justify-center items-center flex-1">
      <Title>Hello from About!</Title>
    </div>
  );
}
