import React from 'react';
import { router } from '@inertiajs/react';

export default function Welcome() {
    // Redirect to home immediately
    React.useEffect(() => {
        router.get('/');
    }, []);

    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
                <p className="text-white">Redirecting to home...</p>
            </div>
        </div>
    );
}