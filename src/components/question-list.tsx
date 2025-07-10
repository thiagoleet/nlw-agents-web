import { useRoomQuestions } from "@/http/hooks/use-room-questions";
import { QuestionItem } from "./question-item";

interface QuestionListProps {
  roomId: string;
}

export function QuestionList({ roomId }: QuestionListProps) {
  const { data, isLoading, error } = useRoomQuestions(roomId);

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-gray-500">Carregando perguntas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-red-500">Erro ao carregar perguntas</p>
      </div>
    );
  }

  if (!Array.isArray(data)) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-gray-500">Nenhuma pergunta encontrada</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-foreground">
          Perguntas & Respostas
        </h2>
      </div>

      {data.map((question) => {
        return (
          <QuestionItem
            key={`question:${question.id}`}
            question={question}
          />
        );
      })}
    </div>
  );
}
