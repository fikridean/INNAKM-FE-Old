"use client";

export default function BackButton() {

  return (
    <div>
      <button onClick={() => window.history.back()} className='btn-secondary'>Back</button>
    </div>
  );
}
