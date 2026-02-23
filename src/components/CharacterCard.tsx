export default function CharacterCard() {
    return (
        <article className="flex items-center gap-2 bg-[#3c3e44] w-full text-white overflow-hidden rounded-xl">
            <img
                src="https://plus.unsplash.com/premium_photo-1754752265556-77115945cde2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img"
                className="max-w-[30%] h-full object-cover rounded-xl"
            />
            <div className="p-4 flex flex-col gap-3 max-w-[70%]">
                <div className="flex flex-col gap-1">
                    <h2 className="text-2xl font-medium">Centaur</h2>
                    <p className="flex items-center gap-2">
                        <span className="inline-block w-4 h-4 bg-green-400 rounded-full"></span>
                        Alive - Mythological Creature
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-gray-500">Last known location:</p>
                    <a className="transition hover:text-orange-600" href="">Mr. Goldenfold's dream</a>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-gray-500">First seen in:</p>
                    <a className="transition hover:text-orange-600" href="">Lawnmower Dog</a>
                </div>
            </div>
        </article>
    )
}
