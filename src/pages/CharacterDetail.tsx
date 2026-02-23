import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type {Character} from "../types.ts";

export const CharacterDetail = () => {
    const { id } = useParams();
    const [char, setChar] = useState<Character | null>(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(data => setChar(data));
    }, [id]);

    if (!char) return <div className="p-20 text-center text-white">Loading character...</div>;

    return (
        <div className="min-h-screen bg-[#272b33] text-white p-8">
            <Link to="/" className="text-[#ff9800] hover:underline mb-8 inline-block">← Back to Home</Link>

            <div className="max-w-4xl mx-auto bg-[#3c3e44] rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                <img src={char.image} alt={char.name} className="w-full md:w-96 object-cover" />
                <div className="p-8">
                    <h1 className="text-5xl font-black mb-4">{char.name}</h1>
                    <div className="space-y-4 text-lg">
                        <p><span className="text-gray-400">Status:</span> {char.status}</p>
                        <p><span className="text-gray-400">Species:</span> {char.species}</p>
                        <p><span className="text-gray-400">Gender:</span> {char.gender}</p>
                        <p><span className="text-gray-400">Origin:</span> {char.origin.name}</p>
                        <p><span className="text-gray-400">Last location:</span> {char.location.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};