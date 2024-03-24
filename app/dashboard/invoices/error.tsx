// /dashboard/invoices/error.tsx

'use client';
 
import { useEffect } from 'react';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // エラー報告サービスにエラーをログすることもできます
    console.error(error);
  }, [error]);
 
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">何か問題が発生しました！</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // 請求書ルートを再レンダリングして回復を試みる
          () => reset()
        }
      >
        もう一度試す
      </button>
    </main>
  );
}
