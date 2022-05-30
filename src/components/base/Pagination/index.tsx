import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo } from 'react'

type Props = {
  totalCount: number
}

export const Pagination = memo(({ totalCount }: Props) => {
  const { query } = useRouter()
  const currentPage = Number(query.id || 1)

  if (totalCount === 0) return <></>

  const prevPage: number = currentPage + 1
  const backPage: number = currentPage - 1
  const lastPage: number = Math.ceil(totalCount / 5)

  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <div className="mt-10 justify-end">
      <ul className="flex justify-center">
        {currentPage !== 1 && (
          <li className="mr-2">
            <Link href={`/page/${backPage}`}>
              <a>前へ</a>
            </Link>
          </li>
        )}
        {range(1, lastPage).map((n, i) => (
          <li key={i} className="mr-2">
            <Link href={`/page/${n}`}>
              <a>{n}</a>
            </Link>
          </li>
        ))}
        {lastPage !== currentPage && (
          <li>
            <Link href={`/page/${prevPage}`}>
              <a>次へ</a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
})

Pagination.displayName = 'Pagination'
