import React from 'react';

export default function Mangadetails({ manga }) {
  return (
    <div>
      <div className="flow-root">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Title</dt>
            <dd className="text-gray-700 sm:col-span-2">{manga.title}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Authors</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {manga.authors && manga.authors.map((item, index) => (
                <div key={index}>
                  {item.name}
                </div>
              ))}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Status</dt>
            <dd className="text-gray-700 sm:col-span-2">{manga.status}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Published</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {manga.published && manga.published.string}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Synopsis</dt>
            <dd className="text-gray-700 sm:col-span-2">{manga.synopsis}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Genres</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {manga.genres && manga.genres.map((item, index) => (
                <div key={index}>
                  <span className="mt-1 whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-sm text-blue-700">
                    {item.name}
                  </span>
                </div>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
