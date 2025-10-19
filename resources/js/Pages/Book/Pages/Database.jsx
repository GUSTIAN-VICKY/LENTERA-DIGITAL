import React from 'react';

export default function Database({ isActive, participants = [] }) {
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleString('id-ID', {
            dateStyle: 'medium',
            timeStyle: 'short'
        });
    };

    return (
        <div className={`page ${isActive ? 'active' : ''} flex-col !justify-start`} data-page="14">
            <div className="page-number-display">14</div>
            <div className="page-content-scroll w-full">
                <h2 className="text-3xl font-bold text-center text-blue-900 drop-shadow-sm fade-in">Database Partisipan</h2>
                <p className="text-center text-gray-600 mt-2 mb-8 fade-in delay-1">Daftar pengguna yang telah menyelesaikan panduan.</p>
                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                <tr>
                                    <th scope="col" className="py-3 px-6">No.</th>
                                    <th scope="col" className="py-3 px-6">Nama</th>
                                    <th scope="col" className="py-3 px-6">Usia</th>
                                    <th scope="col" className="py-3 px-6">Status</th>
                                    <th scope="col" className="py-3 px-6">Komentar</th>
                                    <th scope="col" className="py-3 px-6">Waktu Selesai</th>
                                </tr>
                            </thead>
                            <tbody id="db-table-body">
                                {participants.length > 0 ? (
                                    participants.map((person, index) => (
                                        <tr key={person.id || index} className="border-b">
                                            <td className="py-4 px-6">{index + 1}</td>
                                            <td className="py-4 px-6 font-medium text-gray-900">{person.name}</td>
                                            <td className="py-4 px-6">{person.age}</td>
                                            <td className="py-4 px-6">{person.status}</td>
                                            <td className="py-4 px-6">{person.comment}</td>
                                            <td className="py-4 px-6">{formatDate(person.created_at)}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center p-4">Belum ada data partisipan.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
