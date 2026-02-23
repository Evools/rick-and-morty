import {useEffect, useState} from "react";
import {Hero} from "../components/Hero";
import {CharacterCard} from "../components/CharacterCard";
import type {ApiResponse, Character} from "../types";

export const Home = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
                const data: ApiResponse = await res.json();
                setCharacters(data.results || []);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        window.scrollTo(0, 0);
    }, [page]);

    return (
        <div className="bg-[#202329] min-h-screen">
            <Hero/>

            <main className="bg-[#272b33] py-10 px-4 md:px-20">
                <div className="max-w-7xl mx-auto">
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="text-[#ff9800] text-2xl font-bold animate-bounce">
                                Loading...
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-white">
                                {characters.map((char) => (
                                    <CharacterCard key={char.id} character={char}/>
                                ))}
                            </div>

                            <div className="flex justify-center items-center gap-4 mt-12 pb-10">
                                <button
                                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                                    disabled={page === 1}
                                    className="px-4 py-2 bg-[#3c3e44] text-white rounded hover:text-[#ff9800] disabled:opacity-50 transition-colors"
                                >
                                    Prev
                                </button>
                                <span className="text-white font-bold bg-[#3c3e44] px-4 py-2 rounded">
                                  {page}
                                </span>
                                <button
                                    onClick={() => setPage((p) => p + 1)}
                                    className="px-4 py-2 bg-[#3c3e44] text-white rounded hover:text-[#ff9800] transition-colors"
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
};