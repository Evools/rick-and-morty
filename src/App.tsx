import { Routes, Route } from 'react-router-dom';
import { CharacterDetail } from './pages/CharacterDetail';
import {Home} from "./pages/Home.tsx";

function App() {
    return (
        <div className="font-sans">
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/character/:id" element={<CharacterDetail />} />

                <Route path="*" element={<div className="text-white text-center py-20 text-4xl">404: Not Found</div>} />
            </Routes>
        </div>
    );
}

export default App;