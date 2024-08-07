export const generateMockData = (): { labels: string[]; data: number[] } => {
    const labels = Array.from({ length: 10 }, (_, i) => `Ponto ${i + 1}`);
    const data = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

    return { labels, data };
};

export const generateRandomData = (length: number) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 100));
};