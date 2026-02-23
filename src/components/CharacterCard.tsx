import type {Character} from "../types.ts";

export const CharacterCard = ({character}: {character:Character}) => {

    const statusColor = {
        Alive: "bg-green-500",
        Dead: "bg-red-500",
        unknown: "bg-gray-500",
    }[character.status]

    return (
        <article className="flex items-center gap-2 bg-[#3c3e44] w-full text-white overflow-hidden rounded-xl">
            <img
                src={character.image}
                alt={character.name}
                className="max-w-[30%] h-full object-cover rounded-xl"
            />
            <div className="p-4 flex flex-col gap-3 max-w-[70%]">
                <div className="flex flex-col gap-1">
                    <h2 className="text-2xl font-medium">{character.name}</h2>
                    <p className="flex items-center gap-2">
                        <span className={`inline-block w-4 h-4 ${statusColor} rounded-full`}></span>
                        {character.status} - {character.species}
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-gray-500">Last known location:</p>
                    <a className="transition hover:text-orange-600" href="">{character.location.name}</a>
                </div>
            </div>
        </article>
    )
}
