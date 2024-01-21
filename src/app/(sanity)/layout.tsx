"use client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <button
        onClick={() => {
          fetch(
            process.env?.NEXT_PUBLIC_REBUILD_HOOK ||
              "https://api.netlify.com/build_hooks/65acc7e1c319e82dd4ad678f",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: "{}",
            }
          );
        }}
      >
        REBUILD WEBSITE
      </button>
    </html>
  );
}
