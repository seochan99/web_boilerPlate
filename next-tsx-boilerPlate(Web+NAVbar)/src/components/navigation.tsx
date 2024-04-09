'use client';
//위 명령어를 사용해도 rendering이 backend에서 먼저 이뤄짐
import Link from 'next/link';

/**
 * Navigation component
 * @returns Navigation component
 * @example
 * ```tsx
 * <Navigation />
 * ```
 * @see Navigation
 * @since 24.04.10
 */
export default function Navigation() {
  return (
    <nav className="py-5 flex justify-center">
      <div className="w-4/5 px-10 justify-between inline-flex text-xl font-bold">
        <Link href="/">GDSC DGU</Link>
        <div className="justify-start items-start gap-10 flex">
          <Link href="/timeline">Timeline</Link>
          <Link href="/seminar">Seminar</Link>
          <Link href="/project">Project</Link>
          <Link href="/member">Member</Link>
          <Link href="/recruit">Recruit</Link>
        </div>
      </div>
    </nav>
  );
}
