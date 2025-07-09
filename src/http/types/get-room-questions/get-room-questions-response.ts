export type GetRoomQuestionsResponse = {
  items: Array<{
    id: string;
    question: string;
    answer: string | null;
    createdAt: string;
  }>;
  total: number;
  message: string;
};
