export interface Character {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown';
    species: string;
    image: string;
    gender: string;
    location: { name: string };
}

export interface ApiResponse{
    info: {
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
}