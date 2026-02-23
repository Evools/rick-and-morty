import type {Character} from "../types.ts";
import {Link} from "react-router-dom";

export const CharacterCard = ({character}: { character: Character }) => {
    const statusColor =
        character.status === 'Alive' ? 'bg-green-500' :
            character.status === 'Dead' ? 'bg-red-500' : 'bg-gray-400';

    return (
        <Link to={`/character/${character.id}`}>


            <article className="flex flex-col md:flex-row w-full bg-[#3c3e44] rounded-lg overflow-hidden shadow-md min-h-[220px] transition-transform hover:scale-[1.02] cursor-pointer">
                <div className="md:w-2/5 w-full">
                    <img
                        src={character.image}
                        alt={character.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="md:w-3/5 w-full p-4 flex flex-col justify-between">
                    <section>
                        <div className="hover:text-[#ff9800] transition-colors cursor-pointer">
                            <h2 className="text-2xl font-black leading-tight">{character.name}</h2>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium mt-1">
                            <span className={`h-2 w-2 rounded-full ${statusColor}`}></span>
                            {character.status} - {character.species}
                        </div>
                    </section>

                    <section className="flex flex-col mt-4">
                        <span className="text-[#9e9e9e] text-sm font-medium">Last known location:</span>
                        <span className="hover:text-[#ff9800] cursor-pointer transition-colors leading-relaxed">
            {character.location.name}
          </span>
                    </section>

                    <section className="flex flex-col mt-4">
                        <span className="text-[#9e9e9e] text-sm font-medium">First seen in:</span>
                        <span className="hover:text-[#ff9800] cursor-pointer transition-colors leading-relaxed">
            {character.origin.name}
          </span>
                    </section>
                </div>
            </article>
        </Link>
    );
};