export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-8 px-4">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe9kYfV_cJ9ZBXvibT0UrWRznCqRYHEBNXN7vDlYFyT_P52Vw/viewform?embedded=true"
          width="640"
          height="800"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="w-full max-w-2xl"
        >
          Loading…
        </iframe>
      </main>
    </div>
  );
}
