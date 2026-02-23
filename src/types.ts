export interface Character {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown';
    species: string;
    image: string;
    gender: string;
    location: { name: string };
    origin: { name: string };
}

export interface ApiResponse {
    info: { pages: number; count: number };
    results: Character[];
}