"use client";

export default function BackButton({ input }: { input: string }) {

  return (
    <div>
      <button className='btn-primary'>{input}</button>
    </div>
  );
}
