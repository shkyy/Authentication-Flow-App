'use client';

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8B80FF]"></div>
        <p className="mt-4 text-white">Loading...</p>
      </div>
    </div>
  );
}